/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '3rem',
        lg: '6.25rem',
      },
    },
    extend: {
      colors: {
        'jb-blue': '#1D40B4',
        'jb-white': '#F2F2F2',
        'jb-brown': '#120B03',
        'jb-yellow': '#F9DC4A',
        'jb-accent': '#d2691e',
      },
      backgroundImage: {
        'paper': "url('/src/assets/bg-paper.webp')",
      },
      fontFamily: {
        'mono': ['"IBM Plex Mono"', 'monospace'],
        'caslon': ['"Libre Caslon Text"', 'serif'],
        'sans': ['Geist', 'sans-serif'],
      },
      fontSize: {
        // Display
        'd1': ['2rem', '3.125rem'],
        'd2': ['1.625rem', '1.875rem'],
        'd3': ['1.375rem', '1.625rem'],
        'd4': ['1.25rem', '1.5rem'],
        'd5': ['1.125rem', '1.5rem'],
        'd6': ['1rem', '1.25rem'],

        // Heading
        'h1': ['2.5rem', '2.75rem'],
        'h2': ['1.875rem', '2.375rem'],
        'h3': ['1.625rem', '1.875rem'],
        'h4': ['1.5rem', '2rem'],
        'h5': ['1.25rem', '1.75rem'],
        'h6': ['1rem', '1.375rem'],

        // Body
        'b1': ['2rem', '2.875rem'],
        'b2': ['1.875rem', '2.675rem'],
        'b3': ['1.5rem', '1.875rem'],
        'b4': ['1.25rem', '1.625rem'],
        'b5': ['1.125rem', '1.5rem'],
        'b6': ['1rem', '1.5rem'],

        'emphasis': ['1.125rem', '1.6'],
        'tag': ['0.75rem', '1.4'],
      },
      letterSpacing: {
        tightest: '-.1em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
      }
    },
  },
  plugins: [],
}

