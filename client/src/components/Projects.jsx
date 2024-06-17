import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import trendhub from '../Assets/images/trendhub.png';
import yumease from '../Assets/images/yumease.png';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import arrowlogo from '../Assets/LottieFiles/arrowlogo.json';


const Projects = () => {
  return (
    <div>
      <section className="text-slate-400 body-font mt-4 lg:mt-12">
        <div className='text-center font-extrabold text-2xl lg:text-4xl my-2 lg:my-4 flex flex-col justify-center items-center hover:cursor-pointer'>
          <span className='bg-gradient-to-r from-slate-400 to-blue-500 text-transparent bg-clip-text'>Projects</span>
          <span className=''>
            <Player
              autoplay
              loop
              speed={1.5}
              src={arrowlogo}
              className="h-20 w-20"
            />
          </span>
        </div>

        {/* Project 1 */}
        <div className="container flex px-2 lg:px-20 md:px-10 sm:px-10 py-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium bg-gradient-to-r from-blue-300 to-red-300 text-transparent bg-clip-text">
              TrendHub : An E-commerce Clothing App
            </h1>
            <p className="mb-8 leading-relaxed italic">
              An E-commerce app based on React JS, where you can find a list of clothing items categorized as men, women and kids. An admin panel is used to add or delete products in the database.
            </p>

            <div className='flex flex-row gap-4 flex-wrap mb-6'>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#HTML5</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#CSS3</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#JavaScript</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#React js</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Tailwind</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Node js</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Mongob DB</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Express</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Swiper js</button>
            </div>

            <div className="flex flex-row gap-4 justify-center">
              <div className="flex flex-row gap-2 text-slate-100 bg-gradient-to-r from-red-600 to-slate-800 bg-opacity-20 border-0 py-2 px-4 lg:py-3 lg:px-6 focus:outline-none hover:bg-opacity-50 rounded-full text-sm transition ease-in-out delay-50  hover:scale-110 duration-150 hover:cursor-pointer">
                <button>view demo </button>
                <FaExternalLinkAlt className='relative top-1' />
              </div>
              <div className="flex flex-row gap-2 text-slate-100 border border-slate-100 outline-slate-100 bg-opacity-20 py-2 px-4 lg:py-3 lg:px-6 focus:outline-none hover:bg-opacity-50 hover:bg-red-50 rounded-full text-sm transition ease-in-out delay-50 hover:scale-110 duration-150 hover:cursor-pointer">
                <button>github</button>
                <FaGithub className='relative top-1' />
              </div>
            </div>
          </div>
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded h-auto md:h-full" alt="hero" src={trendhub} />
          </div>
        </div>

        <hr className='border border-red-400 opacity-30 mx-8 lg:mx-20 my-4 lg:my-8' />

        {/* Project 2 */}
        <div className="container flex px-2 lg:px-20 md:px-10 sm:px-10 py-8 md:flex-row flex-col items-center">
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded h-auto md:h-full" alt="hero" src={trendhub} />
          </div>
          <div class="lg:flex-grow mt-4 lg:mt-0 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium bg-gradient-to-r from-blue-300 to-red-300 text-transparent bg-clip-text">
            TrendHub : An E-commerce Clothing App
          </h1>
            <p className="mb-8 leading-relaxed italic">
              An E-commerce app based on React JS, where you can find a list of clothing items categorized as men, women and kids. An admin panel is used to add or delete products in the database.
            </p>

            <div className='flex flex-row gap-4 flex-wrap mb-6'>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#HTML5</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#CSS3</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#JavaScript</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#React js</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Tailwind</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Node js</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Mongob DB</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Express</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Swiper js</button>
            </div>

            <div className="flex flex-row gap-4 justify-center">
              <div className="flex flex-row gap-2 text-slate-100 bg-gradient-to-r from-red-600 to-slate-800 bg-opacity-20 border-0 py-2 px-4 lg:py-3 lg:px-6 focus:outline-none hover:bg-opacity-50 rounded-full text-sm transition ease-in-out delay-50  hover:scale-110 duration-150 hover:cursor-pointer">
                <button>view demo </button>
                <FaExternalLinkAlt className='relative top-1' />
              </div>
              <div className="flex flex-row gap-2 text-slate-100 border border-slate-100 outline-slate-100 bg-opacity-20 py-2 px-4 lg:py-3 lg:px-6 focus:outline-none hover:bg-opacity-50 hover:bg-red-50 rounded-full text-sm transition ease-in-out delay-50 hover:scale-110 duration-150 hover:cursor-pointer">
                <button>github</button>
                <FaGithub className='relative top-1' />
              </div>
            </div>
          </div>
        </div>

        <hr className='border border-red-400 opacity-30 mx-8 lg:mx-20 my-4 lg:my-8' />

        {/* Project 3 */}
        <div className="container flex px-2 lg:px-20 md:px-10 sm:px-10 py-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium bg-gradient-to-r from-blue-300 to-red-300 text-transparent bg-clip-text">
              YumEase : A Food Delivery App
            </h1>
            <p className="mb-8 leading-relaxed italic">
              An E-commerce app based on React JS, where you can find a list of clothing items categorized as men, women and kids. An admin panel is used to add or delete products in the database.
            </p>

            <div className='flex flex-row gap-4 flex-wrap mb-6'>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#HTML5</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#CSS3</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#JavaScript</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#React js</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Tailwind</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Node js</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Mongob DB</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Express</button>
              <button className='px-4 py-1 text-sm border border-slate-100 rounded-full'>#Swiper js</button>
            </div>

            <div className="flex flex-row gap-4 justify-center">
              <div className="flex flex-row gap-2 text-slate-100 bg-gradient-to-r from-red-600 to-slate-800 bg-opacity-20 border-0 py-2 px-4 lg:py-3 lg:px-6 focus:outline-none hover:bg-opacity-50 rounded-full text-sm transition ease-in-out delay-50  hover:scale-110 duration-150 hover:cursor-pointer">
                <button>view demo </button>
                <FaExternalLinkAlt className='relative top-1' />
              </div>
              <div className="flex flex-row gap-2 text-slate-100 border border-slate-100 outline-slate-100 bg-opacity-20 py-2 px-4 lg:py-3 lg:px-6 focus:outline-none hover:bg-opacity-50 hover:bg-red-50 rounded-full text-sm transition ease-in-out delay-50 hover:scale-110 duration-150 hover:cursor-pointer">
                <button>github</button>
                <FaGithub className='relative top-1' />
              </div>
            </div>
          </div>
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded h-auto md:h-full" alt="hero" src={yumease} />
          </div>
        </div>
        <hr className='border border-red-400 opacity-30 mx-8 lg:mx-20 my-4 lg:my-8' />


      </section>
    </div>
  );
}

export default Projects;
