import React, { useState } from 'react';
import { ArrowRight, Terminal, CheckCircle2, GitCommit, Award, Sparkles, Layers, ShieldCheck, ChevronRight, Activity } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onExplore }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'code' | 'proof'>('profile');

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Value Proposition Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Developer Platform Powered by Proof over Claims</span>
            <span className="w-1 h-1 rounded-full bg-indigo-400" />
            <span className="text-slate-400">Milestone 01</span>
          </div>

          {/* Main Headline */}
          <h1 
            id="hero-heading" 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6"
          >
            Your Developer Journey. <br />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              One Identity.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-9">
            Build your developer identity, prove your skills, showcase your projects and connect with opportunities — all in one place.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onGetStarted}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-base shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all flex items-center justify-center space-x-2 group focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={onExplore}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-devsphere-surface hover:bg-devsphere-elevated text-slate-200 hover:text-white font-medium text-base border border-white/10 hover:border-white/20 transition-all flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Explore Platform</span>
            </button>
          </div>

          {/* Trust statement */}
          <div className="flex items-center justify-center gap-6 mt-8 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Cryptographic Identity</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GitCommit className="w-4 h-4 text-cyan-400" />
              <span>Verifiable Git Proof</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>Benchmark Testing</span>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup UI Preview */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-devsphere-surface/90 shadow-2xl shadow-indigo-950/50 backdrop-blur-md overflow-hidden">
            
            {/* Mockup Window Header */}
            <div className="px-4 py-3 bg-devsphere-elevated/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                  devsphere.network/identity/alex_chen
                </span>
              </div>

              {/* Explicit Label: Concept Mockup */}
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Concept Mockup Preview
                </span>
              </div>

              {/* Interactive Tabs within the Mockup */}
              <div className="flex items-center space-x-1 bg-black/30 p-1 rounded-lg border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('profile')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    activeTab === 'profile' 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  DevID View
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    activeTab === 'code' 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  CodeArena Test
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('proof')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    activeTab === 'proof' 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Verification Tree
                </button>
              </div>
            </div>

            {/* Mockup Window Body */}
            <div className="p-5 sm:p-8">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  {/* Profile Header Card */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-devsphere-elevated/50 border border-white/5">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5 flex-shrink-0">
                        <div className="w-full h-full bg-devsphere-surface rounded-[14px] flex items-center justify-center font-bold text-lg text-white">
                          AC
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-white">Alex Chen</h3>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Demo Identity
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-mono">@alex_chen.dev • Systems & Distributed Applications</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-medium">DevScore Rating (Demo)</span>
                        <span className="text-lg font-mono font-bold text-cyan-400">782 / 900</span>
                      </div>
                    </div>
                  </div>

                  {/* Grid showing sample evidence cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {/* Item 1: Verified Repository */}
                    <div className="p-4 rounded-xl bg-black/20 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 font-medium text-slate-300">
                          <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
                          distributed-kv-store
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">98% Verified</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">
                        Raft consensus engine with persistent WAL and zero uncommitted split-brain tests.
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-indigo-300">
                        <span className="px-1.5 py-0.5 rounded bg-indigo-500/10">Rust</span>
                        <span className="px-1.5 py-0.5 rounded bg-indigo-500/10">AsyncIO</span>
                      </div>
                    </div>

                    {/* Item 2: CodeArena Milestone */}
                    <div className="p-4 rounded-xl bg-black/20 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 font-medium text-slate-300">
                          <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                          CodeArena DSA Rank
                        </span>
                        <span className="text-[10px] font-mono text-indigo-400">Tier: Master</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">
                        142 algorithmic problems validated with automated boundary and stress testing.
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-cyan-300">
                        <span className="px-1.5 py-0.5 rounded bg-cyan-500/10">Top 4% Speed</span>
                        <span className="px-1.5 py-0.5 rounded bg-cyan-500/10">O(1) Space</span>
                      </div>
                    </div>

                    {/* Item 3: TeamUp Project Status */}
                    <div className="p-4 rounded-xl bg-black/20 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 font-medium text-slate-300">
                          <Award className="w-3.5 h-3.5 text-violet-400" />
                          Open for TeamUp
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">Active</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">
                        Looking for backend & frontend collaborators for upcoming Web3 / AI hackathons.
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-violet-300">
                        <span className="px-1.5 py-0.5 rounded bg-violet-500/10">3 Teammates Met</span>
                      </div>
                    </div>
                  </div>

                  {/* Activity Heatmap Mockup */}
                  <div className="p-4 rounded-xl bg-devsphere-elevated/40 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-300 font-medium">
                        <Activity className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Consistent Engineering Proof (Illustrative Visualization)</span>
                      </div>
                      <span className="text-[11px] text-slate-400">Sample Activity Heatmap</span>
                    </div>

                    <div className="grid grid-cols-12 sm:grid-cols-24 gap-1.5 pt-2">
                      {Array.from({ length: 48 }).map((_, i) => {
                        const level = (i * 7 + 3) % 5;
                        const colors = [
                          'bg-white/5',
                          'bg-indigo-950',
                          'bg-indigo-800',
                          'bg-indigo-600',
                          'bg-cyan-400'
                        ];
                        return (
                          <div
                            key={i}
                            className={`h-3 rounded-[2px] ${colors[level]} transition-transform hover:scale-125 cursor-default`}
                            title={`Sample day ${i + 1}`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'code' && (
                <div className="font-mono text-xs text-slate-300 bg-black/40 p-4 rounded-xl border border-white/5 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <span className="text-indigo-400 font-semibold">// CodeArena Automated Submission Benchmark</span>
                    <span className="text-emerald-400 text-[11px]">ALL 48 TEST CASES PASSED</span>
                  </div>
                  <pre className="text-slate-400 overflow-x-auto leading-relaxed">
{`function minSubArrayLen(target: number, nums: number[]): number {
  let minLen = Infinity;
  let left = 0;
  let currentSum = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];
    while (currentSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      currentSum -= nums[left++];
    }
  }
  return minLen === Infinity ? 0 : minLen;
}`}
                  </pre>
                  <div className="pt-2 flex flex-wrap gap-4 text-[11px] border-t border-white/5 text-slate-400">
                    <div>Runtime: <span className="text-cyan-400 font-semibold">58 ms (Beats 94.2%)</span></div>
                    <div>Memory: <span className="text-indigo-400 font-semibold">44.1 MB (O(1) Auxiliary)</span></div>
                    <div>Proof Hash: <span className="text-slate-500">0x7f8a...3b21</span></div>
                  </div>
                </div>
              )}

              {activeTab === 'proof' && (
                <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-3 text-xs text-slate-300">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    How Proof Verification Works in DevSphere
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    Unlike standard job boards where claims cannot be audited, DevSphere builds a multi-source evidence tree:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-devsphere-elevated border border-white/5">
                      <div className="font-semibold text-indigo-400 mb-1">1. Git Provenance</div>
                      <p className="text-[11px] text-slate-400">Analyses line authorship, test suites, and commit cadences directly from GitHub/GitLab.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-devsphere-elevated border border-white/5">
                      <div className="font-semibold text-cyan-400 mb-1">2. Runtime Sandbox</div>
                      <p className="text-[11px] text-slate-400">Validates DSA problem solving against hidden stress cases and time complexity thresholds.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-devsphere-elevated border border-white/5">
                      <div className="font-semibold text-violet-400 mb-1">3. Peer Endorsement</div>
                      <p className="text-[11px] text-slate-400">Teammate reviews and hackathon outcomes confirmed by verified co-collaborators.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mockup Window Footer */}
            <div className="px-5 py-3 bg-devsphere-elevated/40 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                DevSphere Identity Engine • Sandbox Active
              </span>
              <button
                type="button"
                onClick={onExplore}
                className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium"
              >
                <span>Browse Platform Modules</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
