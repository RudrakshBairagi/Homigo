import Card from './Card';

function CardsList({ recipes, query, likedRecipes = [], onToggleLike }) {
  return (
    <section className="results-section" id="results-section">
      <div className="results-header mb-12">
        <div>
          <h2 className="results-title">
            {query === 'Favorites' ? 'Your Cookbook' : (query ? `Results for "${query}"` : 'Trending Now')}
          </h2>
          <p className="results-count mt-2 font-light">
            {recipes.length} recipe{recipes.length !== 1 ? 's' : ''} {query === 'Favorites' ? 'saved' : 'found'}
          </p>
        </div>
      </div>

      <div className="grid-layout">
        {recipes.map((recipe, i) => {
          const isLiked = likedRecipes.some(r => r.id === recipe.id);
          return (
            <Card 
              key={recipe.id} 
              recipe={recipe} 
              index={i} 
              isLiked={isLiked} 
              onToggleLike={onToggleLike} 
            />
          );
        })}
      </div>
    </section>
  );
}

export default CardsList;
