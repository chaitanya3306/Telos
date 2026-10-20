import React, { useState } from 'react';
import {
  CLOSEST_QUESTIONS,
  RELATED_QUESTIONS,
  ClosestQuestion,
  RelatedQuestion
} from '../data/philosophyData.ts';

interface QuestionsExplorerProps {
  onSelectForWorkbench: (questionText: string) => void;
}

export const QuestionsExplorer: React.FC<QuestionsExplorerProps> = ({
  onSelectForWorkbench
}) => {
  const [selectedClosest, setSelectedClosest] = useState<ClosestQuestion>(CLOSEST_QUESTIONS[0]);
  const [selectedRelated, setSelectedRelated] = useState<RelatedQuestion>(RELATED_QUESTIONS[0]);
  const [activeTab, setActiveTab] = useState<'closest' | 'related'>('closest');

  return (
    <section id="inquiries" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            Chapter I · The Interlocking Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium mt-2">
            The Geometry of Existential Questions
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Every question humanity asks about meaning sits within a nested constellation. Closest questions express our immediate existential ache, while related inquiries dissect the cognitive machinery behind them.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-8 flex items-center gap-2 border-b border-stone-200">
          <button
            onClick={() => setActiveTab('closest')}
            className={`pb-3 text-sm font-medium transition-colors cursor-pointer border-b-2 px-1 ${
              activeTab === 'closest'
                ? 'border-stone-900 text-stone-900 font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Closest Questions Asked (3 Foundational)
          </button>
          <button
            onClick={() => setActiveTab('related')}
            className={`pb-3 text-sm font-medium transition-colors cursor-pointer border-b-2 px-1 ${
              activeTab === 'related'
                ? 'border-stone-900 text-stone-900 font-semibold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Related Structural Questions (Consciousness · Meaning · Purpose)
          </button>
        </div>

        {activeTab === 'closest' ? (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left list */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block mb-1">
                Select an Inquiry:
              </span>
              {CLOSEST_QUESTIONS.map((q) => {
                const isSelected = selectedClosest.id === q.id;
                return (
                  <button
                    key={q.id}
                    onClick={() => setSelectedClosest(q)}
                    className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-sm'
                        : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <span className="text-xs font-mono tracking-widest block opacity-70 mb-1">
                      {q.traditionalField}
                    </span>
                    <h3 className="font-serif text-lg font-semibold leading-snug">
                      "{q.question}"
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Right details */}
            <div className="lg:col-span-8 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-800">
                    {selectedClosest.traditionalField}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 mt-1">
                    "{selectedClosest.question}"
                  </h3>
                </div>
                <button
                  onClick={() => onSelectForWorkbench(selectedClosest.question)}
                  className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-stone-100 hover:bg-stone-200 text-stone-800 rounded border border-stone-300 transition-colors cursor-pointer"
                >
                  Deconstruct in Workbench ↗
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-1">
                    The Core Dilemma
                  </h4>
                  <p className="text-stone-800 text-base leading-relaxed">
                    {selectedClosest.coreDilemma}
                  </p>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                    Historical & Philosophical Lineage
                  </h4>
                  <p className="text-sm text-stone-700 leading-relaxed font-serif italic">
                    {selectedClosest.historicalContext}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-3">
                    How The 4 Major Positions Answer This Question:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-3.5 rounded-lg border border-amber-200 bg-amber-50/50">
                      <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider block">
                        Existentialism
                      </span>
                      <p className="text-xs text-stone-800 mt-1.5 leading-relaxed">
                        {selectedClosest.positionsBrief.existentialism}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-blue-200 bg-blue-50/50">
                      <span className="text-xs font-semibold text-blue-900 uppercase tracking-wider block">
                        Theism
                      </span>
                      <p className="text-xs text-stone-800 mt-1.5 leading-relaxed">
                        {selectedClosest.positionsBrief.theism}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-stone-300 bg-stone-100/60">
                      <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider block">
                        Nihilism
                      </span>
                      <p className="text-xs text-stone-800 mt-1.5 leading-relaxed">
                        {selectedClosest.positionsBrief.nihilism}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg border border-emerald-200 bg-emerald-50/50">
                      <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wider block">
                        Humanism
                      </span>
                      <p className="text-xs text-stone-800 mt-1.5 leading-relaxed">
                        {selectedClosest.positionsBrief.humanism}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left selector for Related Questions */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block mb-1">
                Select a Structural Dimension:
              </span>
              {RELATED_QUESTIONS.map((rq) => {
                const isSelected = selectedRelated.id === rq.id;
                return (
                  <button
                    key={rq.id}
                    onClick={() => setSelectedRelated(rq)}
                    className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-sm'
                        : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <span className="text-xs font-mono tracking-widest block opacity-70 mb-1">
                      {rq.subfield}
                    </span>
                    <h3 className="font-serif text-lg font-semibold leading-snug">
                      "{rq.question}"
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Right detail panel */}
            <div className="lg:col-span-8 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-800">
                    {selectedRelated.subfield}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 mt-1">
                    "{selectedRelated.question}"
                  </h3>
                </div>
                <button
                  onClick={() => onSelectForWorkbench(selectedRelated.question)}
                  className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-stone-100 hover:bg-stone-200 text-stone-800 rounded border border-stone-300 transition-colors cursor-pointer"
                >
                  Deconstruct in Workbench ↗
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-1">
                    Philosophical Definition
                  </h4>
                  <p className="text-stone-800 text-base leading-relaxed">
                    {selectedRelated.definition}
                  </p>
                </div>

                <div className="p-4 bg-amber-50/40 rounded-lg border border-amber-200/70">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-900 mb-1">
                    Why It Matters To The Search For Meaning
                  </h4>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    {selectedRelated.whyItMatters}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                    Key Unresolved Dilemmas
                  </h4>
                  <ul className="space-y-2 text-sm text-stone-700">
                    {selectedRelated.keyDilemmas.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-mono text-xs text-amber-800 mt-0.5">·</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-3">
                    Stance Across The 4 Traditions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                      <strong className="text-amber-900 block font-semibold mb-1">Existentialism</strong>
                      {selectedRelated.positionsAnalysis.existentialism}
                    </div>
                    <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                      <strong className="text-blue-900 block font-semibold mb-1">Theism</strong>
                      {selectedRelated.positionsAnalysis.theism}
                    </div>
                    <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                      <strong className="text-stone-900 block font-semibold mb-1">Nihilism</strong>
                      {selectedRelated.positionsAnalysis.nihilism}
                    </div>
                    <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                      <strong className="text-emerald-900 block font-semibold mb-1">Humanism</strong>
                      {selectedRelated.positionsAnalysis.humanism}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
