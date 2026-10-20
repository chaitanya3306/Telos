import React, { useState } from 'react';
import { ROOT_KNOTS, RootKnot, ATLAS_QUESTIONS, QuestionNode } from '../data/questionAtlasData.ts';
import { Binary, GitBranch, ArrowDownRight, Layers } from 'lucide-react';

interface RootReductionsViewProps {
  onSelectQuestion: (question: QuestionNode) => void;
  selectedRootId?: string;
}

export const RootReductionsView: React.FC<RootReductionsViewProps> = ({
  onSelectQuestion,
  selectedRootId
}) => {
  const [activeRoot, setActiveRoot] = useState<RootKnot>(() => {
    if (selectedRootId) {
      const found = ROOT_KNOTS.find(r => r.id === selectedRootId);
      if (found) return found;
    }
    return ROOT_KNOTS[0];
  });

  // Questions reducing to active root
  const connectedQuestions = ATLAS_QUESTIONS.filter(q =>
    q.rootQuestionCandidates.some(r => r.rootId === activeRoot.id)
  );

  return (
    <section id="root-knots" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            Phase 2 Core Hypothesis Validation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium mt-1">
            The Six Primal Root Knots
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Our central thesis: <em>Thousands of apparently disparate surface inquiries ultimately funnel into a small number of irreducible metaphysical antinomies.</em>
          </p>
        </div>

        {/* Root Knots Selector Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ROOT_KNOTS.map((root) => {
            const isSelected = activeRoot.id === root.id;
            return (
              <button
                key={root.id}
                onClick={() => setActiveRoot(root)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-1 ring-stone-900'
                    : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono opacity-70 mb-1.5">
                    <span>{root.domain}</span>
                    <span className="font-bold tabular-nums">~{root.connectedSurfaceInquiriesCount} Inquiries</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold leading-snug">
                    {root.title}
                  </h3>
                  <p className="font-serif italic text-xs opacity-85 mt-2 line-clamp-2">
                    "{root.question}"
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-200/20 text-xs font-mono flex items-center justify-between">
                  <span className="opacity-75">Reduction Knot</span>
                  <span className="font-semibold">{isSelected ? 'Active Node' : 'Select →'}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Root Knot Deconstruction Panel */}
        <div className="mt-10 bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
                Root Knot Focus · {activeRoot.domain}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                {activeRoot.title}
              </h3>
              <p className="font-serif italic text-lg sm:text-xl text-stone-600 mt-1">
                "{activeRoot.question}"
              </p>
            </div>
            <span className="text-xs font-mono bg-stone-100 text-stone-700 px-3 py-1.5 rounded border border-stone-300">
              Convergence Attractor
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                  Structural Description
                </h4>
                <p className="text-stone-800 text-base leading-relaxed font-serif">
                  {activeRoot.description}
                </p>
              </div>

              {/* Core Unresolved Antinomy */}
              <div className="p-5 bg-amber-50/60 rounded-xl border border-amber-200/80">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold block mb-1">
                  The Unresolved Conceptual Antinomy:
                </span>
                <p className="text-sm text-stone-800 leading-relaxed font-serif">
                  {activeRoot.unresolvedAntinomy}
                </p>
              </div>
            </div>

            {/* Connected Inquiries In Our Atlas */}
            <div className="lg:col-span-5 bg-stone-50 p-5 sm:p-6 rounded-xl border border-stone-200">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold block mb-3">
                Surface Questions That Reduce To This Knot:
              </span>

              {connectedQuestions.length > 0 ? (
                <div className="space-y-3">
                  {connectedQuestions.map((cq) => {
                    const rc = cq.rootQuestionCandidates.find(r => r.rootId === activeRoot.id);
                    return (
                      <div
                        key={cq.id}
                        onClick={() => onSelectQuestion(cq)}
                        className="p-3 bg-white rounded-lg border border-stone-200 hover:border-stone-400 transition-all cursor-pointer text-xs"
                      >
                        <div className="flex items-center justify-between text-stone-400 font-mono text-[10px]">
                          <span>{cq.category}</span>
                          <span className="text-amber-800 font-bold tabular-nums">
                            {rc?.explanatoryPower}% Explanatory Match
                          </span>
                        </div>
                        <h5 className="font-serif text-sm font-semibold text-stone-900 mt-1">
                          "{cq.canonicalText}"
                        </h5>
                        <p className="text-stone-500 font-mono text-[11px] mt-1 line-clamp-1">
                          Chain: {rc?.reductionChain.join(' → ')}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-xs text-stone-500 italic">
                  Additional surface inquiries are mapped to this knot in the broader corpus.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
