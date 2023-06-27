import React from 'react';

import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';

const Tech = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
    >
      <div className='flex flex-row flex-wrap justify-center gap-16'>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28'
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt={''}
            />
            <h1 className='flex justify-center text-secondary'>
              {technology.name}
            </h1>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, '');
