/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      //HERE WE CAN EDIT THINGS LIKE BY DEFAULT WHEN WE TYPE PURPLE IT WILL SHOW DEFAULT PURPLE VERSION BUT WE CAN EDIT HERE AND SAY WHEN WE SAY PURPLE USE THIS VERSION OF PURPLE
      colors:{
        gray : { //gray color has another version in tailwind is called slate
          100 : "eeeeef",
          200 : "e6e9ed",
          600 : "95989c"
        },
        purple : {
          600 : "#7164c0",
          200 : "#d9ddee",
          500 : "9492db"
        }
      }
    },
  },
  plugins: [],
}

