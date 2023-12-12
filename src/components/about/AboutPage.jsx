import React from 'react';
import About from '../../assets/about.jpg';
import { LuUser2 } from "react-icons/lu";
import { FaDownload } from "react-icons/fa6";

const AboutPage = () => {
    return (
        <div id='about_me' className='bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900 py-16 md:py-32'>
            <div className='w-10/12 mx-auto'>
                <div className='text-center mb-24'>
                    <p className='text-lg md:text-xl text-slate-400 inline-block bg-slate-900 px-6 md:px-10 py-2 md:py-3 font-bold items-center rounded-ss-2xl md:rounded-ss-3xl rounded-ee-2xl md:rounded-ee-3xl shadow-lg shadow-slate-700'>
                        <span className='inline-block pr-3 text-[16px] md:text-md'><LuUser2 /></span>
                        About Me
                    </p>
                </div>
                <div className='md:flex md:justify-between md:items-center gap-x-12'>
                    <div className='w-full md:w-10/12 bg-slate-700 -rotate-3'>
                        <img className='rotate-6 duration-300' src={About} alt="" />
                    </div>
                    <div className='w-full md:w-10/12 text-md md:text-lg text-slate-400 font-medium mt-12 md:mt-0 space-y-3'>
                        <h1 className='text-xl md:text-4xl font-semibold pl-[2px]'>Hi! I'm Md.Shamsut Tabriz</h1>
                        <h1 className='text-lg md:text-2xl font-semibold pl-[2px]'>Front-End Developer</h1>
                        <p className='text-sm md:text-md leading-6 pl-[2px]'>
                            I'm a front-end developer and competitive programmer. Now I am learning front-end development at Vivasoft Limited. I have solved more than 450 problems in various online judge. Besides this, I have participated in the onsite contest. And learning the following technologies for front-end -
                        </p>
                        <div className='pb-3 pr-2'>
                            <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>HTML</p>
                            <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>CSS</p>
                            <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>JavaScript</p>
                            <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>Bootstrap</p>
                            <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>Tailwind</p>
                            <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>React</p>
                            <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>NextJs</p>
                            <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>Redux</p>
                        </div>
                        <a href='https://drive.google.com/file/d/10x5bztDyf_x0M4zVv5Ej2JgQIJrj2uRB/view?usp=sharing' target='_blank' className='text-sm md:text-md border-2 hover:bg-transparent px-3 md:px-8 py-2 text-slate-300 bg-slate-900 border-slate-600 inline-block duration-200 rounded-sm'>
                            Download CV <span className='pl-2 md:pl-3 inline-block'><FaDownload /></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;