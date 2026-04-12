const SUGGESTIONS = ['Pasta', 'Chicken', 'Salad', 'Dessert', 'Vegan', 'Soup', 'Indian'];

function Search({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements['search-input'].value.trim();
    if (query) {
      onSearch(query);
    }
  };

  const handleChipClick = (suggestion) => {
    onSearch(suggestion);
  };

  return (
    <section className="hero" id="hero-section">
      <div className="container hero__content">
        <span className="hero__badge">
          ✨ Powered by Spoonacular
        </span>

        <h1 className="hero__title">
          Find Your Next <br />
          <span className="hero__title-highlight">Favourite Recipe</span>
        </h1>

        <p className="hero__subtitle">
          Explore thousands of delicious recipes from around the world.
          Search by ingredient, cuisine, or dish name and start cooking!
        </p>

        <form className="search" onSubmit={handleSubmit} id="search-form">
          <div className="search__box">
            <span className="search__icon">🔍</span>
            <input
              className="search__input"
              id="search-input"
              name="search-input"
              type="text"
              placeholder="Search for a recipe..."
              autoComplete="off"
            />
            <button className="search__button" type="submit" id="search-button">
              Search
            </button>
          </div>
        </form>

        <div className="search__suggestions">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              className="search__suggestion-chip"
              type="button"
              onClick={() => handleChipClick(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Search;
