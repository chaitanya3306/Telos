import React, { useState } from 'react';
import { deconstructQuery, DialecticDeconstruction } from '../utils/philosophyLogic.ts';
import { CLOSEST_QUESTIONS, RELATED_QUESTIONS } from '../data/philosophyData.ts';

interface DialecticWorkbenchProps {
  initialQuery?: string;
}

export const DialecticWorkbench: React.FC<DialecticWorkbenchProps> = ({
  initialQuery = 'Why am I here?'
}) => {
  const [queryInput, setQueryInput] = useState(initialQuery);
  const [deconstruction, setDeconstruction] = useState<DialecticDeconstruction>(
    () => deconstructQuery(initialQuery)
  );

  const handleDeconstruct = (textToDeconstruct: string) => {
    setQueryInput(textToDeconstruct);
    setDeconstruction(deconstructQuery(textToDeconstruct));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!queryInput.trim()) return;
    setDeconstruction(deconstructQuery(queryInput));
  };

  return (
    <section id="workbench" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            Chapter V · Socratic Dialectic Workbench
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium mt-2">
            Dissecting Any Philosophical Query
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Submit any existential dilemma or inquiry to isolate its latent assumptions, ontological prerequisites, and responses from the four major traditions.
          </p>
        </div>

        {/* Input box */}
        <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              placeholder="e.g. Why am I here? or What is the purpose of suffering?"
              className="flex-1 px-4 py-3 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors cursor-pointer shrink-0"
            >
              Deconstruct Query
            </button>
          </form>

          {/* Quick suggestions */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-stone-400">Sample Prompts:</span>
            {[
              'Why am I here?',
              'What is the meaning of life?',
              'Why is there something rather than nothing?',
              'What is consciousness?',
              'Is suffering necessary for purpose?'
            ].map((sample) => (
              <button
                key={sample}
                type="button"
                onClick={() => handleDeconstruct(sample)}
                className="text-xs px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded transition-colors cursor-pointer"
              >
                {sample}
              </button>
            ))}
          </div>

          {/* Deconstruction Breakdown Results */}
          <div className="mt-8 pt-8 border-t border-stone-200 space-y-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-800">
                  Target Inquiry
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  "{deconstruction.originalQuery}"
                </h3>
              </div>
              <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2.5 py-1 rounded">
                Matched Archetype: {deconstruction.closestQuestionMatch.traditionalField}
              </span>
            </div>

            {/* Assumptions & Prerequisites side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold block mb-2">
                  Implicit Presuppositions in this Inquiry:
                </span>
                <ul className="space-y-2 text-xs text-stone-700">
                  {deconstruction.implicitAssumptions.map((ass, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-800 font-bold">·</span>
                      <span>{ass}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold block mb-2">
                  Ontological Prerequisites for Meaning:
                </span>
                <ul className="space-y-2 text-xs text-stone-700">
                  {deconstruction.ontologicalPrerequisites.map((prereq, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-800 font-bold">·</span>
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Position Stances on this specific query */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-3">
                Systematic Stance Across Grand Traditions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {deconstruction.positionsAnalysis.map((p) => (
                  <div key={p.camp} className="p-4 bg-white border border-stone-200 rounded-xl shadow-2xs">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 block mb-1">
                      {p.camp}
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed font-serif">
                      "{p.stance}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
