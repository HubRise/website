# HubRise Website

## Initial Setup

To install dependencies, execute `yarn install`. Make sure Node.js and Yarn are already installed on your system.

### Running the Server

For development mode, run `yarn dev`. The server will start at `http://localhost:3000`.

## Run the Test Suites

- **End-to-End Tests**:  
  Run `yarn cypress:run`. This will execute end-to-end tests to simulate user behavior on the website.

- **Unit Tests**:  
  Run `yarn test`. This focuses on individual components.

---

### Notes for Technical Writers

To run the server and tests, you need to have Node.js and Yarn installed on your system. If you don't have them installed, follow the instructions below.

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

This server uses two types of test suites. The `yarn cypress:run` command runs end-to-end tests, useful for verifying the entire workflow of the application. On the other hand, `yarn test` runs unit and integration tests that focus on specific parts or interactions in the application.

---

## Build and Run the Docker Image

To build the website docker image, run `docker build -t hubrise/website:latest .`.

To run the image locally, run `docker run -p 3000:80 hubrise/website:latest`.
