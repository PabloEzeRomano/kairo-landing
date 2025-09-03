'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const metadata = {
  es: {
    title: 'Kairo – El tiempo oportuno | App de productividad con IA',
    description:
      'Transformá tu productividad con Kairo, la app que usa inteligencia artificial para ayudarte a planificar tu día de forma inteligente y con intención.',
    keywords: 'productividad, IA, planificación, tareas, tiempo, app móvil',
    openGraph: {
      title: 'Kairo – El tiempo oportuno',
      description: 'App de productividad con IA para aprovechar mejor tu día.',
    },
  },
  en: {
    title: 'Kairo – The right time | AI productivity app',
    description:
      'Kairo helps you make the most of your time. Powered by AI, it helps you plan your day with intention and clarity.',
    keywords: 'productivity, AI, planner, tasks, time management, mobile app',
    openGraph: {
      title: 'Kairo – The right time',
      description: 'An AI productivity app to help you act at the right time.',
    },
  },
};

export const DynamicMetadata = () => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const currentMetadata = metadata[currentLanguage as keyof typeof metadata];

    // Update document title
    document.title = currentMetadata.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', currentMetadata.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', currentMetadata.keywords);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', currentMetadata.openGraph.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', currentMetadata.openGraph.description);

    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', currentMetadata.openGraph.title);

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', currentMetadata.openGraph.description);

    // Update html lang attribute
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return null; // This component doesn't render anything
};
