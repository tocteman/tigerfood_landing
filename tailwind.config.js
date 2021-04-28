module.exports = {
  // purge: [
  //   './_includes/**/*.html',
  //   './_layouts/**/*.html',
  //   './partials/*.md',
  //   './_posts/*.md',
  //   './**/*.html',
  //   './**/*.md',
  // ],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Jost', 'sans-serif'],
      'serif': ['Calistoga', 'serif']
    },
    extend: {
      keyframes: {
         wiggle: {
           '0%, 100%': { transform: 'rotate(-3deg)' },
           '50%': { transform: 'rotate(3deg)' },
         },
        'fade-in-down': {
          '0%': {
            opacity: '0.7',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(+10px)'
          },
        }

      },
      animation: {
       wiggle: 'wiggle 1s ease-in-out infinite',
      'fade-in-down': 'fade-in-down 0.5s ease-out',
      'fade-in-up': 'fade-in-up 0.5s ease-in'
      },
      height: {
        'cuarto': '25vh',
        'tercio': '33vh',
        'medio': '50vh',
        'dostercios': '67vh',
        'americano': '75vh',
        'casitoda': '87vh',
        'screen': '100vh',
        'screen1/4': '125vh',
        'screen1/3': '133vh',
        'screen1/2': '150vh',
        'screen2/3': '167vh',
        'screen2': '200vh'
      },
      colors: {
        crema: {
          25: '#fffbfb',
          50: '#fffafa',
          75: '#ffe9ea',
          100: '#f5e7ea',
          150: '#eedadf'
        },
        morado: {
          900: '#17121F',
          800: '#1C1432',
          700: '#39294d',
          600: '#2C2445',
          500: '#533F6D',
          400: '#5C3089',
          300: '#9070AF'
        },
        turquesa: {
          800: '#22534E',
          600: '#357B71',
          500: '#3B8A7E',
          300: '#439E93'
        },
        mostaza: {
          800: '#B15928',
          600: '#B56F2C',
          500: '#B8702D',
          300: '#D18435'
        },
        verde: {
          800: '#2E602A',
          600: '#548447',
          500: '#538C4A',
          300: '#75A855'
        },
        lacre: {
          800: '#821D21',
          700: '#821D21',
          600: '#821D21',
          500: '#9E4047',
          300: '#B0575C',
          200: '#B47474'
        },
        naranja: {
          800: '#9B231E',
          600: '#BF3D28',
          500: '#C33B29',
          300: '#DD4A30'
        },
        salmon: {
          800: '#6E1713',
          600: '#861F1C',
          500: '#99231F',
          300: '#AE302B'
        }
      },
      backgroundImage: theme => ({
        'hero': "url('./assets/img/hero_bg.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      animation: ['hover']
    }
  },
  plugins: [ ],
}
