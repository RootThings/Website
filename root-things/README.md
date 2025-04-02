# Root Things Website

A premium website for the Root Things Telegram channel, built with Vue.js, VitePress, and Tailwind CSS.

## Features

- Modern, responsive design optimized for mobile and desktop
- Dark mode support
- Premium UI/UX with smooth animations and transitions
- Dedicated sections for Magisk and KernelSU modules
- In-depth guides for Android rooting and customization
- Support section with FAQs and community links
- Optimized for GitHub Pages deployment

## Tech Stack

- [VitePress](https://vitepress.vuejs.org/) - Vue-powered static site generator
- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Tabler Icons](https://tabler-icons.io/) - SVG icons collection

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/root-things/website.git
cd website
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

To build the website for production:

```
npm run build
```

The built files will be in the `docs/.vitepress/dist` directory.

## Deploying to GitHub Pages

This project is configured for easy deployment to GitHub Pages:

1. Update the base URL in `docs/.vitepress/config.ts` if needed.
2. Run the deploy script:
```
npm run deploy
```

This will build the site and push it to the `gh-pages` branch.

## Project Structure

```
root-things/
├── docs/
│   ├── .vitepress/
│   │   ├── theme/
│   │   │   ├── components/
│   │   │   ├── custom.css
│   │   │   └── index.ts
│   │   └── config.ts
│   ├── public/
│   │   ├── images/
│   │   ├── logo.svg
│   │   └── favicon.ico
│   ├── modules/
│   │   ├── index.md
│   │   ├── magisk.md
│   │   └── kernelsu.md
│   ├── guides/
│   │   └── index.md
│   ├── support/
│   │   └── index.md
│   └── index.md
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customization

- Update the theme colors in `tailwind.config.js`
- Modify site configuration in `docs/.vitepress/config.ts`
- Add custom CSS in `docs/.vitepress/theme/custom.css`

## License

This project is licensed under the MIT License. 