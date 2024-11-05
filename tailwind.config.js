/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,yaml}',
  ],
  theme: {
    extend: {
      fontFamily:{
        barlow:['Barlow Semi Condensed', 'sans-serif']
      },
      screens:{
        'mobile':'375px',
        'tablet':'768px',
        'desktop':'1440px'
      },
      colors:{
        primary:{
          moderateViolet:'hsl(263, 55%, 52%)',
          veryDarkGrayishBlue:'hsl(217, 19%, 35%)',
          veryDarkBlackishBlue:'hsl(219, 29%, 14%)',
          white:'hsl(0, 0%, 100%)'
        },
        neutral:{
          lightGray:'hsl(0, 0%, 81%)',
          lightGrayishBlue:'hsl(210, 46%, 95%)'
        }
      }
    },
  },
  plugins: [],
}




// Note for text colors:

// 1. "Verified Graduate" has the same color as the person's name with 50% opacity
// 2. Review paragraphs inside the quotations have the same color as well, but are at 70% opacity