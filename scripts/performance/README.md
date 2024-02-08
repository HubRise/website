# Load Testing

This folder contains a Locust script (`locustfile.py`) for load testing the HubRise website. Locust is an open-source load testing tool that allows you to define user behavior with Python code.

## What is Locust?

Locust is a scalable, user load testing tool written in Python. It is used to test the performance of your web services by simulating multiple users accessing the system simultaneously.

## Installation

To install Locust, run the following command:

```bash
pip3 install locust
```

You'll also need BeautifulSoup for HTML parsing. Install it with:

```bash
pip3 install beautifulsoup4
```

## Running the Script

1. Navigate to the directory containing `locustfile.py`.
2. Run the following command, or the command indicated in the `locustfile.py` file:

```bash
locust -f locustfile.py --host=https://www.hubrise.com
```

This will start the Locust UI. Open your web browser and go to `http://localhost:8089` to start the load test.
