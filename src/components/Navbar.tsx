import React from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCompass: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenCompass
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#overview"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('overview');
          }}
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-stone-700 transition-colors"
        >
          TELOS <span className="hidden sm:inline text-stone-400 font-sans text-xs tracking-widest font-normal uppercase ml-2">Atlas of Meaning</span>
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigate('inquiries')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors pb-1 cursor-pointer ${
              activeSection === 'inquiries' ? 'text-stone-950 border-b-2 border-stone-900 font-semibold' : ''
            }`}
          >
            Core Questions
          </button>
          <button
            onClick={() => onNavigate('assumptions')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors pb-1 cursor-pointer ${
              activeSection === 'assumptions' ? 'text-stone-950 border-b-2 border-stone-900 font-semibold' : ''
            }`}
          >
            Hidden Assumptions
          </button>
          <button
            onClick={() => onNavigate('positions')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors pb-1 cursor-pointer ${
              activeSection === 'positions' ? 'text-stone-950 border-b-2 border-stone-900 font-semibold' : ''
            }`}
          >
            Major Positions
          </button>
          <button
            onClick={() => onNavigate('experiments')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors pb-1 cursor-pointer ${
              activeSection === 'experiments' ? 'text-stone-950 border-b-2 border-stone-900 font-semibold' : ''
            }`}
          >
            Thought Experiments
          </button>
          <button
            onClick={() => onNavigate('workbench')}
            className={`whitespace-nowrap shrink-0 hover:text-stone-900 transition-colors pb-1 cursor-pointer ${
              activeSection === 'workbench' ? 'text-stone-950 border-b-2 border-stone-900 font-semibold' : ''
            }`}
          >
            Dialectic Workbench
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCompass}
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
          >
            <span className="sm:hidden">Reflect</span>
            <span className="hidden sm:inline">Test Your Intuitions</span>
          </button>
        </div>
      </div>
    </header>
  );
};
