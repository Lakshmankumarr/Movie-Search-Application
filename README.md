# Movie Search Application

A responsive web application developed using HTML, CSS, and JavaScript that allows users to search for movies and retrieve information from the OMDb API. The application dynamically displays movie results, including posters, titles, release years, and movie types.

## Overview

The Movie Search Application enables users to search for movies by title and instantly view matching results. The application integrates with the OMDb API, processes JSON responses, and dynamically generates movie cards to display the retrieved information.

## Features

- Search movies by title
- Retrieve data from the OMDb API
- Display movie posters
- Display movie titles
- Display release years
- Display movie types
- Dynamic card generation
- Responsive user interface
- Error handling for invalid searches

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)

### APIs
- OMDb API

### Development Tools
- VS Code
- Live Server
- Git
- GitHub
- GitHub Pages

## Project Structure

```text
movie-search-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Application Workflow

```text
User Search Query
        ↓
Fetch Request
        ↓
OMDb API
        ↓
JSON Response
        ↓
JavaScript Processing
        ↓
Dynamic Movie Cards
        ↓
UI Rendering
```

## API Endpoint

```text
https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=movie_name
```

Example:

```text
https://www.omdbapi.com/?apikey=12345678&s=interstellar
```

## Sample API Response

```json
{
  "Title": "Interstellar",
  "Year": "2014",
  "Type": "movie"
}
```

## Core Functionalities

### Search Movies

Users can search for movies by entering a movie title.

### Fetch Data

The application sends an HTTP request to the OMDb API.

### Display Results

Movie information is displayed dynamically using generated cards.

### Error Handling

Appropriate messages are displayed when movies are not found or API requests fail.

## Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/movie-search-app.git
```

### Navigate to the Project Directory

```bash
cd movie-search-app
```

### Run the Application

Open:

```text
index.html
```

in a web browser

or

Use VS Code Live Server.

## Learning Outcomes

This project demonstrates:

- REST API Consumption
- Fetch API
- Async/Await
- JSON Parsing
- Dynamic DOM Manipulation
- Dynamic Card Rendering
- Search Functionality
- Error Handling
- Event Handling

## Future Enhancements

- Search on Enter Key
- Loading Spinner
- Movie Details Page
- Favorites System
- Local Storage Integration
- Pagination
- Movie Categories
- Dark Mode
- Watchlist Feature

## Portfolio Description

Developed a Movie Search Application using JavaScript and the OMDb API, implementing dynamic search functionality, API integration, asynchronous data retrieval, and responsive user interface rendering through dynamically generated movie cards.

## Interview Topics Covered

- Fetch API
- Async/Await
- REST APIs
- JSON Data Handling
- Dynamic Rendering
- Event Handling
- Search Functionality
- Error Handling

## Live Demo

Add your GitHub Pages deployment URL here:

```text
https://YOUR_USERNAME.github.io/movie-search-app/
```

## Author

Lakshman

## License

This project is developed for educational, portfolio, and learning purposes.
