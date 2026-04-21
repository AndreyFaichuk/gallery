'use client';

import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/home" className="w-[120px]">
      <div className="flex items-center gap-1 relative">
        <span className="font-body text-[60px] absolute left-[60px] top-[-20px]">JB</span>
        <span className="font-artist absolute left-[90px] text-[50px] top-[25px]">Atelier</span>
      </div>
    </Link>
  );
};
