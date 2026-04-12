import './App.css';
import { useState, useEffect } from 'react';
import TopNav from './components/TopNav';
import Search from './components/Search';
import CardsList from './components/CardsList';
import Loading from './components/Loading';
import { searchRecipes, getRandomRecipes } from './services/api';

import Profile from './components/Profile';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const [currentView, setCurrentView] = useState('home');
  const [likedRecipes, setLikedRecipes] = useState(() => {
    const saved = localStorage.getItem('homigo_liked');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('homigo_liked', JSON.stringify(likedRecipes));
  }, [likedRecipes]);

  const handleToggleLike = (recipe) => {
    setLikedRecipes(prev => {
      const isAlreadyLiked = prev.some(r => r.id === recipe.id);
      if (isAlreadyLiked) {
        return prev.filter(r => r.id !== recipe.id);
      }
      return [...prev, recipe];
    });
  };

  useEffect(() => {
    async function loadInitial() {
      setLoading(true);
      try {
        const data = await getRandomRecipes(9);
        setRecipes(data);
      } catch (err) {
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
      <TopNav currentView={currentView} onViewChange={setCurrentView} />
      <main className="main-layout">
        {currentView === 'home' && <Search onSearch={handleSearch} />}



        {currentView === 'home' && error && (
          <div className="error-box">
            <p className="error-icon">⚠️</p>
            <p className="error-message">{error}</p>
          </div>
        )}

        {currentView === 'home' && !loading && !error && recipes.length > 0 && (
          <CardsList 
            recipes={recipes} 
            query={hasSearched ? query : ''} 
            likedRecipes={likedRecipes}
            onToggleLike={handleToggleLike}
          />
        )}

        {currentView === 'home' && !loading && !error && hasSearched && recipes.length === 0 && (
          <div className="empty-box">
            <p className="empty-icon">🍽️</p>
            <h3 className="empty-title">No recipes found</h3>
            <p className="empty-message">
              Try searching with different keywords or browse our suggestions above.
            </p>
          </div>
        )}

        {currentView === 'liked' && (
          <CardsList 
            recipes={likedRecipes} 
            query="Favorites" 
            likedRecipes={likedRecipes}
            onToggleLike={handleToggleLike}
          />
        )}

        {currentView === 'liked' && likedRecipes.length === 0 && (
          <div className="empty-box fav-empty-box">
            <p className="empty-icon">🤍</p>
            <h3 className="empty-title">No favorites yet</h3>
            <p className="empty-message">
              Hit the heart icon on any recipe to save it for later!
            </p>
          </div>
        )}

        {currentView === 'profile' && (
          <Profile likedRecipesCount={likedRecipes.length} />
        )}
      </main>

      <footer className="page-footer">
        <div className="container footer-content">
          <p>

          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
