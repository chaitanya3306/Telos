import React from 'react';
import { CLOSEST_QUESTIONS, RELATED_QUESTIONS } from '../data/philosophyData.ts';

interface HeroInquiryProps {
  onSelectQuestion: (questionText: string) => void;
  onExploreAssumptions: () => void;
}

export const HeroInquiry: React.FC<HeroInquiryProps> = ({
  onSelectQuestion,
  onExploreAssumptions
}) => {
  return (
    <section className="relative pt-10 pb-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Curatorial Header Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-300 text-xs text-stone-500 font-mono tracking-widest uppercase">
          <span>Tome I · The Architecture of Being & Purpose</span>
          <span>Inquiry No. 042</span>
          <span>Updated Autumn 2026</span>
        </div>

        {/* 2-Column Split: Editorial Prose & Fine Art Artwork */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-medium leading-[1.15] text-balance">
              The Question Beneath All Questions
            </h1>
            <p className="mt-4 text-xs font-mono uppercase tracking-widest text-amber-800">
              Deconstructing teleology, consciousness, and the search for purpose
            </p>

            <div className="mt-6 text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900">
                To ask <em className="italic font-serif">"Why am I here?"</em> is not merely to request a biological origin or a causal history. It is a demand for justification. It asks whether human consciousness is an intended assignment in a purposeful cosmos, or a solitary flame lit in an indifferent void.
              </p>
              <p className="mt-4 text-stone-600 text-base">
                Behind this simple question lie silent metaphysical structures: the tacit assumption that existence possesses a built-in purpose, and the epistemic faith that human minds are capable of unearthing it.
              </p>
            </div>

            {/* Core Questions Quick Selector */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <p className="text-xs uppercase font-mono tracking-wider text-stone-500 mb-3">
                Investigate Foundational Inquiries:
              </p>
              <div className="flex flex-wrap gap-2">
                {CLOSEST_QUESTIONS.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => onSelectQuestion(q.question)}
                    className="px-3.5 py-2 text-sm bg-stone-100 hover:bg-stone-200 text-stone-900 rounded-md border border-stone-300 transition-colors text-left font-serif cursor-pointer"
                  >
                    "{q.question}"
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreAssumptions}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-50 text-xs uppercase tracking-wider font-semibold rounded-md transition-all cursor-pointer shadow-xs"
              >
                Examine Hidden Assumptions →
              </button>
              <span className="text-xs text-stone-500">
                Revealing 2 tacit premises behind human teleology
              </span>
            </div>
          </div>

          {/* Right column: Fine art museum presentation */}
          <div className="lg:col-span-5">
            <div className="bg-stone-100 p-3 rounded-lg border border-stone-300 shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden rounded bg-stone-200">
                <img
                  src="/src/assets/images/hero_inquiry_cosmos_1792484858148.jpg"
                  alt="Fine art painting of a classical colonnade looking into a starry night sky"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 px-1">
                <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>Fig. 1 · The Observational Colonnade</span>
                  <span>Limestone & Celestial Void</span>
                </div>
                <p className="text-xs text-stone-600 mt-1 italic font-serif">
                  "The universe is under no obligation to make sense to you." — Facing the cosmic quietude through philosophical inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Operational / Axiomatic Ribbon */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-stone-200">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400">01. Ontological Domain</span>
            <h3 className="font-serif text-lg font-semibold text-stone-900">Teleology vs. Facticity</h3>
            <p className="text-sm text-stone-600">Does human existence possess an intrinsic design (telos), or is reality neutral matter upon which we project purpose?</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400">02. Epistemic Tension</span>
            <h3 className="font-serif text-lg font-semibold text-stone-900">Discovery vs. Construction</h3>
            <p className="text-sm text-stone-600">Is meaning an objective truth waiting to be uncovered, or a creative human artifact constructed through authentic action?</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400">03. The Aperture</span>
            <h3 className="font-serif text-lg font-semibold text-stone-900">Consciousness as Witness</h3>
            <p className="text-sm text-stone-600">Subjective experience is the sole crucible wherein value, suffering, and significance come into being.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
