import React from 'react';
import { Tilt } from 'react-tilt';
import { styles } from '../../styles';
import profileImg from './rui.jpg';

import { resume } from '../../assets';

const ProfileImg = () => (
  <>
    <div
      className={`absolute inset-0 top-[250px]  max-w-7xl mx-auto ${styles.paddingX} flex sm:flex-row flex-col gap-5 justify-evenly items-center`}
    >
      <Tilt className='xl:w-[350px] md:w-[250px] w-[150px] mt-20'>
        <div className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'>
          <div className='bg-tertiary rounded-[20px] py-5 px-5  flex justify-evenly items-center'>
            <img
              src={profileImg}
              alt='rui'
              className='object-fill'
            />
          </div>
        </div>
      </Tilt>
      <div className=' flex-row flex gap-12 justify-center item-center mb-12'>
        <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div className='bg-tertiary rounded-[20px] py-1 px-1'>
            <button
              className=' bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary '
              onClick={() => window.open(resume, '_blank')}
            >
              Resume
            </button>
          </div>
        </div>
        <div className=' green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div className='bg-tertiary rounded-[20px] py-1 px-1'>
            <button
              className=' bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              onClick={() => window.open(resume, '_blank')}
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ProfileImg;
