# Kairo Landing Page

A modern and elegant landing page for the **Kairo** mobile productivity app.

## 🚀 Features

- **Modern responsive design** with TailwindCSS
- **Smooth animations** using Framer Motion
- **i18n support** with custom context system
- **Time-based theming** that changes throughout the day
- **Dynamic metadata** for SEO and social sharing
- **Modular components** and reusable architecture
- **Mobile-first** optimized design
- **Random animated backgrounds** with floating shapes
- **Custom typography** with Oswald and Inter fonts

## 🛠️ Tech Stack

- **Next.js 15** with App Router
- **React 18** with functional components
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Custom context system** for language and theme management

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── AIIllustration.tsx
│   ├── Features.tsx
│   ├── PricingPlans.tsx
│   ├── Footer.tsx
│   ├── SharedBackground.tsx
│   └── DynamicMetadata.tsx
├── contexts/
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── utils/
│   └── theme.ts
└── types.ts
public/
└── locales/
    ├── en.json
    └── es.json
```

## 🎨 Components

### Hero Section
- Animated main title with time-based colors
- Subtitle with app slogan
- CTA button with hover effects and dynamic shadows
- Mobile app mockup with scroll simulation
- Time-based background gradients

### AI Illustration
- Central AI brain illustration with theme-based colors
- Floating animated elements (15-30 random particles)
- SVG connection lines with gradient animations
- Random particle positions and timing

### Features
- Grid of main features with theme-based icons
- Emoji icons with hover animations
- Staggered entrance animations
- Additional "coming soon" features section

### Pricing Plans
- Free vs Premium comparison
- Detailed feature comparison table
- Differentiated plan designs
- Final CTA section with theme-based styling

### Footer
- Navigation links
- Language selector
- Brand information
- Legal links

### Shared Background
- Time-based gradient backgrounds
- Random animated floating shapes (6-13 shapes)
- Different colors for day/night themes
- Smooth animations with varying durations

### Dynamic Metadata
- Client-side metadata updates
- Language-specific titles and descriptions
- SEO-optimized meta tags
- Social media sharing optimization

## 🌐 Internationalization

The project includes support for multiple languages using a custom context system:

```typescript
const { t, currentLanguage, changeLanguage } = useLanguage();

// Usage
t("landing.hero.title") // Returns "Kairo"
```

### Translation Files
```json
{
  "landing": {
    "hero": {
      "title": "Kairo",
      "subtitle": "The right time"
    }
  }
}
```

## 🎨 Time-Based Theming

The app features dynamic theming that changes throughout the day:

- **Morning** (5-12): Amber/orange accents
- **Afternoon** (12-17): Sky/indigo accents
- **Evening** (17-21): Orange/rose accents
- **Night** (21-5): Blue accents with enhanced visibility

### Theme Usage
```typescript
const { accentGradient, titleColor, descriptionColor, getBoxShadowRGBA } = useTheme();

// Apply theme colors
<div className={`bg-gradient-to-r ${accentGradient}`}>
<h1 className={titleColor}>Title</h1>
```

## 🚀 Installation and Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kairo-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run in development**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🎯 App Features

### Free Plan
- ✅ Create tasks with priority and duration
- ✅ Daily plan view and editing
- ✅ Basic time block suggestions
- ✅ Focus mode with timer
- ✅ Basic notifications
- ✅ 1 daily AI suggestion

### Premium Plan ($9.99/month)
- ✅ Everything from free plan
- ✅ Complete automatic AI planning
- ✅ Dynamic AI rescheduling
- ✅ Weekly and monthly view
- ✅ Cloud sync and backup
- ✅ Personal statistics and habits
- ✅ More active tasks and projects
- ✅ Advanced reminders

## 🎨 Color Palette

- **Blues**: `#3B82F6` to `#8B5CF6`
- **Greens**: `#10B981`
- **Yellows**: `#F59E0B`
- **Grays**: `#F9FAFB` to `#1F2937`
- **Backgrounds**: Soft gradients and pastels

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Adaptive grid** for different screen sizes
- **Scalable typography** with responsive classes

## 🔧 Customization

### Change colors
Modify Tailwind classes in components or update the `tailwind.config.ts` file.

### Add languages
1. Add new translations in `public/locales/`
2. Update the language selector in `Footer.tsx`

### Modify animations
Adjust Framer Motion properties in each component according to your preferences.

### Customize themes
Update the time-based theme colors in `src/utils/theme.ts`.

## 📄 License

This project is under the MIT license.

## 🤝 Contributing

Contributions are welcome. Please open an issue or pull request.

---

**Kairo: The right time** ⏰✨
