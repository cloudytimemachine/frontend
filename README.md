# Cloudy Time Machine Frontend Service

This is the frontend service for the Cloudy Time Machine (CTM) project. The CTM is a modern implementation of the [Wayback Machine, the Internet Archive](https://archive.org/). This project was developed as a proof of concept and demonstration of a relatively simple real world app in a cloud native architechture.

The CTM Frontend Service is the web interface for the CTM project. It provides a graphical interface to request snapshots (website archivals) and browse previous snapshots. It is intended to be run in conjunction with the rest of the CTM services.

## Development Enviroment Setup

### Install required software:
  * nodejs
  * redis
  * rethinkdb

### To interact with the deployment cluster you will also need to install:
  * Docker
  * Google Cloud SDK
  * kubectl
  * And contact [Ross](@rosskukulinski) for access to the credentials

### Getting started

Clone this repo: `https://github.com/cloudytimemachine/frontend.git`

`cd frontend`

`npm install`

`npm run dev`

Open Chrome and visit `http://localhost:8008/webpack-dev-server/` . This takes care of building the bundle and runs a local development server. The frontend service is served as a static site in production.

Contact [Eric](@geojaz) for any questions about configuring dev environment.
