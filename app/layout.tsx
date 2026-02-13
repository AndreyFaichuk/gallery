import type { FC, ReactNode } from 'react';
import cn from 'classnames';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const forumSans = localFont({
  src: './fonts/Forum-Regular.ttf',
  variable: '--font-forum-sans',
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
    <html lang="en">
      <body className={cn(forumSans.variable)}>{children}</body>
    </html>
  );
};

export default RootLayout;
