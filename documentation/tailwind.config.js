module.exports = {
  purge: {
    content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    options: {
      safelist: ["italic", "border-l-4", "bg-neutral-100", "text-neutral-600", "border-indigo-800", "quote", "my-4", "p-4"]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(236, 48%, 50%)',
          default: 'hsl(236, 48%, 47%)',
          darker: 'hsl(236, 48%, 42%)'
        },
        "bg-primary": {
          lighter: 'hsl(236, 48%, 50%)',
          default: 'hsl(236, 48%, 47%)',
          darker: 'hsl(236, 48%, 42%)'
        }
      },
      boxShadow: {
        link: '0 -4px 0 0 hsl(236, 48%, 80%) inset'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
