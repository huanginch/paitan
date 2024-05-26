/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'button': '4px 5px 7px 1px rgba(192, 150, 43, 1)',
        'subtitle': '6px 10px 10px rgba(255, 184, 0, 0.56)',
        'icon': '1px 2px 14px 14px rgba(255, 184, 0, 0.54)'
      },
      dropShadow: {
        'title': '7px 2px 2px rgba(255, 184, 0, 0.72)',
      },
      fontFamily: {
        'genjyuugothic': ['GenJyuuGothic', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#FFB800',
        secondary: 'rgba(255, 184, 0, 0.54)',
        third: '#FCD36B',
        text: '#634700',
        'text-hover': '#7B5900',
        background: 'rgba(255, 255, 255, 0.62)',
        'donate': '#727171',
        'donate-hover': '#7B5900',
      },
      screens: {
        'xs': '411px',
        'tablet': '992px',
      },
      backgroundImage: {
        'Artist-Other': "url('/src/assets/background.png')",
        'Staff-Card': "url('/src/assets/staffcard-background.png')",
        'Staff': "url('/src/assets/staff-background.png')",
        'SpecialThanks': "url('/src/assets/specialthanks.png')",
        'Fans': "url('/src/assets/fans-background.png')",
        'here': "url('/src/assets/主播都在這裡開台.png')",
        'here-pc': "url('/src/assets/主播都在這裡開台-pc.png')",
        'Rules': "url('/src/assets/rules-background.png')",
        'Rules-PC': "url('/src/assets/rules-background-pc.png')",
      }
    },
  },
  plugins: [
  ],
}

