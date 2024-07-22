/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: '0.5rem',
      xs: '0.8rem',
      base: '1.5rem',
      xl: '2rem',
      // '2xl': '1.563rem',
      // '3xl': '1.953rem',
      // '4xl': '2.441rem',
      // '5xl': '3.052rem',
    },
    margin:{
      100:'45rem',
      96:'20rem',
      98:'39rem',
      97:'30rem',
      84:'10rem',
      86:'13rem',
      90:'16rem',
      95:'25rem'

    },
    screens: {
      'mobile': '0px',
      // => @media (min-width: 640px) { ... }

      'tablet': '400px',
      // => @media (min-width: 640px) { ... }

      'laptop': '850px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }


    },
  },
  plugins: [],
}

