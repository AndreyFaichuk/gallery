import type { FC, ReactNode } from 'react';

type StandaloneLayoutProps = {
  children: ReactNode;
};

const StandaloneLayout: FC<StandaloneLayoutProps> = ({ children }) => {
  return (
    <div>
      <main className="mb-4 flex flex-col gap-4">{children}</main>
    </div>
  );
};

export default StandaloneLayout;
