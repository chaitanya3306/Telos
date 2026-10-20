import React, { useState } from 'react';
import { X, Sparkles, Check, RotateCcw } from 'lucide-react';

interface SocraticReflectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SocraticDilemma {
  id: string;
  category: string;
  question: string;
  subtext: string;
  choices: {
    label: string;
    cluster: 'Existentialism' | 'Theism' | 'Nihilism' | 'Humanism' | 'Eastern Non-Dualism';
    insight: string;
  }[];
}

const DILEMMAS: SocraticDilemma[] = [
  {
    id: 'd1-meaning',
    category: 'Ontology of Meaning',
    question: 'Where does the primary value of a human life originate?',
    subtext: 'Consider what gives your daily pursuits their ultimate weight.',
    choices: [
      {
        label: 'Forged from within: I author my own values through conscious action.',
        cluster: 'Existentialism',
        insight: 'Reflects radical personal agency and freedom.'
      },
      {
        label: 'Bestowed from above: Grounded in transcendent divine purpose.',
        cluster: 'Theism',
        insight: 'Reflects theistic alignment with a sacred cosmic order.'
      },
      {
        label: 'Nowhere: Ultimate purpose is an anthropomorphic illusion.',
        cluster: 'Nihilism',
        insight: 'Reflects intellectual austerity and cosmic silence.'
      },
      {
        label: 'Cultivated together: Intersubjectively created through reason and empathy.',
        cluster: 'Humanism',
        insight: 'Reflects secular humanist solidarity in the mortal world.'
      },
      {
        label: 'Dissolved: The seeker and the sought are non-dual appearances in pure awareness.',
        cluster: 'Eastern Non-Dualism',
        insight: 'Reflects Advaitic or Buddhist dissolution of the separate ego.'
      }
    ]
  },
  {
    id: 'd2-consciousness',
    category: 'Philosophy of Mind',
    question: 'How do you perceive your inner subjective observer?',
    subtext: 'The mystery of the first-person perspective looking out at reality.',
    choices: [
      {
        label: 'The clearing of radical freedom: An active awareness that cannot be reduced to clockwork.',
        cluster: 'Existentialism',
        insight: 'Consciousness as the capacity to say "No" to given circumstances.'
      },
      {
        label: 'The sacred breath (Imago Dei): An aperture reflecting divine intelligence.',
        cluster: 'Theism',
        insight: 'Consciousness as sacred communion.'
      },
      {
        label: 'An accidental neural hallucination: An evolutionary feedback loop.',
        cluster: 'Nihilism',
        insight: 'Consciousness as an unguided biological byproduct.'
      },
      {
        label: 'The universe knowing itself: An emergent organic marvel to be protected.',
        cluster: 'Humanism',
        insight: 'Consciousness as humanity’s highest ethical treasure.'
      },
      {
        label: 'The timeless, unconditioned background in which all thoughts arise and vanish.',
        cluster: 'Eastern Non-Dualism',
        insight: 'Consciousness as the fundamental substrate of existence.'
      }
    ]
  },
  {
    id: 'd3-finitude',
    category: 'Mortality & Finitude',
    question: 'What does mortality do to human purpose?',
    subtext: 'How you reconcile the human heart with the fact of death.',
    choices: [
      {
        label: 'Death gives life its sharp deadline: Finitude makes authentic choice urgent.',
        cluster: 'Existentialism',
        insight: 'Heideggerian being-toward-death.'
      },
      {
        label: 'Death is a threshold into eternal communion with the Divine.',
        cluster: 'Theism',
        insight: 'Eschatological hope and cosmic reconciliation.'
      },
      {
        label: 'Death permanently erases all trace of human exertion.',
        cluster: 'Nihilism',
        insight: 'Cosmic entropy consumes all historical memory.'
      },
      {
        label: 'Death urges us to leave the world gentler and wiser for the next generation.',
        cluster: 'Humanism',
        insight: 'Secular legacy and planetary stewardship.'
      },
      {
        label: 'Only the wave collapses; the ocean of pure Being is untouched.',
        cluster: 'Eastern Non-Dualism',
        insight: 'Transcending the fear of birth and death.'
      }
    ]
  }
];

