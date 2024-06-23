'use client';
import { ReactNode, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { NavigationEvents } from '@/log/NavigationEvents';
import PageTransition from '@/components/animation/PageTransition';
import StairTransition from '@/components/animation/StairTransition';

const Teamplate = ({ children }: { children: ReactNode }) => {
  const path = usePathname();

  return (
    <>
      {path === '/' ? (
        <>
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={path}
            initial={{
              opacity: 0,
              y: -1,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.6,
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}

      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>
    </>
  );
};

export default Teamplate;
