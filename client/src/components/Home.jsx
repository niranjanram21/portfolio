import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import heroSection from '../Assets/LottieFiles/heroSection1.json';

const Home = () => {
  return (
    <section className="text-slate-300 body-font">
      <div className="container mx-auto flex px-5 py-6 lg:pt-10 lg:pb-8 md:flex-row flex-col items-center">
        <div className="ml-2 md:ml-6 lg:ml-12 md:w-1/2 lg:pr-16 md:pr-8 flex flex-col gap-0 lg:gap-2 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="title-font text-xl lg:text-2xl mb-4 font-medium text-slate-600">
            Myself
            <span className='text-2xl lg:text-4xl bg-gradient-to-r from-blue-400 to-red-400 text-transparent bg-clip-text font-extrabold'> NIRANJAN RAM</span>
            <br className="hidden lg:inline-block" />
          </div>
          <div className="title-font text-xl lg:text-2xl mb-4 font-medium text-slate-600">
            I'm a
            <span className='text-2xl lg:text-4xl bg-gradient-to-r from-slate-200 to-red-600 text-transparent bg-clip-text font-bold'> Web Developer </span>
            based in INDIA
          </div>
          <p className="mb-4 leading-relaxed">
            To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. Secure a responsible career opportunity to fully utilize my training and skills, while contributing significantly to the company's success.          </p>
          <div className="flex flex-row gap-4 justify-center">
            <button className="inline-flex text-slate-100 bg-gradient-to-r from-red-600 to-slate-800 bg-opacity-20 border-0 py-2 px-4 lg:py-3 lg:px-6 focus:outline-none hover:bg-opacity-50 rounded-full text-sm transition ease-in-out delay-50  hover:scale-110 duration-150 ">
              Download Resume
            </button>
            <button className="inline-flex text-slate-100 border border-slate-100 outline-slate-100 bg-opacity-20 py-2 px-4 lg:py-3 lg:px-6 focus:outline-none hover:bg-opacity-50 hover:bg-gray-600 rounded-full text-sm transition ease-in-out delay-50 hover:scale-110 duration-150">
              Connect with me
            </button>
          </div>
        </div>
        <div className="lg:max-w-md lg:ml-auto lg:w-full md:w-1/2 w-3/5">
          <Player
            autoplay
            loop
            speed={1.5}
            src={heroSection}
            style={{ height: 'auto', width: '100%' }}
          />
        </div>
      </div>
     
    </section>
  );
}

export default Home;
