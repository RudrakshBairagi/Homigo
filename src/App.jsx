import { useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import Search from './components/Search';
import CardsList from './components/CardsList';
import Loading from './components/Loading';
import { searchRecipes, getRandomRecipes } from './services/api';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Load trending / random recipes on first visit
  useEffect(() => {
    async function loadInitial() {
      setLoading(true);
      try {
        const data = await getRandomRecipes(9);
        setRecipes(data);
      } catch {
        // Silently fail — user can still search
      } finally {
        setLoading(false);
      }
    }
    loadInitial();
  }, []);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const data = await searchRecipes(searchQuery, 9);
      setRecipes(data);
    } catch (err) {
      console.error('Search failed:', err);
      setError('Something went wrong while fetching recipes. Please try again.');
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopNav />
      <main>
        <Search onSearch={handleSearch} />

        {/* Loading animation removed */}

        {error && (
          <div className="error-state container">
            <p className="error-state__icon">⚠️</p>
            <p className="error-state__text">{error}</p>
          </div>
        )}

        {!loading && !error && recipes.length > 0 && (
          <CardsList recipes={recipes} query={hasSearched ? query : ''} />
        )}

        {!loading && !error && hasSearched && recipes.length === 0 && (
          <div className="empty-state">
            <p className="empty-state__icon">🍽️</p>
            <h3 className="empty-state__title">No recipes found</h3>
            <p className="empty-state__text">
              Try searching with different keywords or browse our suggestions above.
            </p>
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            {/* Footer empty as requested */}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
