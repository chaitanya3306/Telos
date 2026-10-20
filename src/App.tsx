/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ATLAS_QUESTIONS, QuestionNode } from './data/questionAtlasData.ts';
import { findAtlasQuestion } from './utils/philosophyLogic.ts';
import { Navbar } from './components/Navbar.tsx';
import { QuestionAperture } from './components/QuestionAperture.tsx';
import { QuestionAtlasView } from './components/QuestionAtlasView.tsx';
import { TopologicalGraphCanvas } from './components/TopologicalGraphCanvas.tsx';
import { RootReductionsView } from './components/RootReductionsView.tsx';
import { AssumptionStackLab } from './components/AssumptionStackLab.tsx';
import { SearchModal } from './components/SearchModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('aperture');
  const [currentQuestion, setCurrentQuestion] = useState<QuestionNode>(ATLAS_QUESTIONS[0]);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedRootId, setSelectedRootId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qParam = params.get('q');
    if (qParam) {
      const match = findAtlasQuestion(qParam);
      setCurrentQuestion(match);
    }
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'aperture') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectQuestion = (q: QuestionNode) => {
    setCurrentQuestion(q);
    handleNavigate('aperture');
  };

  const handleSearchQuery = (queryText: string) => {
    const match = findAtlasQuestion(queryText);
    setCurrentQuestion(match);
    handleNavigate('atlas-view');
  };

  const handleSelectRoot = (rootId: string) => {
    setSelectedRootId(rootId);
    handleNavigate('root-knots');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FBF9F5] text-stone-900 selection:bg-amber-100 selection:text-stone-900">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      <main className="flex-1">
        <QuestionAperture
          currentQuestion={currentQuestion}
          onSelectQuestion={handleSelectQuestion}
          onSearchQuery={handleSearchQuery}
          onExploreGraph={() => handleNavigate('graph-canvas')}
        />

        <QuestionAtlasView
          question={currentQuestion}
          onSelectNeighbor={handleSearchQuery}
          onSelectRoot={handleSelectRoot}
        />

        <TopologicalGraphCanvas
          currentQuestion={currentQuestion}
          onSelectQuestion={handleSelectQuestion}
          onSelectRoot={handleSelectRoot}
        />

        <RootReductionsView
          onSelectQuestion={handleSelectQuestion}
          selectedRootId={selectedRootId}
        />

        <AssumptionStackLab />
      </main>

      <Footer />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectQuestion={handleSelectQuestion}
      />
    </div>
  );
}
