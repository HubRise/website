![](https://github.com/hubrise/website/workflows/spec/badge.svg)

# Development cycle

First install Docker for your platform.

## Windows or Linux

In console, `cd` to the project root then type:

```shell
DOCKER_BUILDKIT=1 docker build -f docker_dev/Dockerfile -t hubrise/website-dev .
docker run -t -v $(pwd):/var/www/website -p8000:8000 hubrise/website-dev
```

Runs on: http://localhost:8000

If the server is stuck or unresponsive, you can kill it by running this command: 

```shell
docker rm $(docker stop $(docker ps -a -q --filter ancestor=hubrise/website-dev --format="{{.ID}}"))
```

## Mac OS

Initial setup (to be done only once):
```
brew install rbenv ruby-build
gem install docker-sync
```

In console, `cd` to the project root then type:

```
docker-sync start
COMPOSE_DOCKER_CLI_BUILD=1 docker-compose -f docker-compose.mac.yml up --build
```

# Run the test suite

In interactive mode - could not make it work inside a Docker container.
Safe bet is to install the yarn dependencies and cypress on the host and run:

```
cypress run
```

The non-interactive, continuous integration version can run in a Docker container however:

```shell
docker run -v $(pwd):/var/www/website hubrise/website-dev /usr/local/bin/yarn test:all:ci 
```

# Run the production image locally

Runs on: http://localhost:8001

SSR (Server Side Rendering) enabled, no page auto-reload.

```shell
DOCKER_BUILDKIT=1 docker build -f Dockerfile -t hubrise/website .
docker run -v $(pwd):/var/www/website -p8001:80 hubrise/website
```

# Production deployment

Same process as a the other apps (see cluster/doc/build_deploy_app.md)
