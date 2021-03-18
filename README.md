![](https://github.com/hubrise/website/workflows/spec/badge.svg)

# Development cycle

The server runs on: http://localhost:8000

**Windows or Linux:**

First install Docker: https://docs.docker.com/get-docker/

Then open a console, `cd` to the project root, and type:

```
docker-compose -f docker-compose.yml up --build website_dev
```

**macOS:**

We don't recommended using Docker on macOS, because of file synchronization issues which slow down the development process.
Instead you should install NodeJS and the required dependencies locally, following this guide: https://www.gatsbyjs.org/tutorial/part-zero/
(short version: install Xcode Command line tools, NodeJS, and run `npm install` in a shell at the root of your project)

To run the website, open a console, and type:

```
NODE_ENV=local SENTRY_DSN= RECAPTCHA_SITE_KEY= CONTACT_MESSAGE_URL= gatsby develop -H 0.0.0.0 -p 8000
```

**macOS with Docker (not recommended):**

First install Docker: https://docs.docker.com/get-docker/. Then install Docker Sync with this command:

```
brew install rbenv ruby-build
gem install docker-sync
```

To run the website, open a console, `cd` to the project root, and type:

```
docker-sync start
docker-compose -f docker-compose.mac.yml up --build website_dev
docker exec website_dev rm -rf public .cache
```

# Run the test suite

In interactive mode - could not make it work inside a Docker container.
Safe bet is to install the yarn dependencies and cypress on the host and run:

```
cypress run
```

The non-interactive, continuous integration version can run in a Docker container however:

**Windows or Linux:**

```shell
docker-compose -f docker-compose.yml up --build website_test
```

**macOS (only works with Docker):**

```shell
docker-compose -f docker-compose.mac.yml up --build website_test
```

# Run the production image locally

Runs on: http://localhost:8001

This runs the server with Server Side Rendering (SSR) enabled. Pages are not reloaded on code change.

**Windows or Linux:**

```shell
docker-compose -f docker-compose.yml up --build website_prod
```

**macOS (only works with Docker):**

```shell
docker-compose -f docker-compose.mac.yml up --build website_prod
```

# Production deployment

For HubRise system administrators.

Use the same process as a the other apps (see cluster/doc/build_deploy_app.md)

# Test email-sending forms locally

1. Create file `.env.development` in the root directory with env variable `RECAPTCHA_SITE_KEY=`
2. Go to `/server` directory, create file `.env` and specify the same variables as in `/server/.env.example`
3. Install dependencies in `/server` directory via `yarn`
4. Run server via `cd server; node index.js`
5. From a separate terminal, run gatsby via `yarn start:dev`

# When building fails...

- Clean the last build. Open a terminal at the project's root and type:

```
rm -rf public .cache
```

- Delete all video files locally. This can sometimes be useful to speed up website building. Make sure not to commit the deletions! Open a terminal at the project's root and type:

```
find content -name "*webm" -o -name "*mp4" | xargs rm
```
