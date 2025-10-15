import { ComponentProps } from 'react';
import { motion } from 'motion/react';

type PProps = ComponentProps<typeof motion.p>;
type PushedTextSide = 'top' | 'bottom';

export const Y_OFFSET = 100;
export const X_OFFSET = 300;
export const BASE_OFFSET = 0;

export const HIDE_OPACITY = 0;
export const SHOW_OPACITY = 1;

export const PUSHING_TEXT_DURATION = 0.5;

export const PUSHED_TEXT_DURATION = 2;
export const PUSHED_TEXT_Y_OFFSET: Record<PushedTextSide, number> = {
  top: -Y_OFFSET,
  bottom: Y_OFFSET,
};

export const PUSHED_TEXT_ANIMATE = (
  side: PushedTextSide,
): PProps['animate'] => ({
  opacity: [HIDE_OPACITY, SHOW_OPACITY, SHOW_OPACITY, HIDE_OPACITY],
  y: [PUSHED_TEXT_Y_OFFSET[side], BASE_OFFSET, BASE_OFFSET, BASE_OFFSET],
  x: [BASE_OFFSET, BASE_OFFSET, BASE_OFFSET, -X_OFFSET],
});

export const PUSHED_TEXT_INITIAL = (
  side: PushedTextSide,
): PProps['initial'] => ({
  y: PUSHED_TEXT_Y_OFFSET[side],
  opacity: HIDE_OPACITY,
});

export const PUSHED_TEXT_TRANSITION: PProps['transition'] = {
  duration: PUSHED_TEXT_DURATION,
  times: [0, 0.3, 0.82, 1],
  ease: 'easeIn',
};
