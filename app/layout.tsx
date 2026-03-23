import type { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from './lib/utils';
import ReactQueryProvider from './components/providers/tanstack-query-provider';
import { Header } from './components/layout/Header';

const forum = localFont({
  src: './fonts/Forum-Regular.ttf',
  variable: '--font-body',
  display: 'swap',
});

const artist = localFont({
  src: './fonts/The-Artist-Script.otf',
  variable: '--font-artist',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gallery Juliette Bereziy',
  description: 'A gallery of artworks by Juliette Bereziy',
};

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={cn(forum.variable, artist.variable)}>
      <body className="px-60">
        <ReactQueryProvider>
          <Header />
          <main className="flex flex-col gap-4 mt-16 mb-4">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
