# Homigo

Hey! Welcome to Homigo, my front-end recipe explorer app built for my semester 2 project. 

The idea is pretty simple: you can search for dishes, find recipes by cuisine or ingredients, and save your favorites. 

## What I used to build this
- **React** (bootstrapped with Vite)
- **Vanilla CSS** (completely custom styling, no Tailwind or CSS frameworks)
- **Spoonacular API** to fetch the recipe data and images

## How to run it locally

1. Clone this repo: `git clone <repo>`
2. Go into the folder: `cd Capstone_sem-1`
3. Install the packages: `npm install`
4. Start the dev server: `npm run dev`

The app usually runs on `http://localhost:5173`. 

**Note:** You'll need to drop your own Spoonacular API key into `/src/services/api.js` before using the search bar, because I removed my personal key for security!

## Features so far
- Search bar to query thousands of real recipes
- A "Your Cookbook" profile page to track favorites
- LocalStorage integration to save your liked recipes across reloads without needing a backend
- Totally custom UI with responsive grids for mobile and desktop

---
*Created for semester 2 project.*