export const SocraticReflectionModal: React.FC<SocraticReflectionModalProps> = ({
  isOpen,
  onClose
}) => {
  const [selectedChoices, setSelectedChoices] = useState<Record<string, number>>({});
  const [calculated, setCalculated] = useState(false);

  if (!isOpen) return null;

  const isComplete = Object.keys(selectedChoices).length === DILEMMAS.length;

  // Tally counts across clusters
  const clusterCounts: Record<string, number> = {
    'Existentialism': 0,
    'Theism': 0,
    'Nihilism': 0,
    'Humanism': 0,
    'Eastern Non-Dualism': 0
  };

  Object.entries(selectedChoices).forEach(([dId, cIdx]) => {
    const dilemma = DILEMMAS.find(d => d.id === dId);
    if (dilemma && dilemma.choices[cIdx]) {
      const cluster = dilemma.choices[cIdx].cluster;
      clusterCounts[cluster] = (clusterCounts[cluster] || 0) + 1;
    }
  });

  const dominantCluster = Object.entries(clusterCounts).sort((a, b) => b[1] - a[1])[0][0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FBF9F5] w-full max-w-3xl rounded-2xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-5 bg-white border-b border-stone-200 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
              Personal Socratic Exploration
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              The Reflective Intuition Compass
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {!calculated ? (
            <div className="space-y-6">
              <p className="text-sm font-serif text-stone-600">
                Answer each existential dilemma according to your deepest philosophical intuition. We will reveal which historical tradition echoes your thoughts.
              </p>

              {DILEMMAS.map((d, dIdx) => (
                <div key={d.id} className="p-5 bg-white rounded-xl border border-stone-200">
                  <div className="flex items-center justify-between text-xs font-mono text-stone-400 pb-2 border-b border-stone-100">
                    <span>Dilemma 0{dIdx + 1} of {DILEMMAS.length}</span>
                    <span className="font-semibold text-stone-600">{d.category}</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-stone-900 mt-2">
                    {d.question}
                  </h4>
                  <p className="text-xs text-stone-500 mb-3 font-serif italic">{d.subtext}</p>

                  <div className="space-y-2">
                    {d.choices.map((c, cIdx) => {
                      const isSelected = selectedChoices[d.id] === cIdx;
                      return (
                        <button
                          key={cIdx}
                          onClick={() => setSelectedChoices(prev => ({ ...prev, [d.id]: cIdx }))}
                          className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer flex items-start gap-2.5 ${
                            isSelected
                              ? 'bg-stone-900 text-white border-stone-900 font-medium'
                              : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                          }`}
                        >
                          <span className={`w-3.5 h-3.5 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-white bg-white text-stone-900 text-[10px]' : 'border-stone-400'
                          }`}>
                            {isSelected ? '•' : ''}
                          </span>
                          <span className="font-serif">{c.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400">
                  {Object.keys(selectedChoices).length} of {DILEMMAS.length} completed
                </span>
                <button
                  onClick={() => setCalculated(true)}
                  disabled={!isComplete}
                  className={`px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-lg transition-all cursor-pointer ${
                    isComplete
                      ? 'bg-stone-900 text-white hover:bg-stone-800 shadow-xs'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                  }`}
                >
                  View Resonance Profile →
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold block mb-1">
                  Primary Resonance Cluster
                </span>
                <h3 className="font-serif text-3xl font-bold text-stone-900">
                  {dominantCluster}
                </h3>

                <p className="mt-3 text-sm font-serif text-stone-700 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200">
                  Your philosophical instincts demonstrate high affinity for <strong>{dominantCluster}</strong>. You intuitively approach questions of existence, mind, and finitude through its conceptual lens.
                </p>

                {/* Quantitative distribution */}
                <div className="mt-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-2">
                    Resonance Distribution:
                  </span>
                  <div className="space-y-2">
                    {Object.entries(clusterCounts).map(([cl, count]) => {
                      const pct = Math.round((count / DILEMMAS.length) * 100);
                      return (
                        <div key={cl} className="p-2.5 bg-stone-50 rounded-lg border border-stone-200 text-xs">
                          <div className="flex items-center justify-between font-mono mb-1">
                            <span className="font-semibold text-stone-800">{cl}</span>
                            <span className="tabular-nums font-bold text-stone-900">{pct}%</span>
                          </div>
                          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-stone-900 rounded-full transition-all duration-500"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-stone-200">
                <button
                  onClick={() => {
                    setSelectedChoices({});
                    setCalculated(false);
                  }}
                  className="px-3 py-1.5 text-xs font-mono uppercase text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Re-explore
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs uppercase tracking-wider font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded-lg transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
