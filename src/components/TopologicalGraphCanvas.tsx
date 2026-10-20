import React, { useState } from 'react';
import { QuestionNode, ATLAS_QUESTIONS } from '../data/questionAtlasData.ts';
import { Compass, ZoomIn, ZoomOut, RotateCcw, Info } from 'lucide-react';

interface TopologicalGraphCanvasProps {
  currentQuestion: QuestionNode;
  onSelectQuestion: (question: QuestionNode) => void;
  onSelectRoot: (rootId: string) => void;
}

interface GraphNode {
  id: string;
  label: string;
  type: 'TARGET_QUESTION' | 'ASSUMPTION' | 'NEIGHBOR' | 'ROOT' | 'SCIENCE' | 'TRADITION';
  x: number;
  y: number;
  radius: number;
  color: string;
  metadata: string;
}

export const TopologicalGraphCanvas: React.FC<TopologicalGraphCanvasProps> = ({
  currentQuestion,
  onSelectQuestion,
  onSelectRoot
}) => {
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Layout mathematical coordinates around center (cx = 450, cy = 280)
  const cx = 450;
  const cy = 280;

  const nodes: GraphNode[] = [
    // Center Node: Current Target Question
    {
      id: currentQuestion.id,
      label: currentQuestion.canonicalText,
      type: 'TARGET_QUESTION',
      x: cx,
      y: cy,
      radius: 36,
      color: '#1c1917', // stone-900
      metadata: `Target Inquiry · ${currentQuestion.category} · Teleological Depth: ${(currentQuestion.teleologicalDepth * 100).toFixed(0)}%`
    }
  ];

  // Concentric Orbit 1: Assumptions (Amber)
  currentQuestion.sharedAssumptions.forEach((asm, idx) => {
    const angle = (idx / currentQuestion.sharedAssumptions.length) * Math.PI - Math.PI / 2;
    const dist = 140;
    nodes.push({
      id: asm.id,
      label: asm.proposition.length > 30 ? asm.proposition.substring(0, 30) + '...' : asm.proposition,
      type: 'ASSUMPTION',
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist - 20,
      radius: 20,
      color: '#b45309', // amber-700
      metadata: `Shared Assumption [${asm.type}]: ${asm.proposition}`
    });
  });

  // Concentric Orbit 2: Neighboring Questions (Cyan / Sky)
  currentQuestion.neighboringQuestions.forEach((nb, idx) => {
    const angle = ((idx + 0.5) / currentQuestion.neighboringQuestions.length) * Math.PI + Math.PI / 2;
    const dist = 160;
    nodes.push({
      id: `nb-${idx}`,
      label: nb.text,
      type: 'NEIGHBOR',
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist,
      radius: 22,
      color: '#0369a1', // sky-700
      metadata: `Neighboring Query (${nb.shiftType}): "${nb.text}" (Δ ${nb.distanceDelta})`
    });
  });

  // Concentric Orbit 3: Root Question Candidates (Indigo)
  currentQuestion.rootQuestionCandidates.forEach((rc, idx) => {
    const angle = idx === 0 ? Math.PI : 0;
    const dist = 240;
    nodes.push({
      id: rc.rootId,
      label: rc.rootQuestion.length > 25 ? rc.rootQuestion.substring(0, 25) + '...' : rc.rootQuestion,
      type: 'ROOT',
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist * 0.7,
      radius: 26,
      color: '#4338ca', // indigo-700
      metadata: `Root Knot Candidate: "${rc.rootQuestion}" (Explanatory Power: ${rc.explanatoryPower}%)`
    });
  });

  // Orbit 4: Scientific Perspectives (Emerald)
  currentQuestion.scientificPerspectives.forEach((sci, idx) => {
    const angle = (idx + 1) * 1.8;
    const dist = 210;
    nodes.push({
      id: `sci-${idx}`,
      label: sci.discipline,
      type: 'SCIENCE',
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist * 0.85,
      radius: 18,
      color: '#15803d', // green-700
      metadata: `Scientific Lens: ${sci.discipline} · ${sci.framework} (${sci.keyTheorist})`
    });
  });

  const handleNodeClick = (node: GraphNode) => {
    if (node.type === 'NEIGHBOR') {
      const match = ATLAS_QUESTIONS.find(q => q.canonicalText.toLowerCase() === node.label.toLowerCase() || node.label.includes(q.canonicalText));
      if (match) onSelectQuestion(match);
    } else if (node.type === 'ROOT') {
      onSelectRoot(node.id);
    }
  };

  return (
    <section id="graph-canvas" className="py-16 border-b border-stone-200 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
              Interactive Topology · Hyperbolic Projection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium mt-1">
              Topological Question Constellation
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              Visualizing the semantic gravity well of the current inquiry. Radiating outward: unstated assumptions (amber), topological neighbors (sky), scientific lenses (emerald), and candidate root knots (indigo).
            </p>
          </div>

          {/* Canvas Controls */}
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-stone-200 shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setZoomLevel(prev => Math.min(1.4, prev + 0.1))}
              className="p-1.5 text-stone-600 hover:text-stone-950 rounded transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(prev => Math.max(0.7, prev - 0.1))}
              className="p-1.5 text-stone-600 hover:text-stone-950 rounded transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 text-stone-600 hover:text-stone-950 rounded transition-colors cursor-pointer"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-600">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-stone-900" />
            <span>Target Inquiry</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-700" />
            <span>Shared Assumptions</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-sky-700" />
            <span>Neighboring Questions</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-indigo-700" />
            <span>Candidate Root Knots</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-700" />
            <span>Scientific Perspectives</span>
          </div>
        </div>

        {/* Interactive SVG Canvas */}
        <div className="mt-6 bg-white border border-stone-300 rounded-2xl overflow-hidden shadow-xs relative">
          <svg
            viewBox="0 0 900 560"
            className="w-full h-[460px] sm:h-[540px] select-none"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
          >
            {/* Background concentric reference rings */}
            <circle cx={cx} cy={cy} r={140} fill="none" stroke="#e7e5e4" strokeWidth="1" strokeDasharray="4,4" />
            <circle cx={cx} cy={cy} r={210} fill="none" stroke="#e7e5e4" strokeWidth="1" strokeDasharray="4,4" />
            <circle cx={cx} cy={cy} r={260} fill="none" stroke="#e7e5e4" strokeWidth="1" strokeDasharray="4,4" />

            {/* Connecting Edges from Center to Peripheral Nodes */}
            {nodes.slice(1).map((node) => (
              <line
                key={`edge-${node.id}`}
                x1={cx}
                y1={cy}
                x2={node.x}
                y2={node.y}
                stroke={node.type === 'ROOT' ? '#a5b4fc' : '#d6d3d1'}
                strokeWidth={node.type === 'ROOT' ? 2 : 1.2}
                strokeDasharray={node.type === 'ROOT' ? 'none' : '3,3'}
              />
            ))}

            {/* Render Nodes */}
            {nodes.map((node) => {
              const isCenter = node.type === 'TARGET_QUESTION';
              const isHovered = hoveredNode?.id === node.id;
              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onMouseEnter={() => setHoveredNode(node)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => handleNodeClick(node)}
                  className="cursor-pointer transition-transform duration-200"
                >
                  {/* Outer glow ring on hover */}
                  {isHovered && (
                    <circle
                      r={node.radius + 6}
                      fill="none"
                      stroke={node.color}
                      strokeWidth="2"
                      opacity="0.6"
                    />
                  )}

                  {/* Primary Node Body */}
                  <circle
                    r={node.radius}
                    fill={node.color}
                    className="transition-all"
                  />

                  {/* Text Label */}
                  <text
                    y={node.radius + 14}
                    textAnchor="middle"
                    className="font-sans text-[11px] font-medium fill-stone-700 pointer-events-none"
                  >
                    {node.label.length > 20 ? node.label.substring(0, 18) + '...' : node.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Active Hover Inspector Drawer */}
          {hoveredNode && (
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 bg-stone-900/95 text-stone-100 p-4 rounded-xl shadow-xl border border-stone-700 backdrop-blur-md transition-all text-xs">
              <div className="flex items-center gap-2 text-stone-400 font-mono text-[10px] uppercase">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                <span>Node Inspector · {hoveredNode.type}</span>
              </div>
              <h4 className="font-serif text-sm font-bold text-white mt-1">
                {hoveredNode.label}
              </h4>
              <p className="mt-1 text-stone-300 font-mono text-[11px] leading-relaxed">
                {hoveredNode.metadata}
              </p>
              {hoveredNode.type === 'NEIGHBOR' && (
                <span className="text-[10px] text-amber-300 font-mono block mt-2">
                  Click to re-center Question Atlas on this inquiry →
                </span>
              )}
              {hoveredNode.type === 'ROOT' && (
                <span className="text-[10px] text-indigo-300 font-mono block mt-2">
                  Click to view Root Knot deconstruction →
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
