import Card from './Card';

function CardsList({ recipes, query, likedRecipes = [], onToggleLike }) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="results-section">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-headline text-on-surface">
            {query === 'Favorites' ? 'Your Cookbook' : (query ? `Results for "${query}"` : 'Trending Now')}
          </h2>
          <p className="text-on-surface/60 mt-2 font-light">
            {recipes.length} recipe{recipes.length !== 1 ? 's' : ''} {query === 'Favorites' ? 'saved' : 'found'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
