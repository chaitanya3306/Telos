import React, { useState } from 'react';
import { ATLAS_QUESTIONS, QuestionNode } from '../data/questionAtlasData.ts';
import { Search, Compass, AlertCircle, ArrowRight } from 'lucide-react';

interface QuestionApertureProps {
  currentQuestion: QuestionNode;
  onSelectQuestion: (question: QuestionNode) => void;
  onSearchQuery: (query: string) => void;
  onExploreGraph: () => void;
}

export const QuestionAperture: React.FC<QuestionApertureProps> = ({
  currentQuestion,
  onSelectQuestion,
  onSearchQuery,
  onExploreGraph
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    onSearchQuery(searchInput);
  };

  return (
    <section id="aperture" className="relative pt-8 pb-14 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Curatorial Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-300 text-xs text-stone-500 font-mono tracking-widest uppercase">
          <span>Telos Question Atlas · Phase 2</span>
          <span>Cartography of Human Inquiry</span>
          <span>Mapping, Not Answering</span>
        </div>

        {/* Hero Title & Mission Statement */}
        <div className="mt-8 max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold block mb-2">
            The Epistemic Cartography Engine
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-medium leading-[1.12] text-balance">
            Mapping Humanity’s Search for Answers
          </h1>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            Humanity repeatedly asks deep questions about consciousness, free will, meaning, and existence. These questions are not isolated vacuums; they contain <strong>hidden structures, recurring assumptions, and shared root problems</strong> that no individual human can fully see.
          </p>
        </div>

        {/* Universal Search / Ingestion Bar */}
        <div className="mt-8 max-w-3xl">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <div className="absolute left-4 text-stone-400 pointer-events-none">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Submit any deep inquiry (e.g. Why do humans exist? or What is consciousness?)..."
              className="w-full pl-12 pr-32 py-3.5 text-sm sm:text-base bg-white border border-stone-300 rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900 placeholder:text-stone-400"
            />
            <button
              type="submit"
              className="absolute right-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Map Query
            </button>
          </form>

          {/* Quick Canonical Question Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-stone-400 mr-1">Deep Queries:</span>
            {ATLAS_QUESTIONS.map((q) => {
              const isSelected = q.id === currentQuestion.id;
              return (
                <button
                  key={q.id}
                  onClick={() => onSelectQuestion(q)}
                  className={`px-3 py-1.5 text-xs font-serif rounded-md border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-stone-900 text-white border-stone-900 font-semibold shadow-2xs'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  }`}
                >
                  "{q.canonicalText}"
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Question Focus Display Card */}
        <div className="mt-10 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-amber-800">
                  Target Coordinate: {currentQuestion.category}
                </span>
                <span className="text-stone-300">·</span>
                <span className="text-xs font-mono text-stone-500 uppercase">
                  Operator: [{currentQuestion.interrogativeOperator.toUpperCase()}]
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
                "{currentQuestion.canonicalText}"
              </h2>
              <p className="mt-2 text-sm text-stone-600 max-w-2xl leading-relaxed">
                {currentQuestion.summaryDescription}
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-2">
              <button
                onClick={onExploreGraph}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs uppercase tracking-wider font-mono font-semibold rounded-lg border border-stone-300 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4 text-amber-800" />
                View Topological Graph
              </button>
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                <span>Teleological Depth:</span>
                <span className="font-bold tabular-nums text-stone-900">
                  {(currentQuestion.teleologicalDepth * 100).toFixed(0)}%
                </span>
              </div>
            </div>
          </div>

          {/* Category Mistake Diagnostics (if present) */}
          {currentQuestion.isCategoryMistakeCandidate && currentQuestion.categoryMistakeExplanation && (
            <div className="mt-6 p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-amber-900 block">
                  Category Mistake Candidate
                </span>
                <p className="text-xs text-stone-800 mt-0.5 leading-relaxed font-serif">
                  {currentQuestion.categoryMistakeExplanation}
                </p>
              </div>
            </div>
          )}

          {/* Quick Metrics Strip */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-stone-600 pt-4 border-t border-stone-100">
            <div>
              <span className="text-stone-400 block">Shared Assumptions:</span>
              <span className="font-bold text-stone-900 text-sm">
                {currentQuestion.sharedAssumptions.length} Unstated Axioms
              </span>
            </div>
            <div>
              <span className="text-stone-400 block">Neighboring Queries:</span>
              <span className="font-bold text-stone-900 text-sm">
                {currentQuestion.neighboringQuestions.length} Topological Shifts
              </span>
            </div>
            <div>
              <span className="text-stone-400 block">Historical Eras:</span>
              <span className="font-bold text-stone-900 text-sm">
                {currentQuestion.historicalVariations.length} Formulations
              </span>
            </div>
            <div>
              <span className="text-stone-400 block">Root Candidates:</span>
              <span className="font-bold text-stone-900 text-sm">
                {currentQuestion.rootQuestionCandidates.length} Primal Knots
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
