import React, { useState } from 'react';
import { Layers, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

interface CustomPremiseAnalysis {
  premise: string;
  category: 'TELEOLOGICAL' | 'EPISTEMOLOGICAL' | 'ONTOLOGICAL' | 'LINGUISTIC';
  unstatedAxiom: string;
  consequenceIfAffirmed: string;
  consequenceIfDenied: string;
  categoryMistakeRisk: string;
}

export const AssumptionStackLab: React.FC = () => {
  const [inputPremise, setInputPremise] = useState('');
  const [analysis, setAnalysis] = useState<CustomPremiseAnalysis | null>(null);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPremise.trim()) return;

    const lower = inputPremise.toLowerCase();
    let cat: 'TELEOLOGICAL' | 'EPISTEMOLOGICAL' | 'ONTOLOGICAL' | 'LINGUISTIC' = 'TELEOLOGICAL';
    let unstated = 'Presupposes that human language constructs mirror objective reality.';
    let aff = 'Requires postulating an external metaphysical grounding or objective standard.';
    let den = 'Reduces the claim to an intersubjective psychological or social convention.';
    let mistake = 'Low: syntactically coherent.';

    if (lower.includes('purpose') || lower.includes('why') || lower.includes('reason') || lower.includes('meaning')) {
      cat = 'TELEOLOGICAL';
      unstated = 'Presumes that existence is the sort of thing that has a pre-ordained final cause (Aristotelian telos).';
      aff = 'Human life is viewed as an assignment; deviation from it implies cosmic failure or sin.';
      den = 'Human life is brute facticity; humans are radically free to author their own values without cosmic oversight.';
      mistake = 'High: risks applying purposive reasoning (which applies to human tools) to cosmic physics.';
    } else if (lower.includes('know') || lower.includes('discover') || lower.includes('truth') || lower.includes('prove')) {
      cat = 'EPISTEMOLOGICAL';
      unstated = 'Assumes human perceptual and rational faculties are capable of unmediated contact with the noumenal world.';
      aff = 'Truth is discoverable; divergence of opinion reflects cognitive bias or moral error.';
      den = 'Epistemic constructivism: humans construct frameworks rather than unearthing objective cosmic truth.';
      mistake = 'Medium: risks treating human cognitive models as the territory itself.';
    } else if (lower.includes('matter') || lower.includes('soul') || lower.includes('brain') || lower.includes('mind')) {
      cat = 'ONTOLOGICAL';
      unstated = 'Assumes a fundamental distinction between subjective qualia and objective physical substrate.';
      aff = 'Forces an expanded metaphysics beyond strict physicalist reductionism.';
      den = 'Physicalism/Illusionism: mental states are identical to or illusions produced by complex neurobiology.';
      mistake = 'Medium: category mistake of reifying subjective perspective into a separate substance.';
    }

    setAnalysis({
      premise: inputPremise.trim(),
      category: cat,
      unstatedAxiom: unstated,
      consequenceIfAffirmed: aff,
      consequenceIfDenied: den,
      categoryMistakeRisk: mistake
    });
  };

  return (
    <section id="assumptions-lab" className="py-16 border-b border-stone-200 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            Phase 2 Tool · Epistemic Scaffolding
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium mt-1">
            Assumption Deconstruction Laboratory
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Every question humans formulate is built upon an invisible scaffolding of presuppositions. Input any existential claim or premise to isolate its unstated enthymemes.
          </p>
        </div>

        {/* Input Form */}
        <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl border border-stone-300 shadow-xs">
          <form onSubmit={handleAnalyze} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={inputPremise}
              onChange={(e) => setInputPremise(e.target.value)}
              placeholder="e.g. Life has no purpose if the universe eventually dies..."
              className="flex-1 px-4 py-3 text-sm sm:text-base bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-wider font-semibold rounded-xl transition-colors cursor-pointer shrink-0"
            >
              Isolate Assumptions
            </button>
          </form>

          {/* Preset Prompts */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-stone-400">Sample Premises:</span>
            {[
              'Human existence must have an objective purpose',
              'Consciousness cannot be reduced to physical neurons',
              'Free will is required for moral responsibility',
              'Purpose is discoverable through reason'
            ].map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setInputPremise(p);
                }}
                className="text-xs px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded transition-colors cursor-pointer"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Analysis Result */}
          {analysis && (
            <div className="mt-8 pt-8 border-t border-stone-200 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold">
                    Categorical Domain: {analysis.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
                    "{analysis.premise}"
                  </h3>
                </div>
                <span className="text-xs font-mono bg-amber-100 text-amber-900 px-3 py-1 rounded">
                  {analysis.categoryMistakeRisk}
                </span>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold block mb-1">
                  The Latent Enthymeme (The Unstated Axiom):
                </span>
                <p className="text-sm font-serif text-stone-900 leading-relaxed">
                  {analysis.unstatedAxiom}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-emerald-800 font-bold mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>If Affirmed (Accepted):</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed font-serif">
                    {analysis.consequenceIfAffirmed}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-rose-800 font-bold mb-1">
                    <XCircle className="w-4 h-4" />
                    <span>If Denied (Rejected):</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed font-serif">
                    {analysis.consequenceIfDenied}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
