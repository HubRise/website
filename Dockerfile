FROM node:18.16.0-bookworm

# Working directory
WORKDIR /app

# Base packages
RUN apt-get update -qq && apt-get install -y vim less

# Convenient alias
RUN echo "alias ll='ls -lah --color'" >> /root/.bashrc

# Install NodeJS packages
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Add project files
COPY . .

# Set Node environment variable to production
ENV NODE_ENV=production

# Validate that .env.production exists
RUN test -f .env.production || (echo '.env.production file missing!' && exit 1)

# Source environment variables and build
RUN export $(egrep -v '^#' .env.production | xargs) && yarn build

# Start the application
EXPOSE 80
CMD ["yarn", "start", "-p", "80"]
