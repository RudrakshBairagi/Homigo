function TopNav({ currentView, onViewChange }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 max-w-7xl mx-auto rounded-full mt-6 bg-[#fcf6e3]/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-[0_10_40px_rgba(49,47,35,0.06)]">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onViewChange('home')}>
        <span className="text-2xl font-bold tracking-tighter text-[#b70049] dark:text-[#ff7290] font-headline uppercase select-none">
          Culinary Canvas
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-['Be_Vietnam_Pro'] font-medium text-xs uppercase tracking-[0.15em]">
        <button 
          className={`font-bold pb-1 uppercase tracking-[0.15em] transition-colors hover:scale-105 duration-300 ${currentView === 'home' ? 'text-[#b70049] border-b-2 border-[#b70049]' : 'text-[#312f23] dark:text-[#f7f1dc] hover:text-[#b70049] border-b-2 border-transparent'}`} 
          onClick={() => onViewChange('home')}
        >
          Recipes
        </button>
        <button className="text-[#312f23] dark:text-[#f7f1dc] hover:text-[#b70049] transition-colors hover:scale-105 transition-transform duration-300 uppercase tracking-[0.15em]">
          Categories
        </button>
        <a className="text-[#312f23] dark:text-[#f7f1dc] hover:text-[#b70049] transition-colors hover:scale-105 transition-transform duration-300" href="/">
          About
        </a>
        <a className="text-[#312f23] dark:text-[#f7f1dc] hover:text-[#b70049] transition-colors hover:scale-105 transition-transform duration-300" href="/">
          Contact
        </a>
      </div>
      <div className="flex items-center gap-4">
        <button 
          className="p-2 hover:scale-105 transition-transform text-[#b70049]"
          onClick={() => onViewChange(currentView === 'liked' ? 'home' : 'liked')}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: currentView === 'liked' ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
        </button>
        <button className="p-2 hover:scale-105 transition-transform text-[#b70049]">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </nav>
  );
}

export default TopNav;
