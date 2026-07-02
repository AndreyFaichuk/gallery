import type { FC, ReactNode } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { cn } from './lib/utils';
import ReactQueryProvider from './components/providers/tanstack-query-provider';
import { Header } from './components/layout/Header';
import { Separator } from './components/ui';

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
      <body>
        <ReactQueryProvider>
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-60">
            <Header />
          </div>

          <Separator className="mt-2 hidden xs:block text-gray-300 shadow-[0_5px_13px_rgba(0,0,0,0.7)]" />

          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-60">
            <main className="mb-4 flex flex-col gap-4">{children}</main>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
