import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { Differentiation } from '../components/Differentiation';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';
import type { Feature, ModalState } from '../types';

export const Home: React.FC = () => {
  // Simple, standard React useState for modal interactivity (No Redux/Zustand as instructed)
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: '',
    message: ''
  });

  const openModal = (title: string, message: string, featureName?: string) => {
    setModalState({
      isOpen: true,
      title,
      message,
      featureName
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleExplorePlatform = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFeatureSelect = (feature: Feature) => {
    openModal(
      `${feature.name} (${feature.tagline})`,
      `${feature.description}\n\nThis module is part of the DevSphere core roadmap. In subsequent milestones, you will be able to interact with live test environments, automated code evaluation, and linked profiles for ${feature.name}.`,
      feature.name
    );
  };

  const handleStepClick = (stepTitle: string) => {
    openModal(
      stepTitle,
      `You selected "${stepTitle}". As we build out future milestones, this step will feature full workflow automation, verification pipelines, and account onboarding.`
    );
  };

  const handleLegalClick = (docName: string) => {
    openModal(
      docName,
      `This is a placeholder for ${docName}. DevSphere will introduce comprehensive terms, privacy guidelines, and developer honor codes as account creation and database integrations arrive in later milestones.`
    );
  };

  return (
    <div className="min-h-screen bg-devsphere-bg text-devsphere-text flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-200">
      
      {/* Navigation Header */}
      <Navbar 
        onActionClick={(title, message) => openModal(title, message)} 
      />

      {/* Main Landing Content */}
      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <Hero 
          onGetStarted={() => openModal('Claim your DevID Early', 'Early access onboarding will open as soon as our authentication and user profile systems land in Week 2/3. Stay tuned!')}
          onExplore={handleExplorePlatform}
        />

        {/* 2. Features Grid (8 Modules) */}
        <Features 
          onFeatureSelect={handleFeatureSelect} 
        />

        {/* 3. How It Works (4-Step Progression) */}
        <HowItWorks 
          onStepClick={handleStepClick}
        />

        {/* 4. Differentiation (Proof over Claims) */}
        <Differentiation 
          onLearnMore={() => openModal('The Proof-over-Claims Manifesto', 'DevSphere is founded on the principle that real code commits, algorithmic test runs, and collaborative contributions are far more valuable than unverified resume buzzwords.')}
        />

        {/* 5. Call to Action */}
        <CallToAction 
          onGetStarted={() => openModal('Join the DevSphere Early Waitlist', 'Thank you for your interest! Week 1 is establishing our design system and landing experience. Onboarding workflows begin in upcoming milestones.')}
        />

      </main>

      {/* Footer */}
      <Footer 
        onLegalClick={handleLegalClick}
      />

      {/* Accessible Interactive Modal */}
      <Modal 
        modalState={modalState} 
        onClose={closeModal} 
      />

    </div>
  );
};
