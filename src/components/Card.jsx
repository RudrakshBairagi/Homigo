function Card({ recipe, index }) {
  const { title, image, readyInMinutes, servings, sourceUrl } = recipe;

  return (
    <article
      className="recipe-card"
      style={{ animationDelay: `${index * 0.08}s` }}
      id={`recipe-card-${index}`}
    >
      <div className="recipe-card__image-wrapper">
        <img
          className="recipe-card__image"
          src={image}
          alt={title}
          loading="lazy"
        />
        <div className="recipe-card__image-overlay" />
        <div className="recipe-card__badges">
          {readyInMinutes && (
            <span className="recipe-card__badge">
              ⏱️ {readyInMinutes} min
            </span>
          )}
        </div>
      </div>

      <div className="recipe-card__body">
        <h3 className="recipe-card__title">{title}</h3>

        <div className="recipe-card__meta">
          <span className="recipe-card__meta-item">
            ⏱️ {readyInMinutes || 'N/A'} min
          </span>
          <span className="recipe-card__meta-item">
            👥 {servings || 'N/A'} servings
          </span>
        </div>

        {sourceUrl && (
          <a
            className="recipe-card__link"
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Recipe ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default Card;
