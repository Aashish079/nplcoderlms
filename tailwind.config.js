/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        animation: {
            'float': 'float 3s ease-in-out infinite',
            'float-slow': 'float-slow 5s ease-in-out infinite',
            'float-slow-reverse': 'float-slow-reverse 4s ease-in-out infinite',
            'spin-slow': 'spin-slow 12s linear infinite',
            'spin-slow-reverse': 'spin-slow-reverse 10s linear infinite',
            'pulse': 'pulse 2s infinite',
            'pulse-delayed': 'pulse 2s infinite 0.6s',
            'pulse-delayed-more': 'pulse 2s infinite 1.2s',
            'expand-slow': 'expand-slow 3s forwards',
            'expand-slower': 'expand-slower 3s 0.5s forwards',
            'expand-slowest': 'expand-slowest 3s 1s forwards',
            'draw-line': 'draw-line 2s forwards',
            'draw-line-delayed': 'draw-line-delayed 2s 0.5s forwards',
            'draw-line-delayed-more': 'draw-line-delayed-more 2s 1s forwards',
            'orbit': 'orbit 20s linear infinite',
            'orbit-delayed': 'orbit-delayed 20s linear infinite',
            'orbit-delayed-more': 'orbit-delayed-more 20s linear infinite',
            'swing': 'swing 2s ease-in-out infinite',
            'wave': 'wave 3s ease-in-out infinite',
            'wave-reverse': 'wave-reverse 3s ease-in-out infinite',
            'dash': 'dash 15s linear infinite',
            'dash-reverse': 'dash-reverse 15s linear infinite',
            'neural-path': 'draw-line 3s ease-out forwards',
            'neuron-pulse': 'neuron-pulse 2s infinite',
            'ring-expand': 'ring-expand 2s infinite',
            'particle-flow': 'particle-flow 3s infinite',
            'badge-appear': 'badge-appear 0.5s forwards',
            'star-ping': 'star-ping 1.2s ease-in-out infinite',
            'button-pulse': 'button-pulse 2s infinite',
          },
          keyframes: {
            'star-ping': {
        '0%, 100%': { transform: 'rotate(45deg) scale(1)', opacity: '1' },
        '50%': { transform: 'rotate(45deg) scale(1.2)', opacity: '0.8' },
      },
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            },
            'float-slow': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-6px)' },
            },
            'float-slow-reverse': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(6px)' },
            },
            'spin-slow': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
            'spin-slow-reverse': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(-360deg)' },
            },
            pulse: {
              '0%, 100%': { opacity: '1', transform: 'scale(1)' },
              '50%': { opacity: '0.6', transform: 'scale(1.05)' },
            },
            'expand-slow': {
              '0%': { width: '0%' },
              '100%': { width: '100%' },
            },
            'expand-slower': {
              '0%': { width: '0%' },
              '100%': { width: '100%' },
            },
            'expand-slowest': {
              '0%': { width: '0%' },
              '100%': { width: '100%' },
            },
            'draw-line': {
              '0%': {
                'stroke-dasharray': '0, 1000',
                'stroke-dashoffset': '0',
              },
              '100%': {
                'stroke-dasharray': '1000, 0',
                'stroke-dashoffset': '0',
              },
            },
            'orbit': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
            'orbit-delayed': {
              '0%': { transform: 'rotate(120deg)' },
              '100%': { transform: 'rotate(480deg)' },
            },
            'orbit-delayed-more': {
              '0%': { transform: 'rotate(240deg)' },
              '100%': { transform: 'rotate(600deg)' },
            },
            swing: {
              '0%, 100%': { transform: 'rotate(-5deg)' },
              '50%': { transform: 'rotate(5deg)' },
            },
            wave: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-5px)' },
            },
            'wave-reverse': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(5px)' },
            },
            dash: {
              to: { 'stroke-dashoffset': '12' },
            },
            'dash-reverse': {
              to: { 'stroke-dashoffset': '-12' },
            },
            'neuron-pulse': {
              '0%': { opacity: '0', transform: 'scale(0.8)' },
              '20%': { opacity: '1', transform: 'scale(1)' },
              '30%': { opacity: '0', transform: 'scale(1.2)' },
              '100%': { opacity: '0', transform: 'scale(0.8)' },
            },
            'ring-expand': {
              '0%': { opacity: '0.8', transform: 'translate(-50%, -50%) scale(0)' },
              '100%': { opacity: '0', transform: 'translate(-50%, -50%) scale(1)' },
            },
            'particle-flow': {
              '0%': { opacity: '0', transform: 'translate(0, 0)' },
              '10%': { opacity: '1' },
              '90%': { opacity: '1' },
              '100%': { opacity: '0', transform: 'translate(300px, 0)' },
            },
            'badge-appear': {
              to: { opacity: '1', transform: 'translateY(0)' },
            },
            'button-pulse': {
              '0%, 100%': { 
                transform: 'scale(1)',
                boxShadow: '0 0 0 0 rgba(220, 20, 60, 0.4)'
              },
              '50%': { 
                transform: 'scale(1.05)',
                boxShadow: '0 0 0 10px rgba(0, 56, 147, 0)'
              },
            }
          },
        
          colors: {
              background: 'hsl(var(--background))',
              foreground: 'hsl(var(--foreground))',
              card: {
                  DEFAULT: 'hsl(var(--card))',
                  foreground: 'hsl(var(--card-foreground))'
              },
              popover: {
                  DEFAULT: 'hsl(var(--popover))',
                  foreground: 'hsl(var(--popover-foreground))'
              },
              primary: {
                  DEFAULT: 'hsl(var(--primary))',
                  foreground: 'hsl(var(--primary-foreground))'
              },
              secondary: {
                  DEFAULT: 'hsl(var(--secondary))',
                  foreground: 'hsl(var(--secondary-foreground))'
              },
              muted: {
                  DEFAULT: 'hsl(var(--muted))',
                  foreground: 'hsl(var(--muted-foreground))'
              },
              accent: {
                  DEFAULT: 'hsl(var(--accent))',
                  foreground: 'hsl(var(--accent-foreground))'
              },
              destructive: {
                  DEFAULT: 'hsl(var(--destructive))',
                  foreground: 'hsl(var(--destructive-foreground))'
              },
              border: 'hsl(var(--border))',
              input: 'hsl(var(--input))',
              ring: 'hsl(var(--ring))',
              chart: {
                  '1': 'hsl(var(--chart-1))',
                  '2': 'hsl(var(--chart-2))',
                  '3': 'hsl(var(--chart-3))',
                  '4': 'hsl(var(--chart-4))',
                  '5': 'hsl(var(--chart-5))'
              }
          },
          borderRadius: {
              lg: 'var(--radius)',
              md: 'calc(var(--radius) - 2px)',
              sm: 'calc(var(--radius) - 4px)'
          },
        
        fontFamily: {
          'verdana': ['Verdana', 'sans-serif'],
        },
      }
  },
  plugins: [require("tailwindcss-animate")],
};
