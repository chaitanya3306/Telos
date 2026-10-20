import React, { useState } from 'react';
import { HIDDEN_ASSUMPTIONS, HiddenAssumption } from '../data/philosophyData.ts';
import { testAssumptionPremise } from '../utils/philosophyLogic.ts';

export const HiddenAssumptionsLab: React.FC = () => {
  const [selectedAssumption, setSelectedAssumption] = useState<HiddenAssumption>(
    HIDDEN_ASSUMPTIONS[0]
  );
  const [stance, setStance] = useState<'accepted' | 'rejected'>('accepted');

  // Custom premise stress test state
  const [customPremise, setCustomPremise] = useState('');
  const [customCategory, setCustomCategory] = useState<'Teleological' | 'Epistemological' | 'Ontological'>('Teleological');
  const [analyzedCustom, setAnalyzedCustom] = useState<string | null>(null);

  const evaluation = testAssumptionPremise(selectedAssumption.id, stance);

  const handleTestCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPremise.trim()) return;

    let analysis = '';
    const text = customPremise.toLowerCase();
    if (text.includes('free will') || text.includes('choice')) {
      analysis = 'Implicit Premise: Assumes human consciousness can act as an uncaused cause. If accepted, moral accountability and existential authenticity are valid. If rejected, human behavior is determined by neurobiology and physics.';
    } else if (text.includes('death') || text.includes('afterlife') || text.includes('immortality')) {
      analysis = 'Implicit Premise: Assumes meaning requires infinite continuation. If accepted, finitude devalues earthly actions unless redeemed eternally. If rejected, scarcity of time is the precise condition that makes every decision urgent.';
    } else if (text.includes('suffering') || text.includes('evil') || text.includes('pain')) {
      analysis = 'Implicit Premise: Assumes suffering must possess a teleological justification (theodicy). If accepted, tragedy is a refining crucible. If rejected, suffering is raw biological friction demanding active compassion and mitigation.';
    } else {
      analysis = `Implicit Premise: Presupposes that "${customPremise.trim()}" holds normative weight. If accepted, life must be structured around this boundary. If rejected, agents must forge alternative criteria of valuation without cosmic backing.`;
    }

    setAnalyzedCustom(analysis);
  };

  return (
    <section id="assumptions" className="py-16 border-b border-stone-200 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            Chapter II · The Hidden Assumptions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium mt-2">
            Deconstructing The Silent Premises
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Every question conceals unexamined baggage. Before we can answer <em>"Why am I here?"</em>, we must interrogate the two foundational assumptions that make the question conceivable in the first place.
          </p>
        </div>

        {/* The 2 Core Assumptions Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {HIDDEN_ASSUMPTIONS.map((ha, idx) => {
            const isSelected = selectedAssumption.id === ha.id;
            return (
              <div
                key={ha.id}
                onClick={() => setSelectedAssumption(ha)}
                className={`p-6 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-stone-900 shadow-md ring-1 ring-stone-900'
                    : 'bg-white/80 border-stone-200 hover:border-stone-400'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-stone-500 pb-3 border-b border-stone-100">
                  <span>Assumption 0{idx + 1}</span>
                  <span className="font-semibold text-amber-800">{ha.philosophicalCategory}</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-stone-900 mt-3">
                  "{ha.statement}"
                </h3>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  {ha.implicitUnderpinning}
                </p>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-400">Click to stress-test this premise</span>
                  <span className="font-semibold text-stone-900">
                    {isSelected ? 'Currently Selected' : 'Select →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Premise Stress-Test Laboratory */}
        <div className="mt-10 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800">
                Premise Stress-Test Lab · {selectedAssumption.philosophicalCategory}
              </span>
              <h3 className="font-serif text-2xl font-medium text-stone-900 mt-1">
                "{selectedAssumption.statement}"
              </h3>
            </div>

            {/* Accept vs Reject Segmented Switch */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200">
              <button
                onClick={() => setStance('accepted')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  stance === 'accepted'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Assume TRUE (Accept Premise)
              </button>
              <button
                onClick={() => setStance('rejected')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  stance === 'rejected'
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Assume FALSE (Reject Premise)
              </button>
            </div>
          </div>

          {/* Dynamic Evaluation Card */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                  Immediate Logical Consequence
                </h4>
                <p className="text-sm text-stone-800 leading-relaxed font-serif">
                  {evaluation.immediateConsequence}
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                  Metaphysical Shift In Reality
                </h4>
                <p className="text-sm text-stone-800 leading-relaxed">
                  {evaluation.metaphysicalShift}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-amber-50/50 rounded-lg border border-amber-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-900 mb-1">
                  Aligned Philosophical Worldviews
                </h4>
                <p className="text-sm text-stone-900 font-medium">
                  {evaluation.alignedWorldview}
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1">
                  Philosophical Vulnerability & Burden of Proof
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {evaluation.vulnerabilities}
                </p>
              </div>
            </div>
          </div>

          {/* Historical Debaters & Turning Point */}
          <div className="mt-6 pt-6 border-t border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-600">
            <div>
              <span className="font-mono text-stone-400 uppercase tracking-wider block mb-1">
                Historical Dialectic Debaters:
              </span>
              <ul className="space-y-1">
                {selectedAssumption.prominentDebaters.map((deb, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-amber-800 font-bold">vs</span>
                    <span>{deb}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-mono text-stone-400 uppercase tracking-wider block mb-1">
                Historical Epochal Shift:
              </span>
              <p className="italic font-serif text-stone-700">
                {selectedAssumption.historicalTurningPoint}
              </p>
            </div>
          </div>
        </div>

        {/* Custom Premise Stress Tester */}
        <div className="mt-12 bg-stone-100/70 border border-stone-300 rounded-xl p-6 sm:p-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Interactive Dialectic Tool
            </span>
            <h3 className="font-serif text-2xl font-semibold text-stone-900 mt-1">
              Test Any Philosophical Premise
            </h3>
            <p className="text-sm text-stone-600 mt-1">
              Enter any underlying belief or existential claim to isolate its hidden presuppositions (e.g., "Free will is an illusion", "Suffering serves a purpose", "Death completes meaning").
            </p>
          </div>

          <form onSubmit={handleTestCustom} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={customPremise}
              onChange={(e) => setCustomPremise(e.target.value)}
              placeholder="e.g. Life without an afterlife has no ultimate point"
              className="flex-1 px-4 py-2.5 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-wider font-semibold rounded-md transition-colors cursor-pointer shrink-0"
            >
              Analyze Premise
            </button>
          </form>

          {analyzedCustom && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-stone-300 shadow-2xs">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 block mb-1">
                Deconstructed Premise Result:
              </span>
              <p className="text-sm text-stone-800 leading-relaxed font-serif">
                {analyzedCustom}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
