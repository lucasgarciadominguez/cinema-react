# Cinema React

This project is a movie application built with React, allowing users to browse and filter movies fetched from [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api).

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and filenames include hashes.\
Your app is ready for deployment!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Features

- **Movie Browsing**: View a list of popular movies from TMDB API.
- **Filtering**: Filter movies by genre, popularity, release date, and more.
- **User-Friendly UI**: Simple and visually appealing interface.

## Screenshots

<img src="https://github.com/lucasgarciadominguez/Assets/blob/main/ReactCinemaNight.PNG" width="800">
<img src="https://github.com/lucasgarciadominguez/Assets/blob/main/ReactCinemaDay.PNG" width="800">
<!--
## Demo
Check out a live demo of the app here: [Cinema React Demo](link-to-demo)
-->

## Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** (for package management)
- **TMDB API Key**: Obtain one by creating a [TMDB account](https://www.themoviedb.org/).

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/lucasgarciadominguez/cinema-react.git
    cd cinema-react
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up the TMDB API key:

    - Create a `.env` file in the root of the project.
    - Add your API key:

      ```plaintext
      REACT_APP_TMDB_API_KEY=your_api_key
      ```

4. Start the application:

    ```bash
    npm start
    # or
    yarn start
    ```

## Project Structure

```plaintext
cinema-react/
├── public/                # Public files
├── src/                   # Source code
│   ├── components/        # Reusable components
│   ├── pages/             # Application pages
│   ├── services/          # API setup and calls
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
└── README.md              # Project documentation

