import { Inter } from 'next/font/google';
import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

const DefaultLayout = (children: ReactElement) => children;

export default function App({ Component, pageProps }: AppProps) {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{}}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
