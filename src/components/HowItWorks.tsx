import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/features';
import { ShieldCheck, GitPullRequest, Code, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStepClick: (stepTitle: string) => void;
}

const STEP_ICONS = [
  ShieldCheck,
  GitPullRequest,
  Code,
  Briefcase
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStepClick }) => {
  return (
    <section 
      id="how-it-works" 
      className="py-20 md:py-28 relative scroll-mt-16 bg-devsphere-surface/30 border-y border-white/5"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Structured Progression</span>
          </div>

          <h2 
            id="how-it-works-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            How DevSphere Works
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From your first registered handle to landing your dream engineering role — a verifiable 4-step pipeline designed to let your code speak for you.
          </p>
        </div>

        {/* 4-Step Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const IconComponent = STEP_ICONS[index] || ShieldCheck;
            
            return (
              <div 
                key={item.step}
                className="relative group p-6 rounded-2xl bg-devsphere-surface border border-white/5 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Number & Icon Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-devsphere-elevated border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-mono font-extrabold text-slate-600 group-hover:text-emerald-400/50 transition-colors">
                      0{item.step}
                    </span>
                  </div>

                  {/* Step Tag */}
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-white/5 text-slate-400 border border-white/5 mb-3">
                    {item.badge}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-200 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Proof Evidence Callout */}
                <div className="pt-4 border-t border-white/5">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1">
                    Verifiable Artifact:
                  </div>
                  <div className="text-xs font-mono text-emerald-400 bg-emerald-500/5 p-2 rounded border border-emerald-500/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="truncate">{item.proofEvidence}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onStepClick(item.title)}
                    className="mt-3 text-xs text-slate-400 hover:text-emerald-300 flex items-center gap-1 font-medium focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-0.5"
                  >
                    <span>View step specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
