import './Search.css';

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
    <section className="hero-section" id="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your Next <br />Favourite Recipe
          </h1>
          <p className="hero-subtitle">
            Explore thousands of delicious recipes from around the world.
            Search by ingredient, cuisine, or dish name and start cooking!
          </p>

          <form className="search-box" onSubmit={handleSubmit} id="search-form">
            <input
              className="search-input"
              id="search-input"
              name="search-input"
              type="text"
              placeholder="Search for a recipe..."
              autoComplete="off"
            />
            <button className="search-button" type="submit" id="search-button">
              <span className="material-symbols-outlined search-icon">search</span>
              Search
            </button>
          </form>

          <div className="suggestion-tags">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="tag-button"
                type="button"
                onClick={() => handleChipClick(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="hero-images">
          <div className="hero-blob container-one"></div>
          <div className="hero-blob container-two"></div>
          <div className="main-image-container">
            <img alt="Hero splash image of food" className="hero-splash-photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAggXT9l217dgV3qcSdNwEYsYTp3QNGs4-eV3vYZ2EciWgUyoxP1F9JgWXE6tKVtG10jvJnwMmV31eSX6zJUvlRVh48kOZqF_27o5zk0fMctoZ8EGQVAWYOeN69w_IOGWaPmhCdpttsvuclP9vBT67s-IeAPbSeyXKF8bIUxpm3eeahEiaUL1-7pc8Bp2HO2zhy_x85Sj9GlOLtPenPFule9S9uBnRMRGASQIZD7tXYfzGDdNhPLN8wTi706NiEKkSx9FyqgC8TjjKQ"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
