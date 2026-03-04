import { useEffect, useRef, useState } from 'react';

type Props<T> = {
  callback: (value: T) => void;
  initialValue: T;
  delay?: number;
};

const useDebouncedValue = <T>({ callback, initialValue, delay = 500 }: Props<T>) => {
  const [value, setValue] = useState<T>(initialValue);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    timeoutRef.current = setTimeout(() => {
      callback(value);
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay, callback]);

  return { setValue, value };
};

export default useDebouncedValue;
