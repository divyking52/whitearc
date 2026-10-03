/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-bg': '#FAF5EE',
        'warm-cream': '#FFF9F0',
        'warm-surface': '#F4EAE0',
        'warm-elevated': '#ECE0D2',
        'sunset-peach': '#F4A284',
        'sunset-apricot': '#F8BAA0',
        'sunset-terracotta': '#E0775B',
        'bridge-rust': '#BA4332',
        'bridge-deep': '#962F20',
        'mist-slate': '#48686B',
        'mist-teal': '#5A7D80',
        'espresso': '#2A1614',
        'espresso-soft': '#452A27',
        'espresso-muted': '#7E6360',
        'hairline-warm': '#E4D5C5',
        'hairline-bridge': '#D99480',
      },
      fontFamily: {
        serif: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Geist Mono', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'tighter': '-0.03em',
        'widest-tech': '0.18em',
      },
      lineHeight: {
        'arch-hero': '0.92',
        'arch-tight': '0.98',
      }
    },
  },
  plugins: [],
}
