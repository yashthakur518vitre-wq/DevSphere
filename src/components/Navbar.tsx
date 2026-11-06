import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, ArrowRight, ShieldCheck } from 'lucide-react';
import { NAV_LINKS } from '../data/navigation';

interface NavbarProps {
  onActionClick: (title: string, message: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onActionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to add slight backdrop blur and border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-devsphere-bg/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavLinkClick(e, '#hero')}
            className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
            aria-label="DevSphere Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-devsphere-bg rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                DevSphere
                <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  W1
                </span>
              </span>
              <span className="text-[11px] font-medium text-slate-400 tracking-wide hidden sm:block">
                Proof over claims
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call-to-Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              type="button"
              onClick={() => onActionClick('Developer Sign In', 'Authentication and OAuth (GitHub/GitLab) will be implemented in subsequent milestones.')}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors border border-white/5 hover:border-white/10 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => onActionClick('Get Started with DevSphere', 'Early onboarding and DevID handle reservation will launch as our profile foundation is connected.')}
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-md shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 flex items-center space-x-1.5 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-slate-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden border-b border-white/10 bg-devsphere-surface/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-fade-in"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onActionClick('Developer Sign In', 'Authentication and OAuth (GitHub/GitLab) will be connected in future milestones.');
              }}
              className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-medium text-slate-200 bg-devsphere-elevated border border-white/10 hover:bg-white/10 transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onActionClick('Get Started with DevSphere', 'Early onboarding and DevID handle reservation will launch as our profile foundation is connected.');
              }}
              className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Week 1 Milestone Preview</span>
          </div>
        </div>
      )}
    </header>
  );
};
