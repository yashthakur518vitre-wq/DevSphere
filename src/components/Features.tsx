import React from 'react';
import { Sparkles, Grid } from 'lucide-react';
import { PLATFORM_FEATURES } from '../data/features';
import { FeatureCard } from './FeatureCard';
import type { Feature } from '../types';

interface FeaturesProps {
  onFeatureSelect: (feature: Feature) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onFeatureSelect }) => {
  return (
    <section 
      id="features" 
      className="py-20 md:py-28 relative scroll-mt-16"
      aria-labelledby="features-heading"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Grid className="w-3.5 h-3.5 text-cyan-400" />
            <span>The DevSphere Ecosystem</span>
          </div>

          <h2 
            id="features-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            8 Core Modules. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-indigo-400 bg-clip-text text-transparent">
              One Unified Platform.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every module in DevSphere is engineered to solve a specific pain point in the modern developer journey — from practicing algorithms to proving engineering capability and landing meaningful opportunities.
          </p>
        </div>

        {/* 8 Feature Cards Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATFORM_FEATURES.map((feature) => (
            <FeatureCard 
              key={feature.id} 
              feature={feature} 
              onExplore={onFeatureSelect}
            />
          ))}
        </div>

        {/* Modular Ecosystem Note */}
        <div className="mt-12 p-4 rounded-xl bg-devsphere-surface/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400 flex-shrink-0" />
            <span>
              All modules are interconnected: your CodeArena rank directly enriches your DevID and alerts relevant recruiters in OpportunityHub.
            </span>
          </div>
          <span className="font-mono text-indigo-400 text-[11px] whitespace-nowrap">
            Architecture Blueprint v1.0
          </span>
        </div>

      </div>
    </section>
  );
};
