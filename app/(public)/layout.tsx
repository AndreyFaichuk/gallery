import { FC, ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Separator } from '@/components/ui';

type PublicLayoutProps = {
  children: ReactNode;
};

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-60">
      <main className="mb-4 flex flex-col gap-4">{children}</main>
    </div>
  );
};

export default PublicLayout;
