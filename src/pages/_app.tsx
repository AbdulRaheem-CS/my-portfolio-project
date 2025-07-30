// src/pages/_app.tsx
import '../styles/globals.css';  // Import global styles with Tailwind

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
