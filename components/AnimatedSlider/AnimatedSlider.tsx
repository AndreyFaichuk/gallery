'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

type AnimatedSliderProps = {
  shouldStopForward?: boolean;
  shouldStopBackward?: boolean;
  direction: number;
  id: string | number;
  handleIncreaseIndex: () => void;
  handleDecreaseIndex: () => void;
  setIsAnimating: (isAnimating: boolean) => void;
  children: ReactNode;
};

export const AnimatedSlider: FC<AnimatedSliderProps> = ({
  direction,
  id,
  handleIncreaseIndex,
  handleDecreaseIndex,
  setIsAnimating,
  children,
  shouldStopBackward = false,
  shouldStopForward = false,
}) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={id}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.3, ease: 'easeOut' }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          const threshold = 80;

          if (info.offset.x < -threshold) {
            if (shouldStopForward) return;

            handleIncreaseIndex();
          }

          if (info.offset.x > threshold) {
            if (shouldStopBackward) return;

            handleDecreaseIndex();
          }
        }}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
