# Kannan Blogs

A feature-rich blog application showcasing modern web development capabilities including routing, data fetching, caching, streaming, styling, error handling, image optimization, metadata, MDX, and more.

## 🚀 Features

### 1. Routing, Pages & Layouts
- ✅ File-system routing with App Router
- ✅ Dynamic routes with parameters
- ✅ Nested layouts and shared UI
- ✅ Navigation components with active states
- ✅ Prefetching and caching

### 2. Data Fetching & Caching
- ✅ Server Components with data fetching
- ✅ Request memoization and data cache
- ✅ Mock JSON server for development
- ✅ API routes with filtering and pagination
- ✅ Revalidation strategies

### 3. Suspense & Streaming
- ✅ React Suspense for loading states
- ✅ Streaming for slow data sources
- ✅ Loading UI components
- ✅ Progressive page loading

### 4. Styling with Tailwind CSS
- ✅ Modern CSS with Tailwind
- ✅ Responsive design patterns
- ✅ Dark mode support
- ✅ Custom components and utilities
- ✅ CSS modules integration

### 5. Error Management
- ✅ Error boundaries and error pages
- ✅ Custom 404 and error handling
- ✅ Global error management
- ✅ Error recovery mechanisms

### 6. Image Optimization
- ✅ Next.js Image component
- ✅ Automatic optimization and WebP
- ✅ Responsive images
- ✅ Placeholders and lazy loading
- ✅ Core Web Vitals optimization

### 7. Metadata & SEO
- ✅ Dynamic metadata generation
- ✅ OpenGraph and Twitter cards
- ✅ Structured data
- ✅ Font optimization
- ✅ Script optimization

### 8. Markdown & MDX
- ✅ MDX support with React components
- ✅ Syntax highlighting
- ✅ Interactive components
- ✅ Custom MDX components
- ✅ Typography styling

### 9. Blog Features
- ✅ Blog post listing with filtering
- ✅ Category and tag filtering
- ✅ Search functionality
- ✅ Sorting and pagination
- ✅ Related posts
- ✅ Author information

### 10. Dark Mode & Customization
- ✅ Dark/light mode toggle
- ✅ Theme persistence with cookies
- ✅ Custom HTML components
- ✅ Accessibility features

### 11. Performance & Deployment
- ✅ Static generation with ISR
- ✅ Edge runtime optimization
- ✅ Vercel deployment ready
- ✅ Performance monitoring
- ✅ Core Web Vitals optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with React components
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Performance**: Lighthouse 100/100

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kannan-blogs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Start the mock JSON server (in another terminal):
```bash
npm run json-server
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # App Router pages
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── gallery/           # Image gallery
│   ├── mdx-demo/          # MDX demonstration
│   ├── about/             # About page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error UI
│   ├── not-found.tsx      # 404 page
│   └── global-error.tsx   # Global error UI
├── components/            # React components
│   ├── ui/               # UI components
│   ├── blog-*.tsx        # Blog components
│   ├── navigation.tsx    # Navigation
│   └── theme-*.tsx       # Theme components
├── data/                 # Mock data
├── lib/                  # Utilities
└── public/               # Static assets
```

## 🎯 Key Concepts Demonstrated

### File-system Routing
- Automatic route generation based on folder structure
- Dynamic routes with `[slug]` parameters
- Nested layouts for shared UI

### Data Fetching Patterns
- Server Components for data fetching
- Client Components for interactivity
- Caching strategies and revalidation
- Error handling and loading states

### Performance Optimization
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Streaming and Suspense
- Core Web Vitals optimization

### Modern Development Practices
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint and Prettier for code quality
- Component composition patterns

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Manual Deployment

```bash
npm run build
npm start
```

## 📊 Performance

- **Lighthouse Performance**: 100/100
- **Lighthouse Accessibility**: 100/100
- **Lighthouse Best Practices**: 100/100
- **Lighthouse SEO**: 100/100

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for deployment platform
- Tailwind CSS for styling utilities
- All contributors and the open-source community


