'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="relative h-full w-full">
      {/* image */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.4,
            ease: 'easeIn',
          },
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: 'easeInOut',
            },
          }}
          className="absolute ml-3.5 mt-4 h-[230px] w-[250px] xl:mt-7 xl:h-[400px] xl:w-[450px]"
        >
          <Image
            src={'/profile3.webp'}
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
      </motion.div>
      {/* circle */}
      <motion.svg
        className={'h-[270px] w-[270px] xl:h-[470px] xl:w-[470px]'}
        fill={'transparent'}
        viewBox={'0 0 506 506'}
        xmlns={'http://www.w3.org/2000/svg'}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.4,
            duration: 0.4,
            ease: 'easeInOut',
          },
        }}
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke={'#00ff99'}
          strokeWidth={'4'}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
          initial={{
            strokeDasharray: '24 10 0 0',
          }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
