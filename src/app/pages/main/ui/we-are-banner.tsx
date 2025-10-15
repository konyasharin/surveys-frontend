import { FC, useRef } from 'react';
import clsx from 'clsx';
import { motion, useInView } from 'motion/react';

import { WE_ARE_BANNER_CONFIG as CONFIG } from '../constants';

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
          initial={CONFIG.PUSHED_TEXT_INITIAL('bottom')}
          animate={inView ? CONFIG.PUSHED_TEXT_ANIMATE('bottom') : {}}
          transition={CONFIG.PUSHED_TEXT_TRANSITION}
        >
          We
        </motion.p>
        <span>&nbsp;</span>
        <motion.p
          initial={CONFIG.PUSHED_TEXT_INITIAL('top')}
          animate={inView ? CONFIG.PUSHED_TEXT_ANIMATE('top') : {}}
          transition={CONFIG.PUSHED_TEXT_TRANSITION}
        >
          are
        </motion.p>
      </div>
      <motion.p
        className={BASE_TEXT_CLASS}
        initial={{ x: CONFIG.X_OFFSET, opacity: CONFIG.HIDE_OPACITY }}
        animate={
          inView ? { opacity: CONFIG.SHOW_OPACITY, x: CONFIG.BASE_OFFSET } : {}
        }
        transition={{
          duration: CONFIG.PUSHING_TEXT_DURATION,
          delay: CONFIG.PUSHED_TEXT_DURATION - CONFIG.PUSHING_TEXT_DURATION,
        }}
      >
        Surveys
      </motion.p>
    </div>
  );
};
