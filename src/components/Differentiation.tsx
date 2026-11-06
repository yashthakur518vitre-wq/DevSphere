import React from 'react';
import { DIFFERENTIATION_POINTS } from '../data/features';
import { Check, X, ShieldAlert, FileText, Cpu, ArrowRight } from 'lucide-react';

interface DifferentiationProps {
  onLearnMore: () => void;
}

export const Differentiation: React.FC<DifferentiationProps> = ({ onLearnMore }) => {
  return (
    <section 
      id="differentiation" 
      className="py-20 md:py-28 relative scroll-mt-16"
      aria-labelledby="differentiation-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span>The DevSphere Thesis</span>
          </div>

          <h2 
            id="differentiation-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            Don't Just Claim Your Skills. <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
              Prove Them.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The traditional tech hiring pipeline relies on unverified resume bullet points and keyword algorithms. DevSphere brings together coding evidence, project portfolios, developer activity, and professional identity.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-devsphere-surface overflow-hidden shadow-2xl">
          
          {/* Table Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
            <div className="p-5 sm:p-6 bg-rose-500/5 border-b md:border-b-0 md:border-r border-white/10 flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Traditional Resumes & Portals</h3>
                <p className="text-xs text-rose-300/80">Unverified claims, keyword spam & ATS filters</p>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-indigo-500/5 flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">The DevSphere Evidence Model</h3>
                <p className="text-xs text-indigo-300/80">Provable execution, Git diffs & live benchmarks</p>
              </div>
            </div>
          </div>

          {/* Table Comparison Rows */}
          <div className="divide-y divide-white/5">
            {DIFFERENTIATION_POINTS.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 hover:bg-white/[0.01] transition-colors">
                
                {/* Traditional Column */}
                <div className="p-5 sm:p-6 md:border-r border-white/5 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-full bg-rose-500/10 text-rose-400">
                      <X className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.aspect}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 pl-6 leading-relaxed">
                    {item.traditional}
                  </p>
                </div>

                {/* DevSphere Column */}
                <div className="p-5 sm:p-6 bg-indigo-500/[0.02] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-400">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
                      DevSphere Proof Approach
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 pl-6 leading-relaxed font-medium">
                    {item.devSphere}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Milestone Transparency Note */}
        <div className="max-w-4xl mx-auto mt-8 p-4 rounded-xl bg-devsphere-elevated/50 border border-white/5 flex items-start gap-3.5 text-xs text-slate-400">
          <ShieldAlert className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-slate-300">Engineering Transparency Notice:</span>
            <p>
              We do not claim that every skill is already automatically verified today. DevSphere is actively engineering automated sandboxing, compiler-based verification, and GitHub API bridges across our upcoming development milestones.
            </p>
          </div>
          <button
            type="button"
            onClick={onLearnMore}
            className="hidden sm:flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium whitespace-nowrap ml-auto"
          >
            <span>Manifesto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
