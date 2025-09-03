import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import type { Metadata, Viewport } from 'next';
import { Oswald, Inter, DM_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import { DynamicMetadata } from '@/components/DynamicMetadata';

import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Kairo - El tiempo oportuno | App de productividad con IA',
  description:
    'Transforma tu productividad con Kairo, la app que usa inteligencia artificial para ayudarte a planificar tu día de manera inteligente y eficiente.',
  keywords: 'productividad, IA, planificación, tareas, tiempo, app móvil',
  authors: [{ name: 'Kairo Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Kairo - El tiempo oportuno',
    description: 'App de productividad con IA para maximizar tu tiempo',
    type: 'website',
    locale: 'es_ES',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${oswald.className} ${inter.className} ${dmSans.className} antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <DynamicMetadata />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
