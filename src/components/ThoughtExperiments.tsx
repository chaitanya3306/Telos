import React, { useState } from 'react';
import { THOUGHT_EXPERIMENTS, ThoughtExperiment } from '../data/philosophyData.ts';

export const ThoughtExperiments: React.FC = () => {
  const [selectedExperiment, setSelectedExperiment] = useState<ThoughtExperiment>(
    THOUGHT_EXPERIMENTS[0]
  );
  const [chosenOption, setChosenOption] = useState<'A' | 'B' | null>(null);

  const handleSelectExp = (exp: ThoughtExperiment) => {
    setSelectedExperiment(exp);
    setChosenOption(null);
  };

  return (
    <section id="experiments" className="py-16 border-b border-stone-200 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            Chapter IV · Thought Experiments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium mt-2">
            The Intuition Pumps
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            Philosophers use boundary scenarios to isolate our raw intuitions about consciousness, simulation, absurdity, and cosmic intention.
          </p>
        </div>

        {/* Experiment Selector Tabs */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {THOUGHT_EXPERIMENTS.map((exp) => {
            const isSelected = selectedExperiment.id === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => handleSelectExp(exp)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-sm'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400'
                }`}
              >
                <span className="text-xs font-mono tracking-widest block opacity-70 mb-1">
                  {exp.era}
                </span>
                <h3 className="font-serif text-lg font-semibold">{exp.title}</h3>
                <p className="text-xs opacity-80 mt-1">{exp.thinker}</p>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Card */}
        <div className="mt-8 bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="pb-6 border-b border-stone-200">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800">
                {selectedExperiment.thinker} · {selectedExperiment.era}
              </span>
            </div>
            <h3 className="font-serif text-3xl font-semibold text-stone-900 mt-1">
              {selectedExperiment.title}
            </h3>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
              The Scenario
            </h4>
            <p className="text-stone-800 text-base sm:text-lg leading-relaxed font-serif">
              "{selectedExperiment.premise}"
            </p>
          </div>

          {/* Interactive Choices */}
          <div className="mt-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-3">
              What Is Your Philosophical Choice?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setChosenOption('A')}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  chosenOption === 'A'
                    ? 'bg-stone-900 text-stone-50 border-stone-900 ring-2 ring-stone-900'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono tracking-wider uppercase opacity-75">
                    Choice A
                  </span>
                  {chosenOption === 'A' && (
                    <span className="text-xs font-bold text-amber-400">Selected</span>
                  )}
                </div>
                <h5 className="font-serif text-lg font-semibold">
                  {selectedExperiment.interactiveScenario.choiceA.label}
                </h5>
                <p className="text-xs opacity-80 mt-2 leading-relaxed">
                  Aligned with: {selectedExperiment.interactiveScenario.choiceA.positionAligned}
                </p>
              </button>

              <button
                onClick={() => setChosenOption('B')}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  chosenOption === 'B'
                    ? 'bg-stone-900 text-stone-50 border-stone-900 ring-2 ring-stone-900'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono tracking-wider uppercase opacity-75">
                    Choice B
                  </span>
                  {chosenOption === 'B' && (
                    <span className="text-xs font-bold text-amber-400">Selected</span>
                  )}
                </div>
                <h5 className="font-serif text-lg font-semibold">
                  {selectedExperiment.interactiveScenario.choiceB.label}
                </h5>
                <p className="text-xs opacity-80 mt-2 leading-relaxed">
                  Aligned with: {selectedExperiment.interactiveScenario.choiceB.positionAligned}
                </p>
              </button>
            </div>
          </div>

          {/* Feedback & Core Insight */}
          {chosenOption && (
            <div className="mt-8 p-6 bg-amber-50/50 rounded-xl border border-amber-200">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-semibold block mb-1">
                Philosophical Consequence of Your Choice:
              </span>
              <p className="text-sm text-stone-800 leading-relaxed font-serif">
                {chosenOption === 'A'
                  ? selectedExperiment.interactiveScenario.choiceA.philosophicalImplication
                  : selectedExperiment.interactiveScenario.choiceB.philosophicalImplication}
              </p>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-stone-200">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block mb-1">
              Enduring Philosophical Insight:
            </span>
            <p className="text-sm text-stone-600 italic font-serif">
              {selectedExperiment.coreInsight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
