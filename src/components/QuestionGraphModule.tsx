import React, { useState } from 'react';
import { InquiryNode } from '../data/telosV2Data.ts';
import { simulateAssumptionStance } from '../utils/philosophyLogic.ts';
import {
  GitCommit,
  Layers,
  Compass,
  BookOpen,
  Check,
  X,
  ArrowRight
} from 'lucide-react';

interface QuestionGraphModuleProps {
  inquiry: InquiryNode;
  onSelectNeighbor: (questionText: string) => void;
  onSelectRelated: (questionText: string) => void;
}

export const QuestionGraphModule: React.FC<QuestionGraphModuleProps> = ({
  inquiry,
  onSelectNeighbor,
  onSelectRelated
}) => {
  const [selectedAssumptionId, setSelectedAssumptionId] = useState<string>(
    inquiry.sharedAssumptions[0]?.id || ''
  );
  const [isAssumptionAccepted, setIsAssumptionAccepted] = useState<boolean>(true);
  const [selectedClusterIdx, setSelectedClusterIdx] = useState<number>(0);

  const activeAssumption = inquiry.sharedAssumptions.find(
    a => a.id === selectedAssumptionId
  ) || inquiry.sharedAssumptions[0];

  const cascade = simulateAssumptionStance(
    inquiry,
    activeAssumption?.id || '',
    isAssumptionAccepted
  );

  const activeCluster = inquiry.philosophicalClusters[selectedClusterIdx] || inquiry.philosophicalClusters[0];

  return (
    <section id="question-graph" className="py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              Core V2 Architecture · The Semantic Topology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mt-1">
              Question Graph: "{inquiry.text}"
            </h2>
            <p className="mt-1 text-sm text-stone-600 max-w-2xl leading-relaxed">
              When you ask this inquiry, Telos maps its four structural axes: the questions it entails, the axioms it assumes, the neighbors it borders, and the philosophical clusters that interpret it.
            </p>
          </div>
          <span className="text-xs font-mono bg-stone-100 text-stone-700 px-3 py-1.5 rounded border border-stone-300">
            Category: {inquiry.category}
          </span>
        </div>

        {/* 4 Quadrants: Related Questions | Shared Assumptions | Neighbor Questions | Major Clusters */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Quadrant 1: RELATED QUESTIONS */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold mb-2">
                <GitCommit className="w-4 h-4" />
                <span>Axis I · Related Questions</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">
                Prerequisite & Associated Inquiries
              </h3>

              <div className="space-y-2.5">
                {inquiry.relatedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectRelated(q)}
                    className="w-full text-left p-3.5 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xl transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <span className="font-serif text-sm font-medium text-stone-800 group-hover:text-stone-950">
                      "{q}"
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-4 text-[11px] font-mono text-stone-400">
              *These questions must be examined in tandem to resolve the primary inquiry.
            </p>
          </div>

          {/* Quadrant 2: SHARED ASSUMPTIONS */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold mb-2">
              <Layers className="w-4 h-4" />
              <span>Axis II · Shared Assumptions</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
              Unstated Axioms in the Grammar
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Click an assumption to test its logical consequence when accepted or rejected.
            </p>

            {/* Assumptions Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {inquiry.sharedAssumptions.map((asm) => {
                const isSelected = (selectedAssumptionId || inquiry.sharedAssumptions[0]?.id) === asm.id;
                return (
                  <button
                    key={asm.id}
                    onClick={() => setSelectedAssumptionId(asm.id)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 text-white border-stone-900 font-semibold'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    "{asm.statement}"
                  </button>
                );
              })}
            </div>

            {/* Active Assumption Stress Test Container */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-200">
                <span className="text-xs font-mono uppercase text-stone-500 font-semibold">
                  Assumption Domain: {activeAssumption?.category}
                </span>
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-stone-200">
                  <button
                    onClick={() => setIsAssumptionAccepted(true)}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer flex items-center gap-1 ${
                      isAssumptionAccepted
                        ? 'bg-stone-900 text-white font-bold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    Accept
                  </button>
                  <button
                    onClick={() => setIsAssumptionAccepted(false)}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer flex items-center gap-1 ${
                      !isAssumptionAccepted
                        ? 'bg-stone-900 text-white font-bold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <X className="w-3 h-3" />
                    Reject
                  </button>
                </div>
              </div>

              <div className="mt-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-900 block font-semibold">
                  Consequence If {cascade.stance}:
                </span>
                <p className="mt-1 text-xs sm:text-sm font-serif text-stone-900 leading-relaxed bg-white p-3 rounded-lg border border-stone-200">
                  {cascade.consequence}
                </p>
                <p className="mt-2 text-[11px] text-stone-500 font-mono italic">
                  Hidden Enthymeme: {cascade.implicitEnthymeme}
                </p>
              </div>
            </div>
          </div>

          {/* Quadrant 3: NEIGHBOR QUESTIONS */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold mb-2">
                <Compass className="w-4 h-4" />
                <span>Axis III · Neighbor Questions</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">
                Topological Geodesic Neighbors
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {inquiry.neighborQuestions.map((nb, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectNeighbor(nb.text)}
                    className="p-3.5 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200 text-left transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-stone-400 mb-1">
                        <span>{nb.shiftType}</span>
                        <span className="tabular-nums">Δ {nb.distance}</span>
                      </div>
                      <h4 className="font-serif text-sm font-semibold text-stone-900 group-hover:text-stone-950">
                        "{nb.text}"
                      </h4>
                    </div>
                    <span className="mt-3 text-[11px] font-mono text-amber-900 font-semibold block">
                      Shift Focus →
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-4 text-[11px] font-mono text-stone-400">
              *Questions separated by minimal conceptual distance in semantic embedding space.
            </p>
          </div>

          {/* Quadrant 4: MAJOR PHILOSOPHICAL CLUSTERS */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-800 font-semibold mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Axis IV · Major Philosophical Clusters</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">
              Traditions Interpreting This Question
            </h3>

            {/* Cluster Selector Tabs */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {inquiry.philosophicalClusters.map((cluster, idx) => {
                const isSelected = selectedClusterIdx === idx;
                return (
                  <button
                    key={cluster.cluster}
                    onClick={() => setSelectedClusterIdx(idx)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-900 text-white border-stone-900 font-semibold shadow-2xs'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {cluster.cluster}
                  </button>
                );
              })}
            </div>

            {/* Active Cluster Body */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="flex items-baseline justify-between pb-2 border-b border-stone-200 text-xs">
                <span className="font-serif font-bold text-stone-900 text-sm">
                  {activeCluster.cluster}
                </span>
                <span className="font-mono text-stone-500 italic">
                  "{activeCluster.tagline}"
                </span>
              </div>
              <p className="mt-3 text-xs sm:text-sm font-serif text-stone-800 leading-relaxed">
                {activeCluster.stance}
              </p>
              <div className="mt-3 pt-3 border-t border-stone-200 text-xs font-mono text-stone-600 flex items-baseline justify-between">
                <span>Thinker: <strong>{activeCluster.thinker}</strong></span>
              </div>
              <blockquote className="mt-1 font-serif italic text-xs text-stone-600 border-l-2 border-stone-300 pl-2">
                "{activeCluster.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
