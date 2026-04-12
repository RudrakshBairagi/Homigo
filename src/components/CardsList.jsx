import Card from './Card';

function CardsList({ recipes, query }) {
  return (
    <section className="results" id="results-section">
      <div className="container">
        <div className="results__header">
          <h2 className="results__title">
            {query ? `Results for "${query}"` : 'Trending Recipes'}
          </h2>
          <span className="results__count">
            {recipes.length} recipe{recipes.length !== 1 ? 's' : ''} found
          </span>
        </div>

        <div className="recipe-grid">
          {recipes.map((recipe, i) => (
            <Card key={recipe.id} recipe={recipe} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsList;
