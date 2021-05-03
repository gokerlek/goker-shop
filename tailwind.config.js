module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
      gridTemplateRows: {       
       'layout': 'minmax(100vh, 1fr) 300px',
      },
      fontFamily : {
        'layout' : ['Noto Sans', 'Open Sans', 'Arial' ]

      },
      backgroundImage: theme => ({
        'backgraund': "linear-gradient(179.1deg, rgba(255, 88, 88, 0.82) 0.88%, rgba(248, 87, 166, 0) 175.77%), url('/src/components/back.png')",
       }),
      textColor: {
        'footerGray': '#757575',
      },
      backgroundColor: theme => ({
        'footerGray': '#333333',
        'homeGradient1': 'rgba(255, 88, 88, 0,82)',
        'homeGrandient2': 'rgba(248, 87, 166, 0)',
       })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
