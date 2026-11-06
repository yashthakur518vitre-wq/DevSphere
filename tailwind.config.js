/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        devsphere: {
          bg: '#07090E',
          surface: '#0E131F',
          elevated: '#141C2E',
          card: '#0F1626',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(99, 102, 241, 0.3)',
          muted: '#94A3B8',
          text: '#F1F5F9',
          accent: '#6366F1',
          'accent-glow': 'rgba(99, 102, 241, 0.25)',
          cyan: '#38BDF8',
          emerald: '#10B981',
          violet: '#8B5CF6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(99, 102, 241, 0.15)',
        'glow-md': '0 0 25px -4px rgba(99, 102, 241, 0.25)',
        'glow-cyan': '0 0 25px -4px rgba(56, 189, 248, 0.25)',
      }
    },
  },
  plugins: [],
}
