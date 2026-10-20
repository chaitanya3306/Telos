import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-[#1C1917] text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800">
          <div className="md:col-span-2 space-y-3">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              TELOS · QUESTION ATLAS
            </span>
            <p className="text-xs text-stone-400 font-serif leading-relaxed max-w-md">
              A foundational observatory mapping humanity's search for answers. Telos does not answer questions; it exposes the unstated assumptions, linguistic constraints, and recurring root knots that structure human inquiry.
            </p>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-3">
              Root Convergence Knots
            </span>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>The Order Knot (Thermodynamic Dissipation)</li>
              <li>The Reflexivity Knot (Observer Modeling)</li>
              <li>The Contingency Knot (Brute Facticity)</li>
              <li>The Agency Knot (Causal Closure vs Will)</li>
              <li>The Normativity Knot (Humean Is-Ought)</li>
              <li>The Finitude Knot (Temporal Urgency)</li>
            </ul>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-3">
              Atlas Evolution
            </span>
            <ul className="space-y-1.5 text-xs text-stone-400 font-mono text-[11px]">
              <li>Phase 1: Philosophy Explorer (Retired)</li>
              <li className="text-amber-400 font-bold">Phase 2: Question Atlas (Active)</li>
              <li>Phase 3: Curiosity Observatory</li>
              <li>Phase 4: Inquiry Knowledge Graph</li>
              <li>Phase 5: Pattern Discovery Engine</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            <span>© 2026 Telos Epistemic Cartography</span>
            <span className="mx-2">·</span>
            <span>Epistemic Neutrality Protocol Active</span>
          </div>
          <div>
            <span>Turning the camera back on human consciousness</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
