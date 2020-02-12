# syntax=docker/dockerfile:experimental
FROM node:10.16.0-buster

# -------------
# Install packages
# -------------

# Base packages
RUN apt-get update -qq && apt-get install -y vim less curl sudo

# Cypress dependencies
RUN apt-get install -y xvfb libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2

# Convenient alias
RUN echo "alias ll='ls -lah --color'" >> /root/.bashrc

# -------------
# Working directory
# -------------

ENV HEXO_ROOT /var/www/website
WORKDIR $HEXO_ROOT

# -------------
# Install NodeJS packages into a directory outside the workdir
# The entry point links the directory to [workdir]/node_modules after the host's app directory is bind mounted
# -------------

COPY package.json yarn.lock ./

RUN --mount=type=cache,target=/node_modules \
    yarn install --modules-folder /node_modules; \
    cp -Rf /node_modules /usr/local

RUN /usr/local/node_modules/cypress/bin/cypress install

# -------------
# Add project files
# -------------

COPY . .

# -------------
# Container startup
# -------------

EXPOSE 8000

ENTRYPOINT ["docker_dev/bin/entrypoint.sh"]

# Launch Hexo server (local development)
CMD ["./node_modules/.bin/gatsby", "develop", "-H", "0.0.0.0", "-p", "8000"]
