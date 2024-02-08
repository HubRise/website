# Run this file with:
# locust -f locustfile.py --host=https://www.hubrise.com --users 10 --spawn-rate 10 --headless
# Then go to http://localhost:8089/ to start the test

from locust import HttpUser, task, between
from bs4 import BeautifulSoup
import random

class HubRiseUser(HttpUser):
    wait_time = between(1, 5)
    pages_to_visit = set(["/"])
    visited_pages = set()
    downloaded_assets = set()

    def download_assets(self, soup):
        def download_asset(asset_type, attrs, attr_key):
            for asset in soup.find_all(asset_type, attrs):
                asset_url = asset.get(attr_key)
                if asset_url and asset_url not in self.downloaded_assets:
                    self.client.get(asset_url)
                    self.downloaded_assets.add(asset_url)

        # Download CSS, JS and Images
        download_asset('link', {'rel': 'stylesheet'}, 'href')
        download_asset('script', {'src': True}, 'src')
        download_asset('img', {'src': True}, 'src')

    @task
    def browse(self):
        # Remove already visited pages from pages_to_visit
        self.pages_to_visit.difference_update(self.visited_pages)

        if not self.pages_to_visit:
            print("No more pages to visit. Script has completed.")
            return

        # Choose a page to visit
        next_page = random.choice(list(self.pages_to_visit))
        self.visited_pages.add(next_page)

        response = self.client.get(next_page)
        soup = BeautifulSoup(response.text, 'html.parser')

        # Download assets for new pages
        self.download_assets(soup)

        # Extract and add new internal links to pages_to_visit
        links = [link.get('href') for link in soup.find_all('a') if link.get('href') and link.get('href').startswith('/')]
        self.pages_to_visit.update(links)
