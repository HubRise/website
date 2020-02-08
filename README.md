![](https://github.com/hubrise/website/workflows/spec/badge.svg)

# Setup

1. Install docker

2. In console, `cd` to the project root then type:

```shell
export DOCKER_BUILDKIT=1
docker build -f docker_dev/Dockerfile -t hubrise/website-dev .
```

# Development cycle


## Run in development mode

Runs on: http://localhost:8000

Pages are immediately reloaded on code update.

```shell
docker run -t -v $(pwd):/var/www/website -p8000:8000 hubrise/website-dev
docker rm $(docker stop $(docker ps -a -q --filter ancestor=hubrise/website-dev --format="{{.ID}}"))
```

## Run the test suite

In interactive mode - could not make it work inside a Docker container.
Safe bet is to install the yarn dependencies and cypress on the host and run:

```
cypress run
```

The non-interactive, continous integration version can run in a Docker container however:

```shell
docker run -v $(pwd):/var/www/website hubrise/website-dev /usr/local/bin/yarn test:all:ci 
```

## Run the production image locally

Runs on: http://localhost:8001

SSR (Server Side Rendering) enabled, no page auto-reload.

```shell
docker build -f Dockerfile -t hubrise/website .
docker run -v $(pwd):/var/www/website -p8001:80 hubrise/website
```

# Production deployment

Same process as a Rails app (see cluster/doc/build_deploy_app.md)

# Test email-sending forms locally

1. create file `.env.development` in the root directory with env variable `RECAPTCHA_SITE_KEY=`
2. go to `/server` directory, create file `.env` and specify the same variables as in `/server/.env.example`
3. install dependencies in `/server` directory via `yarn`
4. run server via `node server/index.js`
5. from a separate terminal, run gatsby via `yarn start:dev`
