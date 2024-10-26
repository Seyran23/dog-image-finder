# Dog Image Finder App

This is a Dog Image Finder App built with React and TypeScript, using the Dog API to fetch images of various dog breeds. It demonstrates React fundamentals, state management with Redux, and component styling with Styled Components.



## Features
- React and TypeScript for a scalable and type-safe codebase.
- Redux for centralized state management.
- Axios for fetching data from the Dog API.
- Styled Components for component-specific styling.
- Unit Tests with Jest and React Testing Library for reliability.

## Tech Stack
- React & TypeScript
- Redux for State Management
- Axios for API requests
- Styled Components for styling
- Jest & React Testing Library for unit tests

## Installation and Setup

### 1.Clone the repository:

```bash
git clone https://github.com/Seyran23/dog-image-finder.git
cd dog-image-finder

```

### 2.Install dependencies:

```bash
npm install
```

### 3.Run the app locally:

```bash
npm start
```

This will start the development server. The app will be available at http://localhost:3000.

### 4.Build for production:

```bash
npm run build
```
This command creates an optimized build in the build directory.

### 5.Run Tests:

```bash
npm test
```

## Scripts
- npm start: Start the development server.
- npm run build: Build the app for production.
- npm test: Run unit tests. 
- npm run deploy: Deploy the app to GitHub Pages (ensure gh-pages is set up in package.json).


## Folder Structure
- src/components: Contains reusable components such as Header, DogForm, and Results.
- src/lib: API utility functions for fetching dog breeds and images.
- src/Styles: Contains styled components for consistent styling across the app.
- src/reducers: Redux reducers for state management.
- src/tests: Test files using Jest and React Testing Library.