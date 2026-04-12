function TopNav({ currentView, onViewChange }) {
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => onViewChange('home')}>
        <span className="nav-text">
          Culinary Canvas
        </span>
      </div>
      <div className="nav-links">
        <button 
          className={`nav-item ${currentView === 'home' ? 'nav-item-active' : ''}`} 
          onClick={() => onViewChange('home')}
        >
          Recipes
        </button>
        <button className="nav-item">
          Categories
        </button>
        <a className="nav-item" href="/">
          About
        </a>
        <a className="nav-item" href="/">
          Contact
        </a>
      </div>
      <div className="nav-actions">
        <button 
          className="nav-button"
          onClick={() => onViewChange(currentView === 'liked' ? 'home' : 'liked')}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: currentView === 'liked' ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
        </button>
        <button className="nav-button">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </nav>
  );
}

export default TopNav;
