/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '3xl': { max: '1919px' },
      '2xl': { max: '1535px' },
      xl: { max: '1440px' },
      ml: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '834px' },
      sm: { max: '480px' },
      xs: { max: '360px' },
      xxs: { max: '280px' }
    },
    extend: {
      colors: {
        'tx-blue': '#3631ff',
        'tx-dark': '#1d1a3f',
        'tx-orange': '#ff6633',
        'tx-yellow': '#ffff00',
        charcoal: '#353037',
        white: '#ffffff',
        'light-white': '#f9f9f9',
        'dull-white': '#cfcfcf',
        'bg-white': '#faf3f3',
        'dull-grey': '#848484',
        warning: '#cd4343',
        'light-grey': ' #b5b5b5',
        disabled: '#b5b5b5',
        'active-blue': '#2520c8',
        'hover-blue': '#5551ff',
        active: '#0000001f',
        'cool-tone': '#a7e5f2',
        'grass-tone': '#7de8bc'
      },
      content: {
        ting: 'url(../assets/filterlink-ting.svg)'
      },
      backgroundImage: {
        'tx-highlight-gradient': 'linear-gradient(180deg, #ff6633 0%, #3631ff 100%)',
        'tab-gradient': 'linear-gradient(180deg, #ebebeb 0%, #dcdcdc 100%)'
      }
    }
  },
  plugins: []
}
