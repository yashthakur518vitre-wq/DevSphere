import React from 'react';
import { Code2, ShieldCheck } from 'lucide-react';
import { FOOTER_SECTIONS } from '../data/navigation';

interface FooterProps {
  onLegalClick: (title: string) => void;
}

const CURRENT_YEAR = 2026;

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {

  return (
    <footer 
      id="community"
      className="bg-devsphere-surface/80 border-t border-white/5 pt-16 pb-12 relative text-slate-400"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand & Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          
          {/* Brand Presentation Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <a 
              href="#hero" 
              className="flex items-center space-x-3 group focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
              aria-label="DevSphere Home"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5 shadow-md shadow-indigo-500/20">
                <div className="w-full h-full bg-devsphere-bg rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                DevSphere
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The developer-focused platform combining identity, skill proof, project showcases, and career opportunities. Built for engineering excellence and transparency.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <span className="text-xs font-mono text-slate-500">Milestone 01 • Frontend Foundation</span>
            </div>
          </div>

          {/* Links Columns (4 columns) */}
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#legal')) {
                          e.preventDefault();
                          onLegalClick(link.label);
                        }
                      }}
                      className="text-slate-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Tier: Disclaimer, Copyright & Status */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>
              DevSphere Milestone 01 • Built with React, TypeScript & Tailwind CSS
            </span>
          </div>

          <div>
            © {CURRENT_YEAR} DevSphere Inc. Concept & Architecture. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
};
