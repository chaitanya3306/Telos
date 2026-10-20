import React, { useState } from 'react';
import { MAJOR_POSITIONS, MajorPosition } from '../data/philosophyData.ts';

export const MajorPositionsMatrix: React.FC = () => {
  const [selectedPosition, setSelectedPosition] = useState<MajorPosition>(
    MAJOR_POSITIONS[0]
  );
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');

  return (
    <section id="positions" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
              Chapter III · The Grand Worldviews
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium mt-2">
              The Four Major Positions
            </h2>
            <p className="mt-3 text-stone-600 text-base leading-relaxed">
              Human thought has crystallized around four distinct intellectual traditions answering whether meaning is created, discovered, nonexistent, or collectively nurtured.
            </p>
          </div>

          {/* Toggle between Detailed Cards and Comparative Matrix Table */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200 shrink-0">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Tradition Profiles
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                viewMode === 'matrix'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Side-by-Side Matrix
            </button>
          </div>
        </div>

        {viewMode === 'cards' ? (
          <div>
            {/* Position Selector Tabs */}
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {MAJOR_POSITIONS.map((pos) => {
                const isSelected = selectedPosition.id === pos.id;
                return (
                  <button
                    key={pos.id}
                    onClick={() => setSelectedPosition(pos)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-sm'
                        : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    <span className="text-xs font-mono tracking-widest block opacity-70 mb-1">
                      Tradition
                    </span>
                    <h3 className="font-serif text-xl font-semibold">{pos.name}</h3>
                    <p className="text-xs opacity-80 mt-1 line-clamp-1 italic font-serif">
                      "{pos.tagline}"
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Position In-Depth Showcase */}
            <div className="mt-8 bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-xs">
              <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-800">
                    Comprehensive Tradition Profile
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 mt-1">
                    {selectedPosition.name}
                  </h3>
                  <p className="font-serif italic text-lg text-stone-600 mt-1">
                    "{selectedPosition.tagline}"
                  </p>
                </div>
              </div>

              {/* Essence and Fine Art Illustration Grid */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                      Core Philosophical Essence
                    </h4>
                    <p className="text-stone-800 text-base sm:text-lg leading-relaxed font-serif">
                      {selectedPosition.essence}
                    </p>
                  </div>

                  {/* 5 Structural Pillars */}
                  <div className="space-y-4 pt-4 border-t border-stone-200">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block">
                        Ontological Status of Purpose:
                      </span>
                      <p className="text-sm text-stone-800 mt-0.5">
                        {selectedPosition.ontologicalStatusOfPurpose}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block">
                        Epistemology of Meaning:
                      </span>
                      <p className="text-sm text-stone-800 mt-0.5">
                        {selectedPosition.epistemologyOfMeaning}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block">
                        Conception of Consciousness:
                      </span>
                      <p className="text-sm text-stone-800 mt-0.5">
                        {selectedPosition.viewOnConsciousness}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block">
                        Ethical Imperative:
                      </span>
                      <p className="text-sm text-stone-800 mt-0.5">
                        {selectedPosition.ethicalImperative}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block">
                        Response to Mortality & Finitude:
                      </span>
                      <p className="text-sm text-stone-800 mt-0.5">
                        {selectedPosition.responseToMortality}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right side: Thinkers & Visual Art */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                    <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-3">
                      Seminal Thinkers & Literature
                    </span>
                    <div className="space-y-4">
                      {selectedPosition.keyThinkers.map((thinker, i) => (
                        <div key={i} className="pb-3 border-b border-stone-200 last:border-b-0 last:pb-0">
                          <div className="flex items-baseline justify-between">
                            <h5 className="font-serif font-bold text-stone-900 text-sm">
                              {thinker.name}
                            </h5>
                            <span className="text-xs font-mono text-stone-400">
                              {thinker.era}
                            </span>
                          </div>
                          <span className="text-xs text-stone-500 italic block">
                            {thinker.famousWork}
                          </span>
                          <blockquote className="mt-1 text-xs text-stone-700 font-serif italic border-l-2 border-stone-300 pl-2">
                            "{thinker.quote}"
                          </blockquote>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Artwork illustration for visual balance */}
                  <div className="bg-stone-100 p-3 rounded-xl border border-stone-300">
                    <div className="relative aspect-[4/3] rounded overflow-hidden bg-stone-200">
                      <img
                        src={
                          selectedPosition.id === 'existentialism' || selectedPosition.id === 'nihilism'
                            ? '/src/assets/images/existential_horizon_1792484858790.jpg'
                            : '/src/assets/images/socratic_atrium_1792484859048.jpg'
                        }
                        alt="Philosophical contemplation painting"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-xs text-stone-600 mt-2 font-serif italic text-center">
                      {selectedPosition.id === 'existentialism' || selectedPosition.id === 'nihilism'
                        ? 'Fig. 2 · The Solitary Horizon · Finitude and Radical Freedom'
                        : 'Fig. 3 · The Academy Atrium · Intersubjective Reflection and Sacred Order'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Strengths & Enduring Critiques */}
              <div className="mt-8 pt-8 border-t border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-semibold mb-2">
                    Primary Philosophical Strengths
                  </h5>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {selectedPosition.primaryStrengths.map((str, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-700 font-bold">✓</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-rose-900 font-semibold mb-2">
                    Enduring Philosophical Critiques
                  </h5>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {selectedPosition.enduringCritiques.map((crit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-700 font-bold">⚠</span>
                        <span>{crit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Side-by-Side Comparative Matrix Table */
          <div className="mt-8 overflow-x-auto bg-white border border-stone-200 rounded-2xl shadow-xs">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-xs font-mono uppercase tracking-wider text-stone-600">
                  <th className="p-4 font-semibold w-1/5">Philosophical Dimension</th>
                  <th className="p-4 font-semibold text-amber-900 w-1/5">Existentialism</th>
                  <th className="p-4 font-semibold text-blue-900 w-1/5">Theism</th>
                  <th className="p-4 font-semibold text-stone-900 w-1/5">Nihilism</th>
                  <th className="p-4 font-semibold text-emerald-900 w-1/5">Humanism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-xs text-stone-700">
                <tr>
                  <td className="p-4 font-mono font-medium text-stone-900 bg-stone-50/50">
                    Ontological Status of Purpose
                  </td>
                  <td className="p-4">Subjective, authored by the individual</td>
                  <td className="p-4">Objective, woven into creation by God</td>
                  <td className="p-4">Non-existent; teleology is an illusion</td>
                  <td className="p-4">Intersubjective; social & evolutionary</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-medium text-stone-900 bg-stone-50/50">
                    Epistemology of Meaning
                  </td>
                  <td className="p-4">Phenomenological action & authentic choice</td>
                  <td className="p-4">Divine revelation, faith & contemplation</td>
                  <td className="p-4">Critical deconstruction of moral myths</td>
                  <td className="p-4">Scientific inquiry, reason & empathy</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-medium text-stone-900 bg-stone-50/50">
                    View of Consciousness
                  </td>
                  <td className="p-4">Radical freedom; negation of brute matter</td>
                  <td className="p-4">Imago Dei; divine breath of awareness</td>
                  <td className="p-4">Accidental evolutionary neural byproduct</td>
                  <td className="p-4">Universe's rarest emergent marvel</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-medium text-stone-900 bg-stone-50/50">
                    Ethical Imperative
                  </td>
                  <td className="p-4">Authenticity; reject Bad Faith (Mauvaise Foi)</td>
                  <td className="p-4">Love God and neighbor; follow sacred law</td>
                  <td className="p-4">Active mastery (Amor Fati) or resignation</td>
                  <td className="p-4">Alleviate suffering; foster global flourishing</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-medium text-stone-900 bg-stone-50/50">
                    View on Mortality
                  </td>
                  <td className="p-4">Finitude gives urgency to each authentic choice</td>
                  <td className="p-4">Threshold into eternal communion</td>
                  <td className="p-4">Permanent extinguishment into nothingness</td>
                  <td className="p-4">Incentive to leave an enduring earthly legacy</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono font-medium text-stone-900 bg-stone-50/50">
                    Exemplar Thinkers
                  </td>
                  <td className="p-4 font-serif">Sartre, Beauvoir, Camus</td>
                  <td className="p-4 font-serif">Aquinas, Kierkegaard, Rumi</td>
                  <td className="p-4 font-serif">Nietzsche, Cioran, Brassier</td>
                  <td className="p-4 font-serif">Russell, Dewey, Sagan</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
