'use client';

import { motion } from 'framer-motion';
import { useRef, RefObject } from 'react';
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
      className="absolute top-[170px] left-0 w-full px-4 mt-2"
    >
      <div ref={ref} className="rounded-3xl bg-white/60 backdrop-blur-md p-6 shadow-lg">
        <nav className="flex flex-col gap-4 text-lg">
          <button onClick={onClose} className="text-left">
            all paintings
          </button>

          <button onClick={onClose} className="text-left">
            about me
          </button>
        </nav>
      </div>
    </motion.div>
  );
};
