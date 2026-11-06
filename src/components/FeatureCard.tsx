import React from 'react';
import { 
  UserCheck, 
  Code2, 
  GitFork, 
  Users, 
  UserPlus, 
  Briefcase, 
  BarChart3, 
  Sparkles, 
  ArrowUpRight
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
  onExplore: (feature: Feature) => void;
}

// Icon dictionary mapping icon strings to typed Lucide components
const ICON_MAP: Record<Feature['iconName'], LucideIcon> = {
  UserCheck,
  Code2,
  GitFork,
  Users,
  UserPlus,
  Briefcase,
  BarChart3,
  Sparkles
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onExplore }) => {
  const IconComponent = ICON_MAP[feature.iconName] || Code2;

  return (
    <div 
      className="group relative p-6 rounded-2xl bg-devsphere-surface/60 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 flex flex-col justify-between"
      role="article"
      aria-labelledby={`feature-${feature.id}-title`}
    >
      {/* Background Gradient on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.highlightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

      <div className="relative z-10 space-y-4">
        
        {/* Header: Icon & Category Badge */}
        <div className="flex items-center justify-between">
          <div className="p-3 rounded-xl bg-devsphere-elevated border border-white/10 group-hover:border-indigo-500/30 text-indigo-400 group-hover:text-cyan-300 transition-colors">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-white/5 text-slate-400 border border-white/5">
            {feature.badge}
          </span>
        </div>

        {/* Feature Identity & Tagline */}
        <div>
          <h3 
            id={`feature-${feature.id}-title`}
            className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors"
          >
            {feature.name}
          </h3>
          <p className="text-xs font-medium text-indigo-400/90 mt-0.5">
            {feature.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed">
          {feature.description}
        </p>

      </div>

      {/* Card Action Link */}
      <div className="relative z-10 pt-5 mt-2 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-indigo-300 transition-colors">
        <button
          type="button"
          onClick={() => onExplore(feature)}
          className="flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded p-1"
          aria-label={`Learn more about ${feature.name}`}
        >
          <span>Explore Module</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
        <span className="text-[10px] font-mono text-slate-500">M01 Preview</span>
      </div>

    </div>
  );
};
