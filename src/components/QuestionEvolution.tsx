import React, { useState } from 'react';
import { InquiryNode, QuestionEvolutionStep } from '../data/telosV2Data.ts';
import { GitBranch, ArrowDown, Sparkles, ChevronRight } from 'lucide-react';

interface QuestionEvolutionProps {
  inquiry: InquiryNode;
  onSelectEvolutionQuestion: (q: string) => void;
}

export const QuestionEvolution: React.FC<QuestionEvolutionProps> = ({
  inquiry,
  onSelectEvolutionQuestion
}) => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const steps = inquiry.evolutionChain;
  const currentStep = steps[activeStepIdx] || steps[0];

  return (
    <section id="question-evolution" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            Genealogical Dialectic
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mt-1">
            Question Evolution
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Inquiries do not stand still. An honest investigation into any question inevitably collapses into a deeper, more fundamental inquiry.
          </p>
        </div>

        {/* Visual Genealogical Pipeline */}
        <div className="mt-10 bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {steps.map((st, idx) => {
              const isSelected = activeStepIdx === idx;
              return (
                <React.Fragment key={st.step}>
                  <button
                    onClick={() => setActiveStepIdx(idx)}
                    className={`flex-1 p-5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-1 ring-stone-900'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono opacity-70 mb-1">
                      <span>Step 0{st.step}</span>
                      <span className="uppercase">{st.subfield}</span>
                    </div>
                    <h4 className="font-serif text-base font-bold leading-snug">
                      "{st.question}"
                    </h4>
                  </button>

                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center text-stone-300">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                  {idx < steps.length - 1 && (
                    <div className="flex lg:hidden items-center justify-center text-stone-300 py-1">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Deep-Dive Card into Active Step */}
          <div className="mt-8 p-6 bg-[#FAF7F2] rounded-xl border border-stone-300">
            <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold">
                  Evolution Step 0{currentStep.step} · {currentStep.subfield}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
                  "{currentStep.question}"
                </h3>
              </div>
              <button
                onClick={() => onSelectEvolutionQuestion(currentStep.question)}
                className="px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono uppercase rounded-lg transition-colors cursor-pointer"
              >
                Center Graph on This Step →
              </button>
            </div>

            <div className="mt-4">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold block mb-1">
                Dialectical Transition Rationale:
              </span>
              <p className="text-sm font-serif text-stone-800 leading-relaxed bg-white p-3.5 rounded-lg border border-stone-200">
                {currentStep.transitionRationale}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
