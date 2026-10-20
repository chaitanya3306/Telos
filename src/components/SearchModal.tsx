import React, { useState } from 'react';
import { ATLAS_QUESTIONS, QuestionNode } from '../data/questionAtlasData.ts';
import { searchAtlas } from '../utils/philosophyLogic.ts';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectQuestion: (question: QuestionNode) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectQuestion
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const results = searchAtlas(searchTerm);

  const handleSelect = (q: QuestionNode) => {
    onSelectQuestion(q);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FBF9F5] w-full max-w-2xl rounded-2xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-4 bg-white border-b border-stone-200 flex items-center justify-between gap-3">
          <div className="flex-1 flex items-center gap-2">
            <Search className="w-5 h-5 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search inquiries, assumptions, or concepts..."
              autoFocus
              className="w-full text-sm sm:text-base bg-transparent focus:outline-none text-stone-900 placeholder:text-stone-400 font-sans"
            />
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          <span className="text-xs font-mono text-stone-400 uppercase tracking-wider block mb-2 px-2">
            {results.length} Mapped Inquiries
          </span>

          {results.map((q) => (
            <button
              key={q.id}
              onClick={() => handleSelect(q)}
              className="w-full text-left p-3.5 rounded-xl border border-stone-200 hover:border-stone-400 bg-white hover:bg-stone-50 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono text-amber-800 uppercase tracking-wider block mb-0.5">
                  {q.category} · Operator: {q.interrogativeOperator.toUpperCase()}
                </span>
                <h4 className="font-serif text-base font-semibold text-stone-900 group-hover:text-stone-950">
                  "{q.canonicalText}"
                </h4>
                <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">
                  {q.summaryDescription}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors shrink-0 ml-3" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
