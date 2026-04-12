function Card({ recipe, index }) {
  const { title, image, readyInMinutes, servings, sourceUrl } = recipe;

  return (
    <article
      className={`bg-surface-container-lowest rounded-xl overflow-hidden group editorial-shadow border border-surface-container ${
        index % 3 === 1 ? 'transform md:-translate-y-8 border-t-4 border-primary' : ''
      }`}
      id={`recipe-card-${index}`}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={image}
          loading="lazy"
        />
        <button className="absolute top-4 right-4 w-10 h-10 bg-surface/90 backdrop-blur rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
      
      <div className="p-8">
        <div className="flex gap-4 mb-4">
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-on-surface/40">
            <span className="material-symbols-outlined text-sm">schedule</span> {readyInMinutes || 'N/A'} min
          </span>
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-on-surface/40">
            <span className="material-symbols-outlined text-sm">signal_cellular_alt</span> {servings || 'N/A'} servings
          </span>
        </div>
        
        <h3 className="text-2xl font-headline text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface/70 text-sm leading-relaxed font-light italic hover:text-primary transition-colors flex items-center gap-1"
          >
            View Full Recipe <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default Card;
