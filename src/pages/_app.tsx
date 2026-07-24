// src/pages/_app.tsx
import '../styles/globals.css';  // Import global styles with Tailwind

import type { AppProps } from 'next/app';
import { Sora, Manrope } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${sora.variable} ${manrope.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
