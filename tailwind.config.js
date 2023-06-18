/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'StrongCyan':'hsl(172, 67%, 45%)',
        'StrongCyanLight':'hsla(172, 67%, 45%,0.6)',
        'VeryDarkCyan':'hsl(183, 100%, 15%)',
        'GrayishCyan': 'hsl(184, 14%, 56%)',
        'LightGrayishCyan':'hsl(189, 41%, 97%)',
        'VeryLightGrayishCyan':'hsl(189, 41%, 97%)',

      },
      fontFamily:{
        Spacemono:['Space Mono', 'monospace']

      },
      
    },

  },

  plugins: [],
}

