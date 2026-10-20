import React, { useState } from 'react';
import { COMPASS_QUESTIONS } from '../data/philosophyData.ts';
import { calculatePhilosophicalAlignment, AlignmentResult } from '../utils/philosophyLogic.ts';
import { X, Check } from 'lucide-react';

interface SocraticCompassProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SocraticCompass: React.FC<SocraticCompassProps> = ({
  isOpen,
  onClose
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isCalculated, setIsCalculated] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentResult: AlignmentResult = calculatePhilosophicalAlignment(selectedAnswers);
  const isComplete = currentResult.totalAnswered === currentResult.totalQuestions;

  const handleSelectOption = (questionId: string, optionId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsCalculated(false);
  };

  const handleCopyProfile = () => {
    const text = `TELOS Philosophical Compass Profile:
Dominant Tradition: ${currentResult.dominantPosition.name} (${currentResult.dominantPosition.tagline})
Breakdown:
${currentResult.scores.map(s => `- ${s.name}: ${s.percentage}%`).join('\n')}

Synthesis: ${currentResult.philosophicalSynthesis}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#FBF9F5] w-full max-w-4xl rounded-2xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-stone-200 bg-white flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800">
              Diagnostic Inquiry
            </span>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              The Philosophical Alignment Compass
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {!isCalculated ? (
            <div>
              <p className="text-sm text-stone-600 mb-6">
                Answer each inquiry according to your deepest philosophical intuition. We will map your worldview across Existentialism, Theism, Nihilism, and Humanism.
              </p>

              <div className="space-y-8">
                {COMPASS_QUESTIONS.map((q, idx) => {
                  const selectedId = selectedAnswers[q.id];
                  return (
                    <div key={q.id} className="p-5 bg-white rounded-xl border border-stone-200 shadow-2xs">
                      <div className="flex items-center justify-between text-xs font-mono text-stone-400 pb-2 border-b border-stone-100">
                        <span>Inquiry 0{idx + 1} of {COMPASS_QUESTIONS.length}</span>
                        <span className="text-stone-600 uppercase font-semibold">{q.category}</span>
                      </div>
                      <h4 className="font-serif text-lg font-semibold text-stone-900 mt-2">
                        {q.prompt}
                      </h4>
                      <p className="text-xs text-stone-500 mb-4">{q.subtext}</p>

                      <div className="space-y-2">
                        {q.options.map((opt) => {
                          const isOptionSelected = selectedId === opt.id;
                          return (
                            <button
                              key={opt.id}
                              onClick={() => handleSelectOption(q.id, opt.id)}
                              className={`w-full text-left p-3.5 rounded-lg border text-sm transition-all cursor-pointer flex items-start gap-3 ${
                                isOptionSelected
                                  ? 'bg-stone-900 text-stone-50 border-stone-900 font-medium'
                                  : 'bg-stone-50/70 hover:bg-stone-100 text-stone-800 border-stone-200'
                              }`}
                            >
                              <span className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${
                                isOptionSelected ? 'border-white bg-white text-stone-900 text-xs' : 'border-stone-400'
                              }`}>
                                {isOptionSelected ? '•' : ''}
                              </span>
                              <span>{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer action */}
              <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs font-mono text-stone-500">
                  {currentResult.totalAnswered} of {currentResult.totalQuestions} questions answered
                </span>
                <button
                  onClick={() => setIsCalculated(true)}
                  disabled={!isComplete}
                  className={`px-6 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-md transition-all cursor-pointer ${
                    isComplete
                      ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-xs'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  Calculate My Alignment →
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-800 block mb-1">
                  Primary Worldview Resonance
                </span>
                <h3 className="font-serif text-3xl font-bold text-stone-900">
                  {currentResult.dominantPosition.name}
                </h3>
                <p className="font-serif italic text-stone-600 mt-1">
                  "{currentResult.dominantPosition.tagline}"
                </p>

                <p className="mt-4 text-stone-800 text-sm sm:text-base leading-relaxed font-serif bg-stone-50 p-4 rounded-lg border border-stone-200">
                  {currentResult.philosophicalSynthesis}
                </p>

                {/* Quantitative Breakdown Bar with tabular numerals */}
                <div className="mt-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block mb-2">
                    Comparative Alignment Spectrum:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentResult.scores.map((score) => (
                      <div key={score.camp} className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="font-semibold text-stone-800">{score.name}</span>
                          <span className="tabular-nums font-bold text-stone-900">{score.percentage}%</span>
                        </div>
                        <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mt-2">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${score.percentage}%`,
                              backgroundColor: score.accent
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Reading */}
                <div className="mt-6 pt-6 border-t border-stone-200">
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-2">
                    Recommended Reading & Thinkers For Your Profile:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentResult.recommendedThinkers.map((t, idx) => (
                      <div key={idx} className="p-3 bg-stone-50 rounded border border-stone-200 text-xs">
                        <strong className="block font-serif text-stone-900 font-bold">{t.name}</strong>
                        <span className="italic text-stone-500 block">{t.work}</span>
                        <p className="mt-1 font-serif text-stone-600 text-[11px] line-clamp-3">
                          "{t.quote}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-stone-600 hover:text-stone-900 border border-stone-300 rounded hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  ← Re-take Compass
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={handleCopyProfile}
                    className="px-4 py-2 text-xs uppercase tracking-wider font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded border border-stone-300 transition-colors cursor-pointer"
                  >
                    {copied ? '✓ Profile Copied' : 'Copy Profile Summary'}
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-2 text-xs uppercase tracking-wider font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded transition-colors cursor-pointer shadow-xs"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
