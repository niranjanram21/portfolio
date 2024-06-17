import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import html from '../Assets/LottieFiles/html.json';
import css from '../Assets/LottieFiles/css.json';
import js from '../Assets/LottieFiles/javascript.json';
import mongodb from '../Assets/LottieFiles/mongo.json';
import express from '../Assets/LottieFiles/expressjs.json';
import react from '../Assets/LottieFiles/reactjs.json';
import node from '../Assets/LottieFiles/nodejs.json';


const Skills = () => {
    return (
        <div className="py-6 sm:py-6 lg:py-4 opacity-80">
           


            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="grid gap-8 grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-12">
                    {[
                        { src: html, label: "HTML5" },
                        { src: css, label: "CSS3" },
                        { src: js, label: "JavaScript", customStyle: "relative top-4" },
                        { src: mongodb, label: "MongoDB" },
                        { src: express, label: "Express.js", size: "small" },
                        { src: react, label: "React.js", size: "small" },
                        { src: node, label: "Node.js" },
                    ].map((skill, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className={`overflow-hidden rounded-full shadow-lg ${skill.size === "small" ? "mt-4 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" : "h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"} ${skill.customStyle || ""}`}>
                                <Player
                                    autoplay
                                    loop
                                    speed={1.5}
                                    src={skill.src}
                                    className="h-full w-full"
                                />
                            </div>
                            <div className="mt-2">
                                <div className="text-center font-bold bg-gradient-to-r from-slate-100 to-red-400 text-transparent bg-clip-text md:text-lg">
                                    {skill.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='border border-red-400 opacity-30 mx-8 lg:mx-20 my-4 lg:my-8' />

        </div>
    );
}

export default Skills;
