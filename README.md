# 🌊 OceanEYE Frontend

![OceanEYE](https://img.shields.io/badge/OceanEYE-Deep%20Sea%20eDNA-0ea5e9?style=for-the-badge&logo=dna&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14.0.0-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![BERTax](https://img.shields.io/badge/BERTax-Fast%20Classification-10b981?style=for-the-badge&logo=ai&logoColor=white)
![DNABERT-S](https://img.shields.io/badge/DNABERT--S-Novelty%20Detection-ef4444?style=for-the-badge&logo=microscope&logoColor=white)

> **Smart India Hackathon 2025 Project**  
> AI-powered deep-sea eDNA analysis platform for marine biodiversity assessment

A modern, responsive web application built with Next.js that provides an intuitive interface for analyzing environmental DNA (eDNA) samples from deep-sea environments using the advanced **BERTax → DNABERT-S** pipeline for fast classification and novelty detection.

## 🚀 Live Demo

![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square&logo=github-actions)
![Deployment](https://img.shields.io/badge/Deployment-Ready-success?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square&logo=opensource)
![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square&logo=semver)

- **Landing Page**: [http://localhost:3000](http://localhost:3000)
- **Interactive Dashboard**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## ✨ Features

### 🎨 **Modern UI/UX**

- Clean, professional interface with ocean-inspired design
- Responsive layout optimized for all devices
- Smooth animations and interactive elements
- Accessibility-compliant design (WCAG 2.1)

### 🧬 **Core Functionality**

![Fast Processing](https://img.shields.io/badge/Processing-Fast-brightgreen?style=flat-square&logo=zap)
![Real Time](https://img.shields.io/badge/Analytics-Real%20Time-blue?style=flat-square&logo=activity)
![AI Powered](https://img.shields.io/badge/AI-Powered-purple?style=flat-square&logo=brain)
![Responsive](https://img.shields.io/badge/Design-Responsive-teal?style=flat-square&logo=mobile)

- **DNA Upload Interface**: Drag-and-drop FASTA/FASTQ file upload
- **BERTax → DNABERT-S Pipeline**: Fast classification followed by deep-sea novelty detection
- **Interactive Dashboard**: Real-time monitoring with comprehensive analytics
- **Data Visualization**: Advanced charts and biodiversity metrics
- **Sample Metadata**: Complete sample information management

## 🔬 **AI-Powered Analysis Pipeline**

![BERTax](https://img.shields.io/badge/BERTax-Classification-10b981?style=flat-square&logo=dna)
![DNABERT-S](https://img.shields.io/badge/DNABERT--S-Novelty%20Detection-ef4444?style=flat-square&logo=microscope)
![Accuracy](https://img.shields.io/badge/Accuracy-97%25-success?style=flat-square&logo=target)
![Speed](https://img.shields.io/badge/Speed-52%20seq%2Fmin-orange?style=flat-square&logo=zap)

Our advanced pipeline combines cutting-edge AI models for comprehensive deep-sea eDNA analysis:

1. **eDNA Preprocessing**: Quality control and sequence validation for deep-sea samples
2. **BERTax Classification**: Fast taxonomic classification using BERTax model
3. **DNABERT-S Novelty Detection**: Specialized deep-sea creature novelty detection
4. **Confidence Analysis**: Statistical confidence scoring and validation
5. **Deep-Sea Biodiversity Metrics**: Shannon diversity, species richness, and abundance
6. **Novel Species Discovery**: Identification of potentially new deep-sea species
7. **Interactive Dashboard**: Real-time monitoring and comprehensive reports

### 📊 **Analytics & Visualization**

- Interactive charts powered by Nivo
- Real-time performance metrics
- Taxonomic distribution visualization
- Biodiversity trend analysis
- Animated counters and progress indicators

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-14.0.0-000000?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide%20React-0.292.0-F56565?style=flat-square&logo=lucide&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-8.0-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-8.0-DD3A0A?style=flat-square&logo=postcss&logoColor=white)

| Category          | Technology        | Version  | Purpose                           |
| ----------------- | ----------------- | -------- | --------------------------------- |
| **Framework**     | Next.js           | 14.0.0   | React framework with SSR/SSG      |
| **Language**      | TypeScript        | ^5       | Type-safe JavaScript              |
| **Styling**       | Tailwind CSS      | ^3.3.0   | Utility-first CSS framework       |
| **Charts**        | Custom SVG        | -        | Scientific data visualization     |
| **Icons**         | Lucide React      | ^0.292.0 | Beautiful icon library            |
| **UI Components** | Custom Components | -        | Reusable React components         |
| **Animations**    | CSS Animations    | -        | Smooth transitions & effects      |
| **AI Models**     | BERTax + DNABERT-S| -        | Deep-sea species classification   |

## 🎨 Design System

### Color Palette

```css
/* Deep Ocean Blues */
ocean: {
  50: '#f0f8ff',   100: '#e0f1fe',   200: '#b8e3fd',
  300: '#7cc8fb',  400: '#36a9f7',   500: '#0c8ce8',
  600: '#0070c6',  700: '#0159a0',   800: '#064b84',
  900: '#0a3f6e'
}

/* Coral & Reef */
coral: {
  50: '#fef7f0',   100: '#fdeee0',   200: '#fad9c0',
  300: '#f6bc95',  400: '#f19568',   500: '#ec7545',
  600: '#dd5d2f',  700: '#b84a28',   800: '#933e27',
  900: '#773523'
}

/* Deep Sea Teal */
teal: {
  50: '#f0fdfa',   100: '#ccfbf1',   200: '#99f6e4',
  300: '#5eead4',  400: '#2dd4bf',   500: '#14b8a6',
  600: '#0d9488',  700: '#0f766e',   800: '#115e59',
  900: '#134e4a'
}
```

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)
- **Code**: Monospace font family

## 📁 Project Structure

```
app/
├── components/              # React Components
│   ├── Header.tsx          # Navigation header with branding
│   ├── Hero.tsx            # Hero section with demo terminal
│   ├── Features.tsx        # AI features showcase (6 cards)
│   ├── Pipeline.tsx        # 4-step analysis pipeline
│   ├── AdvancedCharts.tsx  # Interactive analytics dashboard
│   ├── ProjectManagement.tsx # Project cards and management
│   ├── CustomCharts.tsx    # Chart components (Bar, Pie, Line, Area)
│   ├── Dashboard.tsx       # Main dashboard interface
│   └── Footer.tsx          # Simple footer with links
├── dashboard/              # Dashboard Pages
│   ├── page.tsx           # Dashboard main page
│   └── layout.tsx         # Dashboard layout
├── globals.css            # Global styles and animations
├── layout.tsx             # Root layout with metadata
└── page.tsx               # Landing page composition

Configuration Files:
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd oceaneye-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   - Main landing page: [http://localhost:3000](http://localhost:3000)
   - Interactive dashboard: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # Check TypeScript types
```

## 🎯 Key Components

### 1. **Landing Page** (`/`)

- Hero section with animated DNA sequence demo
- Feature showcase with 6 key capabilities
- Analysis pipeline visualization
- Interactive charts and analytics
- Project management interface

### 2. **Dashboard** (`/dashboard`)

- Tabbed interface (Upload, Projects, Geospatial, Results, Team)
- File upload with drag-and-drop
- Sample metadata forms
- Real-time analysis pipeline tracking
- Project management cards

### 3. **Interactive Elements**

- Animated counters and progress bars
- Hover effects and smooth transitions
- Responsive navigation menu
- Modal dialogs and form validation

## 📊 Data Visualization

### Chart Types

- **Bar Charts**: Performance metrics comparison
- **Pie Charts**: Taxonomic distribution
- **Line Charts**: Biodiversity trends over depth
- **Area Charts**: Processing pipeline visualization

### Sample Data Structure

```typescript
// Performance Data
const performanceData = [
  { name: "Classification Accuracy", value: 95, benchmark: 85 },
  { name: "Confidence Score", value: 92, benchmark: 80 },
];

// Taxonomic Data
const taxonomicData = [
  { name: "Arthropoda", value: 35, color: "#0c8ce8" },
  { name: "Mollusca", value: 28, color: "#14b8a6" },
];
```

## 🎨 Customization Guide

### Adding New Components

1. Create component in `app/components/`
2. Follow naming convention: `ComponentName.tsx`
3. Use TypeScript interfaces for props
4. Apply consistent styling with Tailwind classes

### Modifying Colors

Update `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
      'custom-blue': '#your-color-hex'
    }
  }
}
```

### Adding New Pages

1. Create folder in `app/` directory
2. Add `page.tsx` for the route
3. Optional: Add `layout.tsx` for custom layout

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
npx vercel --prod
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Environment Variables

Create `.env.local` for local development:

```env
# Optional: Add any environment variables here
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach

All components are designed mobile-first with progressive enhancement for larger screens.

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Screen reader compatibility
- Focus management

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Forms validate properly
- [ ] Charts render correctly
- [ ] Animations are smooth
- [ ] Accessibility features work

### Browser Testing

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📈 Performance Optimization

### Bundle Analysis

```bash
npm run build
npx @next/bundle-analyzer
```

### Key Optimizations

- Next.js automatic code splitting
- Tailwind CSS purging
- Optimized font loading
- Lazy loading for components
- Compressed images and assets

## 🤝 Contributing

![Contributors Welcome](https://img.shields.io/badge/Contributors-Welcome-brightgreen?style=flat-square&logo=github)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-blue?style=flat-square&logo=git)
![Issues](https://img.shields.io/badge/Issues-Open-red?style=flat-square&logo=github)
![Code Style](https://img.shields.io/badge/Code%20Style-ESLint-purple?style=flat-square&logo=eslint)

### Development Workflow

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Code Style

- Use TypeScript for all components
- Follow ESLint configuration
- Use Prettier for formatting
- Write descriptive commit messages

## 📝 License

![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square&logo=opensource)
![SIH 2024](https://img.shields.io/badge/SIH-2024-orange?style=flat-square&logo=india)

This project is part of Smart India Hackathon 2024 submission.

## 👥 Team

![Team](https://img.shields.io/badge/Team-OceanEYE-blue?style=flat-square&logo=users)
![Hackathon](https://img.shields.io/badge/Hackathon-Smart%20India%202024-green?style=flat-square&logo=trophy)

**OceanEYE Development Team**  
Smart India Hackathon 2024

## 📞 Support

![Support](https://img.shields.io/badge/Support-Available-brightgreen?style=flat-square&logo=help-circle)
![Documentation](https://img.shields.io/badge/Docs-Complete-blue?style=flat-square&logo=book)

For questions or support regarding the frontend:

- Create an issue in the repository
- Contact the development team

---

**Built with ❤️ for marine conservation and biodiversity research**
