import React from 'react';
import { InquiryNode } from '../data/telosV2Data.ts';
import { Compass, Sparkles, ArrowDown } from 'lucide-react';

interface ProvocativeLandingHeroProps {
  onSelectInquiry: (queryText: string) => void;
  onExploreCuriosityMap: () => void;
  onBeginReflection: () => void;
}

export const ProvocativeLandingHero: React.FC<ProvocativeLandingHeroProps> = ({
  onSelectInquiry,
  onExploreCuriosityMap,
  onBeginReflection
}) => {
  return (
    <section id="hero" className="relative pt-10 pb-20 border-b border-stone-200 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Curatorial Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-300 text-xs text-stone-500 font-mono tracking-widest uppercase">
          <span>Telos Epistemic Systems · V2</span>
          <span>The Cartography of Human Curiosity</span>
          <span>Inquiry Index No. 001</span>
        </div>

        {/* The 3 Primordial Questions (Before introducing any feature) */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-4">
            Before Any Answers, Confront The Silence
          </span>

          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-tight leading-[1.18] text-balance">
              Why do I exist?
            </h1>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-tight leading-[1.18] text-balance">
              Why am I conscious?
            </h1>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-tight leading-[1.18] text-balance">
              Why do humans search for meaning?
            </h1>
          </div>

          <p className="mt-8 text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-serif italic">
            For three hundred thousand years, every human civilization has stood under the same night sky, asking the same unanswerable questions. What if the questions themselves contain a hidden geometry?
          </p>
        </div>

        {/* 2-Column Split: Editorial Contemplation & Museum Fine Art */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold block mb-2">
                The Core Premise
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                Not a Chatbot. A Question Atlas.
              </h2>
              <p className="mt-3 text-stone-700 text-base leading-relaxed">
                Most artificial intelligence is designed to give you quick, flattened answers. Telos does the opposite: <strong>it maps your questions</strong>. It unearths the silent assumptions buried in your grammar, traces how your wonder connects to ancient civilizations, and reveals how your questions evolve into deeper metaphysical knots.
              </p>

              {/* Instant Inquiry Primers */}
              <div className="mt-6 pt-6 border-t border-stone-100">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-3">
                  Begin by exploring a foundational question:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => onSelectInquiry('Why do humans exist?')}
                    className="px-3.5 py-2 text-xs font-serif bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-800 rounded-lg border border-stone-300 transition-all cursor-pointer"
                  >
                    "Why do humans exist?"
                  </button>
                  <button
                    onClick={() => onSelectInquiry('What is consciousness?')}
                    className="px-3.5 py-2 text-xs font-serif bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-800 rounded-lg border border-stone-300 transition-all cursor-pointer"
                  >
                    "What is consciousness?"
                  </button>
                  <button
                    onClick={() => onSelectInquiry('Do we have free will?')}
                    className="px-3.5 py-2 text-xs font-serif bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-800 rounded-lg border border-stone-300 transition-all cursor-pointer"
                  >
                    "Do we have free will?"
                  </button>
                  <button
                    onClick={() => onSelectInquiry('Why is there something rather than nothing?')}
                    className="px-3.5 py-2 text-xs font-serif bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-800 rounded-lg border border-stone-300 transition-all cursor-pointer"
                  >
                    "Why is there something rather than nothing?"
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreCuriosityMap}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-wider font-semibold rounded-lg transition-all cursor-pointer shadow-xs flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-amber-400" />
                  Explore Curiosity Map
                </button>
                <button
                  onClick={onBeginReflection}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs uppercase tracking-wider font-semibold rounded-lg border border-stone-300 transition-all cursor-pointer"
                >
                  Reflect on Intuitions
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Fine Art Artwork */}
          <div className="lg:col-span-5">
            <div className="bg-stone-100 p-3 rounded-2xl border border-stone-300 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-200">
                <img
                  src="/src/assets/images/hero_inquiry_cosmos_1792484858148.jpg"
                  alt="Colonnade overlooking celestial cosmos"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 px-1 text-xs">
                <div className="flex items-center justify-between font-mono text-stone-500">
                  <span>Fig. I · The Contemplative Horizon</span>
                  <span>Celestial Inscription</span>
                </div>
                <p className="mt-1 font-serif italic text-stone-600">
                  "To ask why is the distinguishing ache of consciousness." — Telos Observatory
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
