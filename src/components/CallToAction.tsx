import React from 'react';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

interface CallToActionProps {
  onGetStarted: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onGetStarted }) => {
  return (
    <section 
      id="cta"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-devsphere-surface to-devsphere-elevated border border-white/10 shadow-2xl shadow-indigo-950/60 text-center relative overflow-hidden">
          
          {/* Subtle Top Border Glow */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Join Early Builders</span>
          </div>

          {/* Main CTA Heading */}
          <h2 
            id="cta-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto mb-6"
          >
            Your next opportunity starts with your developer identity.
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
            Stop sending unread resumes. Claim your DevID, build verifiable evidence of your software engineering capabilities, and join the next generation of builders.
          </p>

          {/* Action Button & Terminal hint */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center space-x-2 group focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span>Get Started with DevSphere</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Command Prompt Graphic */}
          <div className="mt-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-500">$</span>
            <span className="text-slate-300">npx devsphere@latest init</span>
            <span className="text-indigo-400 text-[10px] uppercase font-bold tracking-wider ml-1">Coming Soon</span>
          </div>

        </div>
      </div>
    </section>
  );
};
