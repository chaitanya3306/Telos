import React from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#aperture"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('aperture');
          }}
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
        >
          TELOS <span className="hidden sm:inline text-stone-400 font-sans text-xs tracking-widest font-normal uppercase ml-2">Question Atlas</span>
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('aperture')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors pb-1 cursor-pointer ${
              activeSection === 'aperture' ? 'text-stone-950 border-b-2 border-stone-900 font-semibold' : ''
            }`}
          >
            Inquiry Aperture
          </button>
          <button
            onClick={() => onNavigate('atlas-view')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors pb-1 cursor-pointer ${
              activeSection === 'atlas-view' ? 'text-stone-950 border-b-2 border-stone-900 font-semibold' : ''
            }`}
          >
            8-Dimensional Atlas
          </button>
          <button
            onClick={() => onNavigate('graph-canvas')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors pb-1 cursor-pointer ${
              activeSection === 'graph-canvas' ? 'text-stone-950 border-b-2 border-stone-900 font-semibold' : ''
            }`}
          >
            Topological Graph
          </button>
          <button
            onClick={() => onNavigate('root-knots')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors pb-1 cursor-pointer ${
              activeSection === 'root-knots' ? 'text-stone-950 border-b-2 border-stone-900 font-semibold' : ''
            }`}
          >
            Root Knots
          </button>
          <button
            onClick={() => onNavigate('assumptions-lab')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors pb-1 cursor-pointer ${
              activeSection === 'assumptions-lab' ? 'text-stone-950 border-b-2 border-stone-900 font-semibold' : ''
            }`}
          >
            Assumption Lab
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
          >
            <span className="sm:hidden">Search</span>
            <span className="hidden sm:inline">Search Question Atlas</span>
          </button>
        </div>
      </div>
    </header>
  );
};
