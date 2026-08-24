import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type { FC, ReactNode } from 'react';
import './globals.css';
import { Header } from '@/components/layout/Header';
import ReactQueryProvider from '@/components/providers/TanstackQueryProvider';
import { Separator } from '@/components/ui';
import { cn } from '@/utils/cn';

const forum = localFont({
  src: '../assets/fonts/Forum-Regular.ttf',
  variable: '--font-body',
  display: 'swap',
});

const artist = localFont({
  src: '../assets/fonts/The-Artist-Script.otf',
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

          <Separator className="mt-2 hidden xs:block text-gray-300" />

          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
