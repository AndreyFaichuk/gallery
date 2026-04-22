'use client';

import { MOBILE_MENU_OPTIONS } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { RefObject, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

type Props = {
  onClose: () => void;
};

export const NavigationMenu = ({ onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref as RefObject<HTMLElement>, () => {
    onClose();
  });

  return (
    <motion.div
      initial={{ opacity: 1, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="absolute top-[170px] left-0 w-full px-4 mt-2  z-50"
    >
      <div ref={ref} className="rounded-3xl bg-white/60 backdrop-blur-md p-6 shadow-lg">
        <nav className="flex flex-col gap-2 text-lg">
          {MOBILE_MENU_OPTIONS.map((option) => (
            <Link
              key={option.title}
              href={option.link || '#'}
              onClick={onClose}
              className="block w-full rounded-xl px-4 py-2 hover:bg-black/5 transition"
            >
              {option.title}
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};
