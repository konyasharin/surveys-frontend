import { FC, useRef } from 'react';
import clsx from 'clsx';
import { motion, useInView } from 'motion/react';

import {
  BASE_OFFSET,
  HIDE_OPACITY,
  PUSHED_TEXT_ANIMATE,
  PUSHED_TEXT_INITIAL,
  PUSHED_TEXT_TRANSITION,
  SHOW_OPACITY,
  X_OFFSET,
} from '../constants';

const BASE_TEXT_CLASS =
  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white';

export const WeAreBanner: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 'all' });

  return (
    <div
      ref={ref}
      className={
        'relative h-32 bg-black border border-gray-500 overflow-hidden'
      }
    >
      <div className={clsx('flex', BASE_TEXT_CLASS)}>
        <motion.p
          initial={PUSHED_TEXT_INITIAL('bottom')}
          animate={inView ? PUSHED_TEXT_ANIMATE('bottom') : {}}
          transition={PUSHED_TEXT_TRANSITION}
        >
          We
        </motion.p>
        <span>&nbsp;</span>
        <motion.p
          initial={PUSHED_TEXT_INITIAL('top')}
          animate={inView ? PUSHED_TEXT_ANIMATE('top') : {}}
          transition={PUSHED_TEXT_TRANSITION}
        >
          are
        </motion.p>
      </div>
      <motion.p
        className={BASE_TEXT_CLASS}
        initial={{ x: X_OFFSET, opacity: HIDE_OPACITY }}
        animate={inView ? { opacity: SHOW_OPACITY, x: BASE_OFFSET } : {}}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        Surveys
      </motion.p>
    </div>
  );
};
