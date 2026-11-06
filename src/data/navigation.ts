import type { NavItem } from '../types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why DevSphere', href: '#differentiation' },
  { label: 'Community', href: '#community' }
];

export const FOOTER_SECTIONS = [
  {
    title: 'Platform Modules',
    links: [
      { label: 'DevID Profile', href: '#features' },
      { label: 'CodeArena Challenges', href: '#features' },
      { label: 'CodeHub Showcase', href: '#features' },
      { label: 'OpportunityHub', href: '#features' },
      { label: 'DevScore Analytics', href: '#features' }
    ]
  },
  {
    title: 'Community & Ecosystem',
    links: [
      { label: 'TeamUp Teammates', href: '#features' },
      { label: 'DevConnect Discussions', href: '#features' },
      { label: 'Student Ambassadors', href: '#community' },
      { label: 'Hackathon Directory', href: '#features' }
    ]
  },
  {
    title: 'Resources & Docs',
    links: [
      { label: 'Platform Roadmap', href: '#how-it-works' },
      { label: 'Proof-over-Claims Manifesto', href: '#differentiation' },
      { label: 'Developer API (Preview)', href: '#hero' },
      { label: 'Contributing Guide', href: '#community' }
    ]
  },
  {
    title: 'Transparency & Legal',
    links: [
      { label: 'Privacy Policy (Draft)', href: '#legal' },
      { label: 'Terms of Service (Draft)', href: '#legal' },
      { label: 'Honor Code & Integrity', href: '#legal' },
      { label: 'Security Overview', href: '#legal' }
    ]
  }
];
