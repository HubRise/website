# ****************************
# **      Build stage       **
# ****************************
FROM node:10.16.0-buster AS build-stage

# Working directory
WORKDIR /website

# Install NodeJS packages
COPY package.json yarn.lock ./
RUN yarn install

# Add project files
COPY . .

# ENV variables need to be set at build stage or `gatbsy build` fails
# TODO: fix this
ENV SENTRY_DSN https://96b4d1defd7648308c6e30f8a3470cfd@sentry.io/1776244
ENV NODE_ENV production
ENV RECAPTCHA_SITE_KEY 6LfjbNYUAAAAAPx_tCv_YyhueK2JIjf58b2HGU8d
ENV CONTACT_MESSAGE_URL https://manager.hubrise.com/api/contact_message

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
