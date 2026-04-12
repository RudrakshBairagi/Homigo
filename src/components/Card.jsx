import './Card.css';

function Card({ recipe, index, isLiked, onToggleLike }) {
  const { title, image, readyInMinutes, servings, sourceUrl } = recipe;

  return (
    <article
      className="food-card"
      id={`recipe-card-${index}`}
    >
      <div className="card-image-box">
        <img
          alt={title}
          className="card-picture"
          src={image}
          loading="lazy"
        />
        <button 
          className="like-button"
          onClick={() => onToggleLike && onToggleLike(recipe)}
          type="button"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
        </button>
      </div>
      
      <div className="card-details">
        <div className="card-stats">
          <span className="stat-item">
            <span className="material-symbols-outlined stat-icon">schedule</span> {readyInMinutes || 'N/A'} min
          </span>
          <span className="stat-item">
            <span className="material-symbols-outlined stat-icon">signal_cellular_alt</span> {servings || 'N/A'} servings
          </span>
        </div>
        
        <h3 className="food-title">
          {title}
        </h3>
        
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="recipe-link"
          >
            View Full Recipe <span className="material-symbols-outlined link-icon">open_in_new</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default Card;
