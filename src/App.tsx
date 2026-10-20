/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { CURIOSITY_INQUIRIES, InquiryNode } from './data/telosV2Data.ts';
import { findInquiryNode } from './utils/philosophyLogic.ts';
import { Navbar } from './components/Navbar.tsx';
import { ProvocativeLandingHero } from './components/ProvocativeLandingHero.tsx';
import { QuestionGraphModule } from './components/QuestionGraphModule.tsx';
import { WhyQuestionMatters } from './components/WhyQuestionMatters.tsx';
import { QuestionEvolution } from './components/QuestionEvolution.tsx';
import { HumanityCuriosityMap } from './components/HumanityCuriosityMap.tsx';
import { VisionManifesto } from './components/VisionManifesto.tsx';
import { SocraticReflectionModal } from './components/SocraticReflectionModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentInquiry, setCurrentInquiry] = useState<InquiryNode>(CURIOSITY_INQUIRIES[0]);
  const [reflectionModalOpen, setReflectionModalOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const qParam = params.get('q');
    if (qParam) {
      const match = findInquiryNode(qParam);
      setCurrentInquiry(match);
    }
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectInquiryByText = (text: string) => {
    const match = findInquiryNode(text);
    setCurrentInquiry(match);
    handleNavigate('question-graph');
  };

  const handleSelectInquiryNode = (node: InquiryNode) => {
    setCurrentInquiry(node);
    handleNavigate('question-graph');
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FBF9F5] text-stone-900 selection:bg-amber-100 selection:text-stone-900">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenReflection={() => setReflectionModalOpen(true)}
      />

      <main className="flex-1">
        <ProvocativeLandingHero
          onSelectInquiry={handleSelectInquiryByText}
          onExploreCuriosityMap={() => handleNavigate('curiosity-map')}
          onBeginReflection={() => setReflectionModalOpen(true)}
        />

        <QuestionGraphModule
          inquiry={currentInquiry}
          onSelectNeighbor={handleSelectInquiryByText}
          onSelectRelated={handleSelectInquiryByText}
        />

        <WhyQuestionMatters
          inquiry={currentInquiry}
          onSelectConnectedQuestion={handleSelectInquiryByText}
        />

        <QuestionEvolution
          inquiry={currentInquiry}
          onSelectEvolutionQuestion={handleSelectInquiryByText}
        />

        <HumanityCuriosityMap
          currentInquiryId={currentInquiry.id}
          onSelectInquiry={handleSelectInquiryNode}
        />

        <VisionManifesto
          onSelectInquiry={handleSelectInquiryByText}
          onOpenReflection={() => setReflectionModalOpen(true)}
        />
      </main>

      <Footer />

      <SocraticReflectionModal
        isOpen={reflectionModalOpen}
        onClose={() => setReflectionModalOpen(false)}
      />
    </div>
  );
}
