# Nodejs File System 

This is a Node.js application designed to create files with timestamps and store them in a directory. It also allows retrieving a list of created files through API endpoints.

## Project Overview

This project provides an API for creating timestamped log files and reading the list of created `.txt` files from the server. It uses the **Node.js** runtime along with **Express.js** to handle HTTP requests and **fs (File System)** to handle file operations. The application can be deployed to platforms such as Render and Heroku.

## Features

- Create files with timestamps (`/create-file` endpoint).
- Retrieve the list of created `.txt` files (`/files` endpoint).
- Organized log files with timestamped names for easy management.
- Easily deployable to cloud platforms (Render, Heroku, etc.).

## Running the Application

- To start the server locally, use the following command:
  node server.js

- The server will start on http://localhost:3000. You can test the endpoints locally using tool like Postman.

## API Endpoints

**Base URL**: https://nodejs-filesystem-1-wbs9.onrender.com
**POST** /create-file: Creates a new .txt file with the current timestamp.
- URL: https://nodejs-filesystem-1-wbs9.onrender.com/create-file
- Response: File created with timestamp
**GET** /files: Retrieves the list of .txt files in the logs directory.
- URL: https://nodejs-filesystem-1-wbs9.onrender.com/files
- Response: A list of file names.

## Code Explanation

**server.js**: The main server file. It sets up the Express app, handles the routes, and interacts with the file system to create and list files.

**logEvents function**: Creates a new file with the current timestamp when called, and saves it to the logs directory.

**/create-file**: This POST route triggers the logEvents function to create a new log file.

**/files**: This GET route reads the logs folder and returns a list of .txt files stored there.

## Deployment

- Deployed on Render
