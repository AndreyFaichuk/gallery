'use client';

import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/home" className="w-[120px]">
      <div className="flex items-center gap-1 relative">
        <span className="font-body text-[60px] absolute left-[50px] top-[-40px]">JB</span>
        <span className="font-artist absolute left-[80px] text-[50px] top-[0px]">Atelier</span>
      </div>
    </Link>
  );
};
