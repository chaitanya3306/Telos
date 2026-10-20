/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroInquiry } from './components/HeroInquiry.tsx';
import { QuestionsExplorer } from './components/QuestionsExplorer.tsx';
import { HiddenAssumptionsLab } from './components/HiddenAssumptionsLab.tsx';
import { MajorPositionsMatrix } from './components/MajorPositionsMatrix.tsx';
import { ThoughtExperiments } from './components/ThoughtExperiments.tsx';
import { DialecticWorkbench } from './components/DialecticWorkbench.tsx';
import { SocraticCompass } from './components/SocraticCompass.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [compassOpen, setCompassOpen] = useState(false);
  const [workbenchQuery, setWorkbenchQuery] = useState('Why am I here?');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('compass') === '1') {
      setCompassOpen(true);
    }
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectQuestionForWorkbench = (questionText: string) => {
    setWorkbenchQuery(questionText);
    const workbenchEl = document.getElementById('workbench');
    if (workbenchEl) {
      workbenchEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FBF9F5] text-stone-900 selection:bg-amber-100">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCompass={() => setCompassOpen(true)}
      />

      <main className="flex-1">
        <div id="overview">
          <HeroInquiry
            onSelectQuestion={handleSelectQuestionForWorkbench}
            onExploreAssumptions={() => handleNavigate('assumptions')}
          />
        </div>

        <QuestionsExplorer
          onSelectForWorkbench={handleSelectQuestionForWorkbench}
        />

        <HiddenAssumptionsLab />

        <MajorPositionsMatrix />

        <ThoughtExperiments />

        <DialecticWorkbench initialQuery={workbenchQuery} />
      </main>

      <Footer />

      <SocraticCompass
        isOpen={compassOpen}
        onClose={() => setCompassOpen(false)}
      />
    </div>
  );
}
