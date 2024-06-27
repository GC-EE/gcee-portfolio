'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const totalSteps = 6;
const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

// calculate, the reverse index for staggred delay
const reverseIndex = (index: number) => {
  return totalSteps - index - 1;
};

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 flex h-screen w-screen">
            {Array.from({ length: totalSteps }).map((_, index) => {
              return (
                <motion.div
                  key={index}
                  variants={stairAnimation}
                  initial="initial"
                  animate="animate"
                  exit={'exit'}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: reverseIndex(index) * 0.1,
                  }}
                  className="relative h-full w-full bg-white"
                  style={{ transform: 'scale(1.01)' }}
                />
              );
            })}
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
