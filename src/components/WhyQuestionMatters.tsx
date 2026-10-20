import React from 'react';
import { InquiryNode } from '../data/telosV2Data.ts';
import { History, HelpCircle, GitFork, Lightbulb } from 'lucide-react';

interface WhyQuestionMattersProps {
  inquiry: InquiryNode;
  onSelectConnectedQuestion: (q: string) => void;
}

export const WhyQuestionMatters: React.FC<WhyQuestionMattersProps> = ({
  inquiry,
  onSelectConnectedQuestion
}) => {
  const { whyItMatters } = inquiry;

  return (
    <section id="why-it-matters" className="py-16 border-b border-stone-200 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold">
            Cognitive & Historical Archaeology
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mt-1">
            Why This Question Matters
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Every persistent inquiry reflects the deep architecture of the human brain, societal pressures, and our recurring confrontation with the unknown.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Why Humans Repeatedly Ask It + Generating Assumptions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-bold mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>1. Why Humans Repeatedly Ask It</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                The Biological & Cognitive Origin
              </h3>
              <p className="font-serif text-base text-stone-800 leading-relaxed">
                {whyItMatters.whyHumansAskIt}
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-bold mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>2. The Assumptions That Generate It</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                Foundational Presuppositions
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {whyItMatters.generatingAssumptions.map((gen, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                    <span className="font-mono text-amber-800 font-bold">0{idx + 1}.</span>
                    <span className="font-serif">{gen}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-bold mb-2">
                <GitFork className="w-4 h-4" />
                <span>3. Larger Questions Connected To It</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                Metaphysical Horizons
              </h3>
              <div className="space-y-2">
                {whyItMatters.largerQuestions.map((lq, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectConnectedQuestion(lq)}
                    className="w-full text-left p-2.5 bg-stone-50 hover:bg-stone-100 rounded-lg border border-stone-200 transition-colors text-xs sm:text-sm font-serif text-stone-800 cursor-pointer flex items-center justify-between"
                  >
                    <span>"{lq}"</span>
                    <span className="text-stone-400 font-mono text-[10px]">Inspect →</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Which Civilizations Explored It */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-bold mb-2">
              <History className="w-4 h-4" />
              <span>4. Civilizational Trajectory</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Which Civilizations Explored It
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              How disparate historical cultures independently investigated this fundamental dilemma.
            </p>

            <div className="relative pl-6 border-l-2 border-stone-200 space-y-6">
              {whyItMatters.civilizationsExplored.map((civ, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-stone-900 border-2 border-white" />
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h4 className="font-serif font-bold text-stone-900 text-base">
                      {civ.civilization}
                    </h4>
                    <span className="text-xs font-mono text-stone-400">({civ.era})</span>
                  </div>
                  <span className="text-xs font-serif italic text-amber-900 block mt-0.5">
                    Source: {civ.canonicalText}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-700 mt-1 leading-relaxed font-serif">
                    {civ.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
