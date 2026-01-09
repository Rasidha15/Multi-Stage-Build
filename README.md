# Containerized Web Scraping Application using Docker

## Project Description

* This project demonstrates a containerized web scraping application using Docker
* Website data is scraped using Node.js and Puppeteer
* Scraped data is served through a Python Flask API
* Docker multi-stage builds are used for efficiency and smaller image size
* The application runs fully inside Docker containers

---

## Features

* Automated web scraping using a headless browser
* Lightweight Docker images using multi-stage builds
* REST API to display scraped data
* Dynamic website URL support using environment variables
* Easy deployment using Docker

---

## Technologies Used

* **Docker & Docker Desktop**
* **Node.js**
* **Puppeteer**
* **Python**
* **Flask**
* **Chromium**
* **Visual Studio Code**

---

## Project Structure

* `Dockerfile` – Defines multi-stage Docker build
* `scrape.js` – Node.js script for web scraping
* `server.py` – Flask server to serve scraped data
* `package.json` – Node.js dependencies
* `requirements.txt` – Python dependencies
* `scraped_data.json` – Output file generated after scraping

---

## How the Application Works

* Stage 1:

  * Uses Node.js and Puppeteer
  * Launches headless Chromium
  * Scrapes webpage title and first heading
  * Stores data in JSON format
* Stage 2:

  * Uses Python Flask
  * Reads the JSON file
  * Serves data through a REST API

---

## Prerequisites

* Docker installed on the system
* Internet connection
* Basic knowledge of Docker and web applications

---

## Build the Docker Image

```bash
docker build -t web-scraper-app .
```

---

## Run the Docker Container

```bash
docker run -e SCRAPE_URL=https://example.com -p 5000:5000 web-scraper-app
```

---

## Access the Application

* Open a web browser
* Navigate to:

  ```
  http://localhost:5000
  ```
* View scraped website data in JSON format

---

## Sample Output

* Webpage Title
* First Heading (`<h1>`)
* Displayed as JSON response

---

## Challenges Faced

* Docker build failures due to DNS issues
* Puppeteer errors caused by missing Chromium
* Port accessibility issues

---

## Solutions Implemented

* Installed required Chromium dependencies
* Configured Docker DNS settings
* Rebuilt Docker images

---

## Conclusion

* The project successfully demonstrates Docker-based application deployment
* Shows real-world use of web scraping and REST APIs
* Highlights the advantages of Docker multi-stage builds

---

## Author

* **Rasidha Begum**
* B.Tech Information Technology

