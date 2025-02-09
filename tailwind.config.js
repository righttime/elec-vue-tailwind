/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 커스텀 색상
      colors: {
        primary: {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        secondary: {
          light: '#9CA3AF',
          DEFAULT: '#6B7280',
          dark: '#4B5563',
        },
      },
      // 커스텀 폰트 크기
      fontSize: {
        'xs-tight': ['0.75rem', { lineHeight: '1rem' }],
        'sm-tight': ['0.875rem', { lineHeight: '1.25rem' }],
      },
      // 커스텀 간격
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
      },
      // 커스텀 테두리 반경
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Barlow', 'sans-serif']
      }
    },
  },
  plugins: [],
} 