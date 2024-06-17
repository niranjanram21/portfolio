import React from 'react';
import arrowlogo from '../Assets/LottieFiles/arrowlogo.json';
import { Player } from '@lottiefiles/react-lottie-player';
import profilepic from '../Assets/images/profilePic.jpg'

const About = () => {
  return (
    <section className="text-gray-600 body-font">

      <div className="container px-5 py-12 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className='text-center font-extrabold text-2xl lg:text-4xl my-2 lg:my-4 flex flex-col justify-center items-center hover:cursor-pointer'>
            <span className='bg-gradient-to-r from-slate-400 to-blue-500 text-transparent bg-clip-text'>About Me</span>
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

          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img src={profilepic} alt="" className='rounded-full opacity-95' />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 bg-gradient-to-r from-slate-200 to-red-600 text-transparent bg-clip-text text-lg">
                  Niranjan Ram
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Hi there, I'm a web developer based in Mumbai, India.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-red-400  sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                A passionate MERN stack developer with a strong inclination towards frontend development. I specialize in crafting intuitive and responsive user interfaces using React.js. With a solid understanding of HTML, CSS, and JavaScript, I enjoy transforming design mockups into engaging web applications. My experience with Node.js and Express ensures seamless integration between the frontend and backend. Eager to learn and adapt, I am committed to delivering high-quality code and improving user experiences. I'm excited to bring my skills and enthusiasm to a dynamic team and contribute to impactful projects.
              </p>
              <span
                href="#"
                className="text-indigo-500 inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
