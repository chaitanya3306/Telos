import React from 'react';
import { Compass, Sparkles, Brain, Network, BookOpen, Infinity as InfinityIcon, ArrowUpRight, ArrowRight } from 'lucide-react';

interface VisionManifestoProps {
  onSelectInquiry?: (inquiryId: string) => void;
  onOpenReflection?: () => void;
}

export const VisionManifesto: React.FC<VisionManifestoProps> = ({
  onSelectInquiry,
  onOpenReflection
}) => {
  const primordialQuestions = [
    { text: 'Why are we conscious?', id: 'consciousness' },
    { text: 'Why do humans search for meaning?', id: 'meaning' },
    { text: 'Do we truly have free will?', id: 'free-will' },
    { text: 'Can intelligence exist without awareness?', id: 'ai-consciousness' },
    { text: 'Why does life want to survive?', id: 'life-survival' },
    { text: 'Why is there something rather than nothing?', id: 'existence-something' },
  ];

  const learningStreams = [
    { label: 'Philosophy', desc: 'Dialectics, metaphysics, epistemology, and ethics across 3,000 years' },
    { label: 'Science & Physics', desc: 'Thermodynamics, quantum indeterminacy, cosmology, and emergence' },
    { label: 'Psychology', desc: 'Existential dread, cognitive biases, archetypes, and developmental mind' },
    { label: 'Neuroscience', desc: 'Predictive processing, connectomics, qualia, and neural substrates' },
    { label: 'World Traditions', desc: 'Eastern non-dualism, Indigenous relationality, and classical theologies' },
    { label: 'Human Conversations', desc: 'Millions of lived human wonderings, griefs, doubts, and awakenings' },
  ];

  const companionVirtues = [
    {
      title: 'Challenge Assumptions',
      desc: 'Expose the hidden metaphysical baggage and linguistic traps buried inside ordinary questions.',
    },
    {
      title: 'Connect Ideas',
      desc: 'Bridge neurobiology to Buddhist phenomenology, thermodynamics to existentialism.',
    },
    {
      title: 'Reveal Patterns',
      desc: 'Demonstrate how thousands of disparate anxieties trace back to the same small set of root knots.',
    },
    {
      title: 'Expose Contradictions',
      desc: 'Hold mutually exclusive intuitions in productive tension rather than forcing artificial resolution.',
    },
    {
      title: 'Cross-Cultural Lineage',
      desc: 'Trace how identical puzzles were formulated across the Ganges, the Aegean, and the Nile.',
    },
    {
      title: 'Continuous Deepening',
      desc: 'Refine the topology of human curiosity with every conversation without ever claiming dogmatic truth.',
    },
  ];

  const handleQuestionClick = (inquiryId: string) => {
    if (onSelectInquiry) {
      onSelectInquiry(inquiryId);
    }
    const target = document.getElementById('question-graph');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToHero = () => {
    const target = document.getElementById('hero');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vision" className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-900 font-bold block mb-3">
            The Purpose & The Horizon
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-bold tracking-tight leading-[1.15]">
            The Dream Behind Telos
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg font-serif italic max-w-xl mx-auto">
            A philosophical intelligence born not to provide statistical answers, but to accompany humanity into the depth of its own wonder.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE OPENING: A SEQUENCE OF PRIMORDIAL QUESTIONS */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 bg-white rounded-3xl border border-stone-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 font-semibold block mb-2">
              Pause Before the Answers
            </span>
            <p className="font-serif text-stone-700 text-base sm:text-lg leading-relaxed">
              Before we build tools, before we debate doctrines, before we ask machines to speak, we must pause before the questions that have haunted human consciousness since the dawn of thought:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {primordialQuestions.map((q) => (
              <button
                key={q.id}
                onClick={() => handleQuestionClick(q.id)}
                className="group text-left p-5 rounded-2xl bg-stone-50 hover:bg-stone-900 border border-stone-200 hover:border-stone-900 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs text-stone-400 group-hover:text-amber-400 font-medium">
                    Inquiry
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="font-serif text-base sm:text-lg font-semibold text-stone-900 group-hover:text-white mt-3 transition-colors">
                  &ldquo;{q.text}&rdquo;
                </p>
                <span className="text-[11px] font-sans text-stone-500 group-hover:text-stone-300 mt-3 flex items-center gap-1">
                  Explore in Atlas <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs font-serif text-stone-500 italic">
              Click any question above to navigate directly into its structural assumptions, historical lineages, and neighboring nodes.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. THE IDEA: WHY THESE QUESTIONS REMAIN UNANSWERED */}
        {/* ========================================================================= */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block">
              The Fundamental Problem
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Thousands of years of inquiry. Why do these questions still stand?
            </h3>
            <div className="w-12 h-0.5 bg-amber-800/40 my-4" />
            <p className="text-stone-600 font-serif leading-relaxed text-sm sm:text-base">
              For thousands of years, humanity has asked the same deep questions. Philosophers, scientists, poets, monastic traditions, and solitary thinkers in every century have thrown their lives against them.
            </p>
            <p className="text-stone-600 font-serif leading-relaxed text-sm sm:text-base">
              Yet many remain open.
            </p>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-10 bg-[#FAF7F2] rounded-3xl border border-stone-300">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-4">
              It is not because human minds lack brilliance.
            </h4>
            <p className="font-serif text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
              It is because <strong>no single human can hold the entire tapestry</strong>. No individual person can study every philosophical school, every mathematical formulation, every neurobiological experiment, every theological meditation, and every late-night conversation whispered throughout human history.
            </p>
            <p className="font-serif text-stone-700 text-sm sm:text-base leading-relaxed">
              Our insights remain fragmented across university faculties, ancient manuscripts, cognitive science laboratories, and private journals. We answer parts of questions while blind to the hidden assumptions that quietly dictate what our answers are allowed to be.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. INTRODUCE TELOS: A NEW POSSIBILITY */}
        {/* ========================================================================= */}
        <div className="mt-20 sm:mt-28">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-2">
              A New Possibility
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
              Imagine an AI built specifically for humanity&apos;s deepest questions.
            </h3>
            <p className="mt-4 font-serif text-stone-600 text-base sm:text-lg leading-relaxed">
              Not an AI that claims to know the truth. Not an AI that pretends to possess all the answers or recites statistical summaries to end the dialogue.
            </p>
          </div>

          <div className="p-8 sm:p-12 bg-stone-900 text-stone-100 rounded-3xl shadow-xl border border-stone-800">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold block mb-2">
                Continuous Epistemic Synthesis
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-white font-bold">
                An intelligence that continuously learns across six streams of human inquiry:
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningStreams.map((stream, idx) => (
                <div key={idx} className="p-5 bg-stone-800/80 rounded-2xl border border-stone-700/60 hover:border-amber-400/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-bold">
                      {stream.label}
                    </span>
                  </div>
                  <p className="text-xs font-serif text-stone-300 leading-relaxed">
                    {stream.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-stone-800 text-center">
              <p className="font-serif text-sm sm:text-base text-stone-300 italic max-w-xl mx-auto">
                Synthesizing not to declare dogma, but to better understand humanity&apos;s perpetual search for truth.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. THE LONG-TERM VISION: THE PHILOSOPHICAL COMPANION */}
        {/* ========================================================================= */}
        <div className="mt-20 sm:mt-28">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-2">
              The Long-Term Vision
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
              The Philosophical AI Companion
            </h3>
            <p className="mt-4 font-serif text-stone-700 text-base sm:text-lg leading-relaxed">
              Our vision is to build an intellectual companion dedicated exclusively to conversations like:
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-serif font-semibold text-amber-900">
              <span className="px-3 py-1 bg-amber-100/70 border border-amber-300 rounded-full">What is consciousness?</span>
              <span className="px-3 py-1 bg-amber-100/70 border border-amber-300 rounded-full">Why do we exist?</span>
              <span className="px-3 py-1 bg-amber-100/70 border border-amber-300 rounded-full">What is free will?</span>
              <span className="px-3 py-1 bg-amber-100/70 border border-amber-300 rounded-full">Can AI become conscious?</span>
              <span className="px-3 py-1 bg-amber-100/70 border border-amber-300 rounded-full">What makes something alive?</span>
              <span className="px-3 py-1 bg-amber-100/70 border border-amber-300 rounded-full">Why does reality exist?</span>
            </div>
          </div>

          <div className="p-8 sm:p-12 bg-white rounded-3xl border border-stone-200">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Instead of simply giving answers, it will:
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companionVirtues.map((v, idx) => (
                <div key={idx} className="p-6 bg-[#FAF7F2] rounded-2xl border border-stone-200">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-amber-800 font-bold block mb-2">
                    Virtue 0{idx + 1}
                  </span>
                  <h5 className="font-serif text-lg font-bold text-stone-900 mb-2">
                    {v.title}
                  </h5>
                  <p className="text-xs font-serif text-stone-700 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Crucial philosophical caveat */}
            <div className="mt-10 p-6 sm:p-8 bg-amber-50/80 rounded-2xl border border-amber-200 text-stone-800 text-center max-w-3xl mx-auto">
              <p className="font-serif text-base sm:text-lg font-semibold text-stone-900 leading-relaxed mb-2">
                Telos may never answer the deepest questions.
              </p>
              <p className="font-serif text-stone-700 text-sm sm:text-base leading-relaxed">
                That is not the goal. The goal is to help humanity explore them better than ever before.
                <br className="hidden sm:inline" />
                <span className="italic font-bold text-amber-950">
                  &ldquo;Perhaps the greatest discoveries begin not with answers, but with better questions.&rdquo;
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. THE MANIFESTO */}
        {/* ========================================================================= */}
        <div className="mt-20 sm:mt-28">
          <div className="relative p-10 sm:p-16 lg:p-20 bg-stone-950 text-stone-100 rounded-3xl border border-stone-800 overflow-hidden shadow-2xl">
            {/* Background ambient watermark */}
            <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 translate-x-1/4 translate-y-1/4 font-serif text-[180px] sm:text-[260px] font-bold text-white select-none">
              TELOS
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-700 text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                The Telos Manifesto
              </div>

              <div className="space-y-4 font-serif text-xl sm:text-2xl md:text-3xl text-stone-200 font-medium leading-snug">
                <p className="text-white font-bold">
                  &ldquo;We are not building an answer machine.
                </p>
                <p>
                  We are building a companion for curiosity.
                </p>
                <p>
                  We are studying the questions that have shaped human history.
                </p>
                <p className="text-amber-200">
                  We believe the future of intelligence is not certainty, but deeper inquiry.&rdquo;
                </p>
              </div>

              <div className="w-16 h-0.5 bg-amber-400/40 mx-auto" />

              <div className="space-y-2">
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Join us in mapping the questions of humanity.
                </h4>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-400">
                  TELOS — THE QUESTION ATLAS
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleScrollToHero}
                  className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm rounded-xl transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  Begin the Inquiry
                </button>

                {onOpenReflection && (
                  <button
                    onClick={onOpenReflection}
                    className="w-full sm:w-auto px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-semibold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Brain className="w-4 h-4 text-amber-400" />
                    Examine Your Intuitions
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
