import { useEffect, useMemo } from 'react';
import { animate } from 'motion';
import { useMotionValue } from 'motion/react';

import { DEFAULT_DURATION, DEFAULT_SCALE } from '../constants';

interface UseImpulseAnimationOptions {
  duration?: number;
  maxScale?: number;
  immediate?: boolean;
}

const DEFAULT_MAX_SCALE = 1.5;

export const useImpulseAnimation = (options?: UseImpulseAnimationOptions) => {
  const scale = useMotionValue(DEFAULT_SCALE);
  const controls = useMemo(
    () =>
      animate(
        scale,
        [DEFAULT_SCALE, options?.maxScale ?? DEFAULT_MAX_SCALE, DEFAULT_SCALE],
        {
          duration: options?.duration ?? DEFAULT_DURATION,
          ease: 'easeOut',
          repeat: Infinity,
        },
      ),
    [],
  );

  useEffect(() => {
    if (options?.immediate) controls.play();
  }, []);

  return {
    scale,
    controls,
  };
};
