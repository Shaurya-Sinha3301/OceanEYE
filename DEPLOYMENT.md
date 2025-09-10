# 🚀 OceanEYE Frontend Deployment Guide

This guide covers various deployment options for the OceanEYE frontend application.

## 📋 Pre-deployment Checklist

- [ ] All tests pass: `npm run lint`
- [ ] TypeScript compiles: `npm run type-check`
- [ ] Production build works: `npm run build`
- [ ] Environment variables configured
- [ ] Performance optimized
- [ ] Accessibility tested

## 🌐 Deployment Options

### 1. Vercel (Recommended)

**Why Vercel?**
- Built for Next.js applications
- Automatic deployments from Git
- Global CDN and edge functions
- Zero configuration required

**Steps:**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

**Configuration:**
Create `vercel.json` (optional):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["bom1", "sin1"]
}
```

### 2. Netlify

**Steps:**
```bash
# Build the application
npm run build

# Deploy to Netlify
# Upload the .next folder via Netlify dashboard
# Or use Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=.next
```

**Configuration:**
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Docker Deployment

**Dockerfile:**
```dockerfile
# Multi-stage build
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**Docker Commands:**
```bash
# Build image
docker build -t oceaneye-frontend .

# Run container
docker run -p 3000:3000 oceaneye-frontend

# Docker Compose
docker-compose up -d
```

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### 4. AWS S3 + CloudFront

**For Static Export:**
```bash
# Add to next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

# Build and export
npm run build
```

**AWS CLI Deployment:**
```bash
# Sync to S3
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### 5. GitHub Pages

**Configuration:**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d out"

# Deploy
npm run build
npm run deploy
```

**GitHub Actions:**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

## 🔧 Environment Configuration

### Environment Variables

Create `.env.production`:
```env
NEXT_PUBLIC_API_URL=https://api.oceaneye.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Build Optimization

**next.config.js:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Optimize images
  images: {
    domains: ['your-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Bundle analyzer (development only)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      config.plugins.push(
        new (require('@next/bundle-analyzer'))({
          enabled: true,
        })
      )
      return config
    },
  }),
}

module.exports = nextConfig
```

## 📊 Performance Monitoring

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Web Vitals Monitoring
```typescript
// app/layout.tsx
export function reportWebVitals(metric: any) {
  console.log(metric)
  // Send to analytics service
}
```

## 🔒 Security Considerations

### Content Security Policy
Add to `next.config.js`:
```javascript
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

### HTTPS Enforcement
Most platforms handle this automatically, but ensure:
- SSL certificates are valid
- HTTP redirects to HTTPS
- HSTS headers are set

## 🚨 Troubleshooting

### Common Issues

**Build Failures:**
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

**Memory Issues:**
```bash
# Increase Node.js memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

**Static Export Issues:**
- Remove dynamic routes
- Use `next/image` with `unoptimized: true`
- Avoid server-side features

### Debugging

**Enable Debug Mode:**
```bash
DEBUG=* npm run build
```

**Bundle Analysis:**
```bash
ANALYZE=true npm run build
```

## 📈 Performance Optimization

### Image Optimization
- Use WebP/AVIF formats
- Implement lazy loading
- Optimize image sizes

### Code Splitting
- Use dynamic imports
- Implement route-based splitting
- Lazy load components

### Caching Strategy
- Set appropriate cache headers
- Use CDN for static assets
- Implement service workers

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run lint
    - run: npm run type-check
    - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run build
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## 📞 Support

For deployment issues:
- Check platform-specific documentation
- Review build logs
- Contact team for assistance

---

**Happy Deploying! 🚀**