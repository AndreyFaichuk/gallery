import { useState } from 'react';

export const useSlideContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);

  const handleIncreaseIndex = () => {
    if (isAnimating) return;

    setDirection(1);

    setCurrentIndex((prev) => {
      return prev + 1;
    });
  };

  const handleDecreaseIndex = () => {
    if (isAnimating) return;

    setDirection(-1);

    setCurrentIndex((prev) => {
      return prev - 1;
    });
  };

  return {
    currentIndex,
    direction,
    isAnimating,
    setIsAnimating,
    handleIncreaseIndex,
    handleDecreaseIndex,
  };
};
