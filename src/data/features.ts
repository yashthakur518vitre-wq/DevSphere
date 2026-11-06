import type { Feature, HowItWorksStep, ComparisonItem } from '../types';

/**
 * The 8 Core Modules of DevSphere
 * Representing the comprehensive platform vision for developers and students.
 */
export const PLATFORM_FEATURES: Feature[] = [
  {
    id: 'devid',
    name: 'DevID',
    tagline: 'Unified Developer Identity',
    description: 'A single, verifiable developer profile aggregating your code contributions, verified commits, contest ratings, and peer endorsements.',
    iconName: 'UserCheck',
    badge: 'Identity Layer',
    highlightColor: 'from-blue-500/20 to-indigo-500/10'
  },
  {
    id: 'codearena',
    name: 'CodeArena',
    tagline: 'Competitive Coding & DSA',
    description: 'Solve curated algorithmic challenges, participate in timed developer sprints, and prove problem-solving aptitude with execution benchmarks.',
    iconName: 'Code2',
    badge: 'Skill Arena',
    highlightColor: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    id: 'codehub',
    name: 'CodeHub',
    tagline: 'Project Portfolio & Evidence',
    description: 'Showcase real production projects with live demos, architecture write-ups, and automated Git repository analysis that highlights your code quality.',
    iconName: 'GitFork',
    badge: 'Showcase',
    highlightColor: 'from-indigo-500/20 to-purple-500/10'
  },
  {
    id: 'devconnect',
    name: 'DevConnect',
    tagline: 'Developer Networking',
    description: 'Engage in signal-rich technical discussions, follow leading builders, and exchange architectural feedback without corporate fluff.',
    iconName: 'Users',
    badge: 'Community',
    highlightColor: 'from-purple-500/20 to-pink-500/10'
  },
  {
    id: 'teamup',
    name: 'TeamUp',
    tagline: 'Hackathons & Collaborators',
    description: 'Match with compatible builders based on complementary tech stacks, timezone availability, and proven project track records for hackathons and startups.',
    iconName: 'UserPlus',
    badge: 'Collaboration',
    highlightColor: 'from-emerald-500/20 to-teal-500/10'
  },
  {
    id: 'opportunityhub',
    name: 'OpportunityHub',
    tagline: 'Verified Hiring & Internships',
    description: 'Skip unread resume piles. Get discovered by tech recruiters directly based on your verified code commits, project complexity, and contest performance.',
    iconName: 'Briefcase',
    badge: 'Career',
    highlightColor: 'from-amber-500/20 to-orange-500/10'
  },
  {
    id: 'devscore',
    name: 'DevScore',
    tagline: 'Dynamic Skill Analytics',
    description: 'A multi-dimensional scoring engine that evaluates algorithmic thinking, consistency, code maintainability, and collaboration metrics.',
    iconName: 'BarChart3',
    badge: 'Analytics',
    highlightColor: 'from-sky-500/20 to-indigo-500/10'
  },
  {
    id: 'devai',
    name: 'DevAI',
    tagline: 'AI Developer Assistant',
    description: 'Receive context-aware architectural reviews, code complexity breakdowns, and personalized learning roadmaps tailored to your skill gaps.',
    iconName: 'Sparkles',
    badge: 'AI Intelligence',
    highlightColor: 'from-violet-500/20 to-indigo-500/10'
  }
];

/**
 * 4-Step Developer Journey for How It Works
 */
export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: 'Create Your DevID',
    description: 'Claim your unique developer handle and link your GitHub, GitLab, or competitive coding profiles to unify your digital footprint.',
    proofEvidence: 'Cryptographically linked developer handle',
    badge: 'Foundation'
  },
  {
    step: 2,
    title: 'Connect Projects & Build Evidence',
    description: 'Add your best full-stack repositories, open-source pull requests, and system architecture breakdowns with verifiable proof of authorship.',
    proofEvidence: 'Repository commit & authorship attribution',
    badge: 'Portfolio'
  },
  {
    step: 3,
    title: 'Prove Skills in Real Coding Challenges',
    description: 'Solve real-world DSA and engineering challenges in CodeArena. Earn verified badges based on algorithmic efficiency and clean code standards.',
    proofEvidence: 'Automated test suite execution & time complexity analysis',
    badge: 'Practice'
  },
  {
    step: 4,
    title: 'Connect with Builders & Land Opportunities',
    description: 'Find co-founders and hackathon teammates via TeamUp, and receive inbound interview invitations from engineering teams seeking proven talent.',
    proofEvidence: 'Inbound recruiter matching powered by skill data',
    badge: 'Growth'
  }
];

/**
 * Differentiation Comparison: Traditional Resumes vs DevSphere Proof
 */
export const DIFFERENTIATION_POINTS: ComparisonItem[] = [
  {
    aspect: 'Skill Verification',
    traditional: 'Self-written bullet points on a static PDF resume ("Expert in React & Python").',
    devSphere: 'Automated code analysis, Git commit histories, and benchmarked problem submissions.'
  },
  {
    aspect: 'Projects & Work Evidence',
    traditional: 'Dead links, copied tutorial projects, or untracked group contributions.',
    devSphere: 'Interactive project showcases, deep commit diffs, and live deployment verification.'
  },
  {
    aspect: 'Recruiter Discovery',
    traditional: 'Submitting 300+ applications into automated ATS keyword black holes.',
    devSphere: 'Recruiters filter by verified skills, contest rank, and project complexity score.'
  },
  {
    aspect: 'Collaboration',
    traditional: 'Searching random social channels or college WhatsApp groups for hackathon teammates.',
    devSphere: 'Targeted matching with builders based on complementary skills and verified activity.'
  }
];
