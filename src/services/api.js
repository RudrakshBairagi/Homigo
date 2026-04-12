const API_KEY = '37aaa039bba44039ba25b09471aae6c8';
const BASE_URL = 'https://api.spoonacular.com/recipes';

/**
 * Search for recipes by query string.
 * Returns an array of recipe objects from the Spoonacular API.
 */
export async function searchRecipes(query, number = 9) {
  const url = `${BASE_URL}/complexSearch?query=${encodeURIComponent(query)}&addRecipeInformation=true&number=${number}&apiKey=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();
  return data.results || [];
}

/**
 * Fetch random recipes for the landing page.
 */
export async function getRandomRecipes(number = 9) {
  const url = `${BASE_URL}/random?number=${number}&apiKey=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();
  return data.recipes || [];
}
