# ****************************
# **      Build stage       **
# ****************************
FROM node:10.16.0-stretch AS build-stage

# Working directory
WORKDIR /website

# Install NodeJS packages into a directory outside the workdir
# The entry point links the directory to [workdir]/node_modules after the host's app directory is bind mounted
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Add project files
COPY . .

# For sentry
ENV SENTRY_DSN https://96b4d1defd7648308c6e30f8a3470cfd@sentry.io/1776244
ENV NODE_ENV production

# Build project
RUN ./node_modules/.bin/gatsby build

# ****************************
# **      Deploy stage      **
# ****************************
FROM nginx:1.17.1

# Base packages
RUN apt-get update -qq && apt-get install -y vim less

# Convenient alias
RUN echo "alias ll='ls -lah --color'" >> /root/.bashrc

# Working directory
WORKDIR /usr/share/nginx/html

# Copy project files
COPY --from=build-stage /website/public .

# Container startup
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
