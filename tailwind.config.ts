import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,html}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,html}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,html}',
    './components/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue': '#86B6F6',
        'general-text': '#176B87'
      },
      backgroundImage: {
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
export default config
