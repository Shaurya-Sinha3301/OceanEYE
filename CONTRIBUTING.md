# Contributing to OceanEYE Frontend

Thank you for your interest in contributing to OceanEYE! This document provides guidelines for contributing to the frontend part of our Smart India Hackathon 2024 project.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Git
- Basic knowledge of React, Next.js, and TypeScript

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/oceaneye-frontend.git
   cd oceaneye-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   ```
   http://localhost:3000
   ```

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow the existing naming conventions
- Use functional components with hooks
- Implement proper error handling
- Write descriptive commit messages

### Component Structure
```typescript
// ComponentName.tsx
'use client'

import { useState } from 'react'
import { IconName } from 'lucide-react'

interface ComponentNameProps {
  // Define props with TypeScript
}

export default function ComponentName({ prop }: ComponentNameProps) {
  // Component logic here
  
  return (
    <div className="component-container">
      {/* JSX content */}
    </div>
  )
}
```

### Styling Guidelines
- Use Tailwind CSS classes
- Follow the established color palette
- Ensure responsive design (mobile-first)
- Maintain accessibility standards

### File Organization
```
app/components/
├── ComponentName.tsx     # Main component
├── SubComponent.tsx      # Related sub-components
└── utils/               # Utility functions
```

## 🎨 Design System

### Colors
Use the predefined color palette:
- `ocean-*`: Primary blues
- `teal-*`: Interactive elements
- `coral-*`: Accent colors
- `abyss-*`: Text and backgrounds

### Typography
- Headings: `text-xl`, `text-2xl`, `text-3xl`, etc.
- Body: `text-base`, `text-sm`
- Font weights: `font-medium`, `font-semibold`, `font-bold`

## 🧪 Testing

### Before Submitting
- [ ] Test on multiple screen sizes
- [ ] Check browser compatibility
- [ ] Verify accessibility features
- [ ] Run linting: `npm run lint`
- [ ] Type check: `npm run type-check`
- [ ] Build successfully: `npm run build`

## 📋 Pull Request Process

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow coding guidelines
   - Test thoroughly
   - Update documentation if needed

3. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. **Push to Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Provide clear description
   - Include screenshots if UI changes
   - Reference any related issues

### Commit Message Format
```
type(scope): description

Examples:
feat(dashboard): add file upload component
fix(charts): resolve data visualization issue
docs(readme): update installation instructions
style(header): improve responsive navigation
```

## 🐛 Bug Reports

When reporting bugs, please include:
- Browser and version
- Screen size/device
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 💡 Feature Requests

For new features:
- Describe the use case
- Explain the expected behavior
- Consider implementation complexity
- Discuss with team before starting

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Tools
- [Lucide Icons](https://lucide.dev)
- [Nivo Charts](https://nivo.rocks)
- [React Hook Form](https://react-hook-form.com)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on the project goals

## 📞 Getting Help

- Create an issue for bugs or questions
- Join team discussions
- Ask for code reviews

## 🏆 Recognition

Contributors will be acknowledged in:
- Project documentation
- Team presentations
- SIH 2024 submission

Thank you for contributing to OceanEYE! 🌊