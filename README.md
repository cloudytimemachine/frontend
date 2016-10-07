# Cloudy Time Machine Frontend Service

This is the frontend service for the Cloudy Time Machine (CTM) project. The CTM is a modern implementation of the [Wayback Machine, the Internet Archive](https://archive.org/). This project was developed as a proof of concept and demonstration of a relatively simple real world app in a cloud native architechture.

The CTM Frontend Service is the web interface for the CTM project. It provides a graphical interface to request snapshots (website archivals) and browse previous snapshots. It is intended to be run in conjunction with the rest of the CTM services.

## Development Enviroment Setup





## HTTP API

### GET /version
Returns the current version string (from package.json)

### GET /healthz
Returns 200 with no content if healthy
Returns 500 with error message if not healthy

### GET /?url=https://github.com/rosskukulinski

Requests a new screenshot of the specified page.  The png image
is uploaded to Google Storage Engine and the public URL is returned
along with the timestamp.
