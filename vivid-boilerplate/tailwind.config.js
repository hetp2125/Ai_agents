/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12141A',
        'ink-soft': '#1B1E27',
        bone: '#FAF7F1',
        'bone-dim': '#F0EBE1',
        ember: '#FF6B4A',
        'ember-dark': '#E8542F',
        pine: '#1F5F52',
        slate: '#5B6472'
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        swap: {
          '0%, 22%': { opacity: 1, transform: 'translateY(0)' },
          '28%, 100%': { opacity: 0, transform: 'translateY(-8px)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
        swap: 'swap 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
