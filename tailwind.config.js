/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/work/**/*.mdx",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "reading-wide": ["72px 1fr min(65ch, calc(100% - 64px)) 1fr 72px"],
        "reading-narrow": ["24px 1fr min(65ch, calc(100% - 64px)) 1fr 24px"],
      },
    },
  },
  plugins: [],
}
