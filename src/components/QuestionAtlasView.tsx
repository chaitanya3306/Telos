import React, { useState } from 'react';
import { QuestionNode } from '../data/questionAtlasData.ts';
import { simulatePremiseInversion, PremiseCascade } from '../utils/philosophyLogic.ts';
import {
  GitCommit,
  Layers,
  Compass,
  History,
  BookOpen,
  Atom,
  Binary,
  RotateCcw,
  Check,
  X
} from 'lucide-react';

interface QuestionAtlasViewProps {
  question: QuestionNode;
  onSelectNeighbor: (neighborText: string) => void;
  onSelectRoot: (rootId: string) => void;
}

export const QuestionAtlasView: React.FC<QuestionAtlasViewProps> = ({
  question,
  onSelectNeighbor,
  onSelectRoot
}) => {
  const [activeDimension, setActiveDimension] = useState<
    'all' | 'assumptions' | 'neighbors' | 'historical' | 'traditions' | 'scientific' | 'roots' | 'framings'
  >('all');

  // State for interactive assumption simulation
  const [activeAssumptionId, setActiveAssumptionId] = useState<string>(
    question.sharedAssumptions[0]?.id || ''
  );
  const [isAssumptionAccepted, setIsAssumptionAccepted] = useState<boolean>(true);

  const currentCascade: PremiseCascade = simulatePremiseInversion(
    question,
    activeAssumptionId || question.sharedAssumptions[0]?.id || '',
    isAssumptionAccepted
  );

  return (
    <section id="atlas-view" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            Phase 2 Core · Multi-Axial Deconstruction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium mt-1">
            The Eight-Dimensional Atlas
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Every deep question is mapped across eight epistemic dimensions. Telos does not answer; it exposes the semantic scaffolding, historical lineages, and root reductions of the inquiry.
          </p>
        </div>

        {/* Dimension Filter Bar */}
        <div className="mt-8 flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-stone-200 text-xs font-medium">
          <button
            onClick={() => setActiveDimension('all')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              activeDimension === 'all'
                ? 'bg-stone-900 text-white font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            All 8 Dimensions
          </button>
          <button
            onClick={() => setActiveDimension('assumptions')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              activeDimension === 'assumptions'
                ? 'bg-stone-900 text-white font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            [B] Shared Assumptions
          </button>
          <button
            onClick={() => setActiveDimension('neighbors')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              activeDimension === 'neighbors'
                ? 'bg-stone-900 text-white font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            [C] Neighboring Questions
          </button>
          <button
            onClick={() => setActiveDimension('historical')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              activeDimension === 'historical'
                ? 'bg-stone-900 text-white font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            [D] Historical Variations
          </button>
          <button
            onClick={() => setActiveDimension('traditions')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              activeDimension === 'traditions'
                ? 'bg-stone-900 text-white font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            [E] Philosophical Traditions
          </button>
          <button
            onClick={() => setActiveDimension('scientific')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              activeDimension === 'scientific'
                ? 'bg-stone-900 text-white font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            [F] Scientific Perspectives
          </button>
          <button
            onClick={() => setActiveDimension('roots')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              activeDimension === 'roots'
                ? 'bg-stone-900 text-white font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            [G] Root Reductions
          </button>
          <button
            onClick={() => setActiveDimension('framings')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              activeDimension === 'framings'
                ? 'bg-stone-900 text-white font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            [H] Alternative Framings
          </button>
        </div>

        {/* Dimension Containers Grid */}
        <div className="mt-10 space-y-12">
          {/* [A] RELATED QUESTIONS */}
          {(activeDimension === 'all' || activeDimension === 'neighbors') && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-amber-800">
                <GitCommit className="w-4 h-4" />
                <span>Dimension A · Related Questions (Structural Primitives)</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Prerequisites & Concurrent Inquiries
              </h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                Questions that must be settled prior to or simultaneously with this inquiry.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {question.relatedQuestions.map((rel, idx) => (
                  <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded">
                        {rel.relationship}
                      </span>
                      <h4 className="font-serif text-base font-semibold text-stone-900 mt-2">
                        "{rel.text}"
                      </h4>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        {rel.rationale}
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectNeighbor(rel.text)}
                      className="mt-4 text-xs font-mono font-semibold text-stone-800 hover:text-stone-950 flex items-center gap-1 cursor-pointer"
                    >
                      Inspect in Atlas →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* [B] SHARED ASSUMPTIONS (THE LATENT ENTHYMEME STACK) */}
          {(activeDimension === 'all' || activeDimension === 'assumptions') && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-amber-800">
                <Layers className="w-4 h-4" />
                <span>Dimension B · Shared Assumptions (The Latent Enthymeme Stack)</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Unstated Axioms Buried in the Grammar
              </h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                Assumptions required for this question to be intelligible. Click an assumption to simulate the cascade when accepted or rejected.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Assumptions List */}
                <div className="lg:col-span-5 space-y-3">
                  {question.sharedAssumptions.map((asm) => {
                    const isSelected = (activeAssumptionId || question.sharedAssumptions[0]?.id) === asm.id;
                    return (
                      <button
                        key={asm.id}
                        onClick={() => setActiveAssumptionId(asm.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-sm'
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] font-mono opacity-75 mb-1">
                          <span>{asm.type}</span>
                          <span className="italic">{asm.falsifiability}</span>
                        </div>
                        <h4 className="font-serif text-sm font-semibold leading-snug">
                          "{asm.proposition}"
                        </h4>
                        <p className="text-xs opacity-75 mt-1 line-clamp-2">
                          {asm.implicitEnthymeme}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Simulation Output Panel */}
                <div className="lg:col-span-7 bg-[#FAF7F2] border border-stone-300 rounded-xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-200">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold">
                      Premise Cascade Simulation
                    </span>
                    <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-stone-200">
                      <button
                        onClick={() => setIsAssumptionAccepted(true)}
                        className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer flex items-center gap-1 ${
                          isAssumptionAccepted
                            ? 'bg-stone-900 text-white'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        <Check className="w-3 h-3" />
                        Assume TRUE
                      </button>
                      <button
                        onClick={() => setIsAssumptionAccepted(false)}
                        className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer flex items-center gap-1 ${
                          !isAssumptionAccepted
                            ? 'bg-stone-900 text-white'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        <X className="w-3 h-3" />
                        Assume FALSE
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <span className="text-xs font-mono uppercase text-stone-500 block">
                        Logical Consequence on Human Inquiry:
                      </span>
                      <p className="text-sm font-serif text-stone-900 mt-1 leading-relaxed bg-white p-3 rounded-lg border border-stone-200">
                        {currentCascade.immediateConsequence}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase text-stone-500 block">
                        Aligned / Affected Frameworks:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {currentCascade.affectedWorldviews.map((w, i) => (
                          <span key={i} className="px-2.5 py-1 text-xs font-mono bg-white text-stone-800 rounded border border-stone-200">
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase text-stone-500 block">
                        Epistemic Burden of Proof:
                      </span>
                      <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                        {currentCascade.epistemicBurden}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* [C] NEIGHBORING QUESTIONS */}
          {(activeDimension === 'all' || activeDimension === 'neighbors') && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-amber-800">
                <Compass className="w-4 h-4" />
                <span>Dimension C · Neighboring Questions (Topological Permutations)</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Geodesic Neighbors Differing by Single Operator
              </h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                Inquiries close in conceptual space that shift the entity, interrogative operator, or future attractor.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {question.neighboringQuestions.map((nb, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-400 transition-all cursor-pointer flex flex-col justify-between"
                    onClick={() => onSelectNeighbor(nb.text)}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-amber-900 font-semibold">{nb.shiftType}</span>
                        <span className="text-stone-400 tabular-nums">Δ {nb.distanceDelta}</span>
                      </div>
                      <h4 className="font-serif text-base font-semibold text-stone-900 mt-2">
                        "{nb.text}"
                      </h4>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        {nb.conceptualShift}
                      </p>
                    </div>
                    <span className="mt-4 text-xs font-mono text-stone-900 font-semibold block">
                      Shift Target →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* [D] HISTORICAL VARIATIONS */}
          {(activeDimension === 'all' || activeDimension === 'historical') && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-amber-800">
                <History className="w-4 h-4" />
                <span>Dimension D · Historical Variations (Genealogies of Inquiry)</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                How Epochal Paradigms Reformulate the Ache
              </h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                Tracing the same existential urge from Bronze Age mythic poetry to 21st-century cybernetics.
              </p>

              <div className="relative pl-6 border-l-2 border-stone-200 space-y-6">
                {question.historicalVariations.map((hist, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-stone-900 border-2 border-white" />
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-xs font-mono uppercase font-bold text-amber-900">
                        {hist.epoch}
                      </span>
                      <span className="text-xs font-mono text-stone-400">({hist.era})</span>
                      <span className="text-xs font-serif italic text-stone-500">
                        · {hist.canonicalSource}
                      </span>
                    </div>
                    <blockquote className="font-serif text-base font-semibold text-stone-900 mt-1 italic">
                      "{hist.formulation}"
                    </blockquote>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {hist.paradigmNote}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* [E] PHILOSOPHICAL TRADITIONS */}
          {(activeDimension === 'all' || activeDimension === 'traditions') && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-amber-800">
                <BookOpen className="w-4 h-4" />
                <span>Dimension E · Philosophical Traditions (Framework Lenses)</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Reconstructing the Problem (Not Canned Answers)
              </h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                How different epistemological systems dissect the machinery of this inquiry.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {question.philosophicalTraditions.map((trad, idx) => (
                  <div key={idx} className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-stone-900 block">
                      {trad.tradition}
                    </span>
                    <span className="text-xs font-mono text-stone-400 block mb-2">
                      Exemplar: {trad.keyFigure}
                    </span>
                    <div className="text-xs text-stone-800 leading-relaxed font-serif">
                      <strong className="block text-stone-900 mb-1">Reconstructed Problem:</strong>
                      {trad.reconstructedProblem}
                    </div>
                    <div className="mt-3 pt-3 border-t border-stone-200 text-xs text-stone-600">
                      <strong className="block text-stone-700 font-mono text-[11px] uppercase">Epistemic Lens:</strong>
                      {trad.epistemicLens}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* [F] SCIENTIFIC PERSPECTIVES */}
          {(activeDimension === 'all' || activeDimension === 'scientific') && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-amber-800">
                <Atom className="w-4 h-4" />
                <span>Dimension F · Scientific Perspectives (Empirical & Formal Frameworks)</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Physical, Biological & Informational Realities
              </h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                Empirical explanations grounding the inquiry in thermodynamics, biology, and neurology.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {question.scientificPerspectives.map((sci, idx) => (
                  <div key={idx} className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-emerald-900 block">
                      {sci.discipline}
                    </span>
                    <span className="text-xs font-serif italic text-stone-600 block mb-2">
                      {sci.framework} ({sci.keyTheorist})
                    </span>
                    <p className="text-xs text-stone-800 leading-relaxed">
                      {sci.empiricalExplanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* [G] ROOT QUESTION CANDIDATES */}
          {(activeDimension === 'all' || activeDimension === 'roots') && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-amber-800">
                <Binary className="w-4 h-4" />
                <span>Dimension G · Root Question Candidates (Primal Reductions)</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Cascading Toward the Deepest Metaphysical Knots
              </h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                Tracing how this specific surface inquiry reduces along a formal chain to a fundamental root problem.
              </p>

              <div className="space-y-4">
                {question.rootQuestionCandidates.map((rc, idx) => (
                  <div key={idx} className="p-5 bg-[#FAF7F2] rounded-xl border border-stone-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-200">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
                          Root Candidate #{idx + 1}
                        </span>
                        <h4 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
                          "{rc.rootQuestion}"
                        </h4>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-stone-500">
                          Explanatory Power: <strong className="text-stone-900 tabular-nums">{rc.explanatoryPower}%</strong>
                        </span>
                        <button
                          onClick={() => onSelectRoot(rc.rootId)}
                          className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono uppercase rounded transition-colors cursor-pointer"
                        >
                          Inspect Root Knot →
                        </button>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-xs font-mono text-stone-500 block mb-2">
                        Formal Reduction Path:
                      </span>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 text-xs">
                        {rc.reductionChain.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <div className="p-2.5 bg-white rounded border border-stone-200 font-serif flex-1 shadow-2xs">
                              {step}
                            </div>
                            {sIdx < rc.reductionChain.length - 1 && (
                              <span className="text-stone-400 font-mono text-center sm:text-left">
                                →
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* [H] ALTERNATIVE FRAMINGS */}
          {(activeDimension === 'all' || activeDimension === 'framings') && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-amber-800">
                <RotateCcw className="w-4 h-4" />
                <span>Dimension H · Alternative Framings (Perspective Inversions)</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Inverting the Aperture & Deflating the Mystery
              </h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                Reframing the question from the perspective of the observer, linguistic deflation, or computation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {question.alternativeFramings.map((af, idx) => (
                  <div key={idx} className="p-5 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-stone-900 block">
                      {af.framingType.replace('_', ' ')}
                    </span>
                    <p className="font-serif text-sm font-semibold text-stone-900 mt-2 italic">
                      "{af.reframedText}"
                    </p>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      {af.epistemicShift}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
