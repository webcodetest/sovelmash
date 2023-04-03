/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#F9F8FF',
        'dark': '#232323',
        'orange': '#E55E33',
        'light-orange': '#E86F4A',
        'light-gray': "#7F889B",
        'danger': "#FAE8EC",
        'red': '#E82525',
        'light-pink': '#F9F8FF',
        'active-orange': '#D9481C',
        'disable-orange': '#FFD4C7',
        'title': '#171A20',
        'details': '#5C5E62',
        'disable-grey': '#DDDDDD',
        'light-grey': '#B6B6B6',
        'body': '#393C41'
      },

     
    },

  

    container: {
      center: true,
      padding: "15px",
      maxWidth: {
        'xs': '100%',
        'sm': '640px',
        'md': '768px',
        'lg': '976px',
        'xl': '1232px',
        '2xl': '1232px',
      },
  },
  },
  plugins: [],
}

