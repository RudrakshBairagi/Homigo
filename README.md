# 🍳 Homigo — Recipe Explorer

A premium, interactive front-end web application that lets you discover and explore delicious food recipes from around the world. Search by ingredient, cuisine, or dish name, and browse beautifully presented recipe cards.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Custom_Properties-1572B6?style=flat-square&logo=css3)

---

## ✨ Features

- **🔍 Recipe Search** — Search thousands of recipes by keyword, ingredient, or cuisine.
- **🎲 Trending Recipes** — Random recipes loaded on each visit for instant inspiration.
- **🏷️ Quick Suggestions** — Pre-defined chip buttons for popular searches (Pasta, Chicken, Vegan, etc.).
- **📋 Rich Recipe Cards** — Beautiful cards showing image, cook time, servings, and a direct link to the full recipe.
- **🌙 Dark Mode UI** — A warm, food-inspired dark theme with glassmorphism and micro-animations.
- **📱 Fully Responsive** — Works seamlessly on desktop, tablet, and mobile.

---

## 🛠️ Tech Stack

| Technology    | Purpose                                    |
|---------------|--------------------------------------------|
| **React 19**  | Component-based UI architecture            |
| **JavaScript (ES6+)** | Core logic and API data fetching  |
| **HTML5**     | Semantic structure                         |
| **CSS3**      | Custom properties, animations, responsive layout |
| **Vite**      | Lightning-fast build tooling               |

---

## 🌐 API Reference

This application is powered by the [Spoonacular API](https://spoonacular.com/food-api).

**Endpoints used:**
- `GET /recipes/complexSearch` — Search recipes by query
- `GET /recipes/random` — Fetch random trending recipes

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Capstone_sem-1

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
Capstone_sem-1/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSearch.jsx
│   │   ├── Loader.jsx
│   │   ├── RecipeCard.jsx
│   │   └── RecipeGrid.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📄 License

This project is part of a capstone submission.
