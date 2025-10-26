import { useState, useEffect, RefObject } from 'react';

interface ElementPosition {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export function useElementPosition(ref: RefObject<HTMLElement>): ElementPosition | null {
  const [position, setPosition] = useState<ElementPosition | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setPosition({
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY,
          right: rect.right + window.scrollX,
          bottom: rect.bottom + window.scrollY,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updatePosition(); // Initial position

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [ref]);

  return position;
}
