import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { resume } from '../constants';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a creative Full-Stack Web Developer with a background in music and
        management. My passion for problem solving and detail are skills I've
        acquired over time after about 15 years of working in direct client
        contact. With more than 10 years of experience leading a bass section in
        an orchestra, I consider team spirit at work an essential point in the
        development of unique applications. I decided to change career after
        wanting to give myself a new challenge, combining my love for technology
        and my knowledge about programming acquired through my hobbies. My
        career goal is to belong to a frontend team in a company that shares the
        same values as mine and that I can add something with my personality and
        knowledge.
      </motion.p>
      <div className='mt-10 flex flex-wrap gap-10 justify-center'>
        <button
          className=' bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          onClick={() => window.open(resume, '_blank')}
        >
          Resume
        </button>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
