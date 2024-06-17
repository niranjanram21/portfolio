import React from 'react';
import logo from '../Assets/NR.png'
import { Player } from '@lottiefiles/react-lottie-player';
import githubAnimationData from '../Assets/LottieFiles/github1.json';
import linkedInAnimationData from '../Assets/LottieFiles/linkedin.json';

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto lg:px-12 flex flex-wrap p-3 flex-col md:flex-row items-center">
                <span className="hidden title-font lg:block md:block font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} alt="logo" className='w-20 h-20' />
                    {/* <span className="ml-3 text-xl bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent">Tailblocks</span> */}
                </span>
                <nav className="md:ml-auto text-md lg:text-lg md:mr-auto flex flex-row text-md items-center justify-center mt-4 lg:mt-0">
                    <span className="mr-5 bg-gradient-to-r from-red-400 to-gray-200 bg-clip-text text-transparent hover:cursor-pointer">Home</span>
                    <span className="mr-5 bg-gradient-to-r from-red-400 to-gray-200 bg-clip-text text-transparent hover:cursor-pointer">About Me</span>
                    <span className="mr-5 bg-gradient-to-r from-red-400 to-gray-200 bg-clip-text text-transparent hover:cursor-pointer">Projects</span>
                    <span className="mr-5 bg-gradient-to-r from-red-400 to-gray-200 bg-clip-text text-transparent hover:cursor-pointer">Contact Me</span>
                </nav>

                <div className="flex flex-row">
                    <Player
                        autoplay
                        loop
                        speed={1.5}
                        src={githubAnimationData}
                        style={{ height: '60px', width: '60px' }}
                    />
                    <Player
                        autoplay
                        loop
                        speed={1.5}
                        src={linkedInAnimationData}
                        style={{ height: '60px', width: '60px' }}
                    />

                </div>
            </div>
            <hr className="border-t-1 border-red-500 border-opacity-15 mx-2" />
        </header>
    );
};

export default Header;
