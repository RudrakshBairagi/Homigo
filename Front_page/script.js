const apiKey = '37aaa039bba44039ba25b09471aae6c8';

async function searchRecipes(query) {
    const container = document.getElementById('recipe-container');
    container.innerHTML = '<p>Loading...</p>';

    
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&addRecipeInformation=true&number=5&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        
        const data = await response.json();
        container.innerHTML = '';

        if (data.results.length === 0) {
            container.innerHTML = '<p>No recipes found for that search.</p>';
            return;
        }

        data.results.forEach(recipe => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p><strong>Ready in:</strong> ${recipe.readyInMinutes || 'N/A'} mins</p>
                <p><strong>Servings:</strong> ${recipe.servings || 'N/A'}</p>
                <a href="${recipe.sourceUrl}" target="_blank">Read Full Recipe</a>
            `;
            container.appendChild(cardElement);
        });

    } catch (error) {
        console.error("Failed to fetch:", error);
        container.innerHTML = `<p style="color: red;">Error loading recipes.</p>`;
    }
}

document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    if (query.trim() !== '') {
        searchRecipes(query);
    }
});

document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const query = this.value;
        if (query.trim() !== '') {
            searchRecipes(query);
        }
    }
});