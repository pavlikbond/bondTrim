# Bond Trim LLC - Professional Finish Carpentry Website

A modern, responsive website for Bond Trim LLC, a professional finish carpentry business serving the Twin Cities, Minnesota area.

## 🏗️ Built With

- **Astro** - Modern static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **React** - Interactive components
- **TypeScript** - Type safety
- **Font Awesome** - Icons
- **Inter Font** - Google Fonts

## 🎨 Features

- **Responsive Design** - Mobile-first approach
- **Modern UI** - Clean, professional design with warm color palette
- **Interactive Gallery** - React-based portfolio showcase
- **Contact Form** - Lead generation with form validation
- **SEO Optimized** - Proper meta tags and structured data
- **Smooth Scrolling** - Enhanced user experience
- **Accessibility** - WCAG compliant design

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd bondTrim
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 📁 Project Structure

```
bondTrim/
├── public/                 # Static assets
│   └── favicon.svg        # Website favicon
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.astro   # Navigation header
│   │   ├── Hero.astro     # Hero section
│   │   ├── Services.astro # Services showcase
│   │   ├── Gallery.tsx    # Interactive gallery
│   │   ├── Contact.astro  # Contact form
│   │   └── Footer.astro   # Footer
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro   # Main layout
│   ├── pages/             # Astro pages
│   │   └── index.astro    # Homepage
│   └── styles/            # Global styles
│       └── global.css     # Tailwind imports & custom styles
├── astro.config.mjs       # Astro configuration
└── package.json           # Dependencies & scripts
```

## 🎯 Business Information

- **Company**: Bond Trim LLC
- **Services**: Professional finish carpentry
  - Trim work (baseboards, crown molding, window casings)
  - Custom railings (stair, deck, balcony)
  - Cabinet installation (kitchen, bathroom, custom)
  - Door installation (interior, exterior)
  - Wainscoting & paneling
  - Custom projects
- **Location**: Savage, Minnesota
- **Service Area**: Twin Cities Metro
- **Contact**: (952) 923-5133 | bondtrimllc@gmail.com

## 🎨 Design System

### Color Palette

- **Primary**: Amber/Orange (#d97706, #f59e0b)
- **Secondary**: Blue (#3b82f6, #1d4ed8)
- **Accent**: Slate Gray (#64748b, #475569)
- **Background**: White and light accent colors

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔧 Customization

### Adding New Services

1. Update the services array in `Services.astro`
2. Add corresponding gallery items in `Gallery.tsx`
3. Update the contact form options in `Contact.astro`

### Changing Colors

1. Modify the color variables in `src/styles/global.css`
2. Update the Tailwind classes throughout components

### Adding Images

1. Place images in the `public/` directory
2. Update image paths in components
3. Consider using Astro's image optimization

## 📞 Support

For questions or support, contact:

- **Phone**: (952) 923-5133
- **Email**: bondtrimllc@gmail.com

## 📄 License

This project is proprietary to Bond Trim LLC. All rights reserved.

---

Built with ❤️ for Bond Trim LLC
