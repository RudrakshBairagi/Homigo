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
    <section className="px-6 max-w-7xl mx-auto relative overflow-hidden" id="hero-section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10 order-2 md:order-1">
          {/* Badge removed as requested */}
          <h1 className="text-6xl md:text-8xl font-headline text-primary leading-[1] mb-8">
            Find Your Next <br />Favourite Recipe
          </h1>
          <p className="text-lg md:text-xl text-on-surface/80 max-w-md mb-10 leading-relaxed font-light">
            Explore thousands of delicious recipes from around the world.
            Search by ingredient, cuisine, or dish name and start cooking!
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-lg mb-8" onSubmit={handleSubmit} id="search-form">
            <input
              className="flex-1 bg-surface-container-lowest border-2 border-surface-container-highest rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/40 focus:border-primary text-on-surface font-light outline-none editorial-shadow transition-all"
              id="search-input"
              name="search-input"
              type="text"
              placeholder="Search for a recipe..."
              autoComplete="off"
            />
            <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#a1003f] transition-colors whitespace-nowrap editorial-shadow flex items-center justify-center gap-2" type="submit" id="search-button">
              <span className="material-symbols-outlined text-[18px]">search</span>
              Search
            </button>
          </form>

          <div className="flex flex-wrap gap-2 max-w-lg">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="px-4 py-2 bg-surface text-on-surface text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-secondary hover:text-on-secondary transition-colors border border-surface-container-highest"
                type="button"
                onClick={() => handleChipClick(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-tertiary-container organic-shape-1 -z-10 opacity-60"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container organic-shape-2 -z-10 opacity-40"></div>
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] editorial-shadow transform md:rotate-2 border-t-4 border-primary">
            <img alt="Hero splash image of food" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAggXT9l217dgV3qcSdNwEYsYTp3QNGs4-eV3vYZ2EciWgUyoxP1F9JgWXE6tKVtG10jvJnwMmV31eSX6zJUvlRVh48kOZqF_27o5zk0fMctoZ8EGQVAWYOeN69w_IOGWaPmhCdpttsvuclP9vBT67s-IeAPbSeyXKF8bIUxpm3eeahEiaUL1-7pc8Bp2HO2zhy_x85Sj9GlOLtPenPFule9S9uBnRMRGASQIZD7tXYfzGDdNhPLN8wTi706NiEKkSx9FyqgC8TjjKQ"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
