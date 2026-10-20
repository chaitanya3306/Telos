import React, { useState } from 'react';
import { CURIOSITY_INQUIRIES, CURIOSITY_GRAPH_EDGES, InquiryNode } from '../data/telosV2Data.ts';
import { Compass, ZoomIn, ZoomOut, RotateCcw, Filter, ArrowUpRight } from 'lucide-react';

interface HumanityCuriosityMapProps {
  currentInquiryId: string;
  onSelectInquiry: (inquiry: InquiryNode) => void;
}

export const HumanityCuriosityMap: React.FC<HumanityCuriosityMapProps> = ({
  currentInquiryId,
  onSelectInquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const categories = ['All', 'Teleology', 'Consciousness', 'Agency', 'Existence'];

  // Coordinates for the 4 core nodes in an aesthetic circular / diamond geometry
  const nodeCoordinates: Record<string, { x: number; y: number; color: string }> = {
    'why-do-humans-exist': { x: 450, y: 120, color: '#b45309' }, // Teleology (Amber)
    'what-is-consciousness': { x: 700, y: 300, color: '#1e3a8a' }, // Consciousness (Indigo/Blue)
    'do-we-have-free-will': { x: 450, y: 470, color: '#15803d' }, // Agency (Green)
    'why-is-there-something-rather-than-nothing': { x: 200, y: 300, color: '#701a75' } // Existence (Purple)
  };

  const filteredInquiries = selectedCategory === 'All'
    ? CURIOSITY_INQUIRIES
    : CURIOSITY_INQUIRIES.filter(q => q.category === selectedCategory);

  const hoveredInquiry = CURIOSITY_INQUIRIES.find(q => q.id === hoveredNodeId);

  return (
    <section id="curiosity-map" className="py-16 border-b border-stone-200 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              Global Topological Network
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-bold mt-1">
              Humanity's Curiosity Map
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              Questions become nodes; conceptual dependencies become edges. Navigate the macro-topology of human wonder.
            </p>
          </div>

          {/* Controls & Filter */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-stone-200 text-xs font-mono">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-stone-900 text-white font-bold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-stone-200">
              <button
                onClick={() => setZoomLevel(prev => Math.min(1.3, prev + 0.1))}
                className="p-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(prev => Math.max(0.7, prev - 0.1))}
                className="p-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Graph Canvas */}
        <div className="mt-8 bg-white border border-stone-300 rounded-2xl overflow-hidden shadow-xs relative">
          <svg
            viewBox="0 0 900 580"
            className="w-full h-[480px] sm:h-[560px] select-none"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
          >
            {/* Background geometric grid */}
            <circle cx={450} cy={300} r={230} fill="none" stroke="#f0eeea" strokeWidth="1" strokeDasharray="6,6" />
            <circle cx={450} cy={300} r={140} fill="none" stroke="#f0eeea" strokeWidth="1" strokeDasharray="6,6" />

            {/* Edge Connections */}
            {CURIOSITY_GRAPH_EDGES.map((edge, idx) => {
              const srcCoord = nodeCoordinates[edge.source];
              const tgtCoord = nodeCoordinates[edge.target];
              if (!srcCoord || !tgtCoord) return null;

              const isHighlighted = hoveredNodeId === edge.source || hoveredNodeId === edge.target;

              return (
                <g key={idx}>
                  <line
                    x1={srcCoord.x}
                    y1={srcCoord.y}
                    x2={tgtCoord.x}
                    y2={tgtCoord.y}
                    stroke={isHighlighted ? '#b45309' : '#d6d3d1'}
                    strokeWidth={isHighlighted ? 2.5 : 1.5}
                    strokeDasharray={edge.relationship === 'TENSION_WITH' ? '4,4' : 'none'}
                    className="transition-colors duration-200"
                  />
                  {/* Midpoint relation label */}
                  <text
                    x={(srcCoord.x + tgtCoord.x) / 2}
                    y={(srcCoord.y + tgtCoord.y) / 2 - 6}
                    textAnchor="middle"
                    className="font-mono text-[9px] fill-stone-400 uppercase pointer-events-none"
                  >
                    {edge.relationship.replace('_', ' ')}
                  </text>
                </g>
              );
            })}

            {/* Render Question Nodes */}
            {CURIOSITY_INQUIRIES.map((node) => {
              const coords = nodeCoordinates[node.id] || { x: 450, y: 300, color: '#1c1917' };
              const isSelected = currentInquiryId === node.id;
              const isHovered = hoveredNodeId === node.id;
              const isDimmed = selectedCategory !== 'All' && node.category !== selectedCategory;

              return (
                <g
                  key={node.id}
                  transform={`translate(${coords.x}, ${coords.y})`}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => onSelectInquiry(node)}
                  className={`cursor-pointer transition-opacity duration-200 ${isDimmed ? 'opacity-30' : 'opacity-100'}`}
                >
                  {/* Highlight ring */}
                  {(isHovered || isSelected) && (
                    <circle
                      r={42}
                      fill="none"
                      stroke={coords.color}
                      strokeWidth="2.5"
                      strokeDasharray={isSelected ? 'none' : '3,3'}
                    />
                  )}

                  {/* Primary Node Body */}
                  <circle
                    r={32}
                    fill={coords.color}
                    className="transition-transform duration-200 hover:scale-105 shadow-md"
                  />

                  {/* Classical Philosophical Glyph */}
                  <text
                    y={6}
                    textAnchor="middle"
                    className="font-serif text-white text-lg font-bold pointer-events-none select-none"
                  >
                    {node.category === 'Teleology' ? 'Ω' : node.category === 'Consciousness' ? 'Ψ' : node.category === 'Agency' ? 'Δ' : 'Φ'}
                  </text>

                  {/* Node Label */}
                  <text
                    y={50}
                    textAnchor="middle"
                    className="font-serif text-xs font-bold fill-stone-900 pointer-events-none"
                  >
                    "{node.text}"
                  </text>
                  <text
                    y={66}
                    textAnchor="middle"
                    className="font-mono text-[10px] fill-stone-500 uppercase pointer-events-none"
                  >
                    {node.category}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Active Hover / Inspector Panel */}
          {hoveredInquiry && (
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 bg-stone-900/95 text-white p-5 rounded-xl border border-stone-700 shadow-xl backdrop-blur-md text-xs">
              <div className="flex items-center justify-between text-stone-400 font-mono text-[10px] uppercase">
                <span>{hoveredInquiry.category} · Inquiry Node</span>
                <span className="text-amber-400 font-bold">Curiosity Index: {hoveredInquiry.curiosityRating}%</span>
              </div>
              <h4 className="font-serif text-base font-bold text-white mt-1">
                "{hoveredInquiry.text}"
              </h4>
              <p className="mt-1.5 text-stone-300 font-serif leading-relaxed line-clamp-3">
                {hoveredInquiry.summary}
              </p>
              <div className="mt-3 pt-3 border-t border-stone-800 flex items-center justify-between">
                <span className="text-stone-400 font-mono text-[10px]">
                  {hoveredInquiry.relatedQuestions.length} Connected Branches
                </span>
                <button
                  onClick={() => onSelectInquiry(hoveredInquiry)}
                  className="text-amber-300 hover:text-white font-mono font-semibold flex items-center gap-1 cursor-pointer"
                >
                  Inspect in Atlas <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
