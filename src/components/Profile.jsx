import './Profile.css';

function Profile({ likedRecipesCount }) {
  return (
    <section className="profile-dashboard container mx-auto">
      {/* Hero Banner */}
      <div className="profile-hero">
        <div className="profile-hero__bg-blob blob-left"></div>
        <div className="profile-hero__bg-blob blob-right"></div>
        
        <div className="profile-glassy-card">
          <div className="profile-avatar-container">
            <img 
              src="https://ui-avatars.com/api/?name=Rudraksh+Bairagi&background=be123c&color=fff&size=200" 
              alt="User Avatar" 
              className="profile-avatar-image" 
            />
          </div>
          <h2 className="profile-name">Rudraksh Bairagi</h2>
          <p className="profile-bio">Culinary Explorer & Pasta Enthusiast</p>
          <div className="profile-date">
            <span className="material-symbols-outlined text-sm">calendar_month</span> 
            Joined April 2026
          </div>
        </div>
      </div>

      {/* Culinary Stats Grid */}
      <div className="profile-stats-grid">
        <div className="stat-card">
          <div className="stat-icon">favorite</div>
          <div className="stat-number">{likedRecipesCount}</div>
          <div className="stat-label">Saved Recipes</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ color: 'var(--color-text-orange)' }}>restaurant</div>
          <div className="stat-number">42</div>
          <div className="stat-label">Recipes Cooked</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ color: '#059669' }}>local_fire_department</div>
          <div className="stat-number">12<span>d</span></div>
          <div className="stat-label">Cooking Streak</div>
        </div>
      </div>

      {/* Settings / Actions */}
      <div className="profile-actions-section">
        <h3 className="section-heading">Account Settings</h3>
        <div className="action-list">
          <button className="action-button">
            <span className="material-symbols-outlined action-icon">edit</span>
            <span className="action-text">Edit Profile</span>
            <span className="material-symbols-outlined action-chevron">chevron_right</span>
          </button>
          <button className="action-button">
            <span className="material-symbols-outlined action-icon">notifications</span>
            <span className="action-text">Notifications</span>
            <span className="material-symbols-outlined action-chevron">chevron_right</span>
          </button>
          <button className="action-button">
            <span className="material-symbols-outlined action-icon">language</span>
            <span className="action-text">Language preferences</span>
            <span className="material-symbols-outlined action-chevron">chevron_right</span>
          </button>
          <button className="action-button logout-button">
            <span className="material-symbols-outlined action-icon">logout</span>
            <span className="action-text">Sign Out</span>
          </button>
        </div>
      </div>

    </section>
  );
}

export default Profile;
