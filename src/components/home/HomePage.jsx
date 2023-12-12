import React from 'react';
import Social from './Social';
import { FaDownload } from "react-icons/fa6";
import { Link } from 'react-scroll';

const HomePage = () => {
    return (
        <div id='home' className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center md:flex-row h-screen'>
            <div className='p-5 w-full md:w-10/12 flex justify-center items-center'>
                <div className='space-y-5 px-[5px] md:px-5 pt-28 pb-8 text-center'>
                    <p className=' text-slate-500 font-semibold text-md md:text-lg'>Hello, I'm </p>
                    <h1 className='text-4xl md:text-7xl font-bold text-slate-300'>
                        Shamsut Tabriz
                    </h1>
                    <p className=' text-slate-500 font-semibold text-md md:text-lg pb-6 '>Front-End Developer</p>
                    <div className='mt-10 space-x-4 md:space-x-6 flex justify-center items-center'>
                        <a href='https://drive.google.com/file/d/10x5bztDyf_x0M4zVv5Ej2JgQIJrj2uRB/view?usp=sharing' target='_blank' className='text-sm md:text-md border-2 hover:bg-transparent px-3 md:px-8 py-2 text-slate-300 bg-slate-900 border-slate-600 duration-200 flex justify-between items-center rounded-sm'>
                            Resume <span className='pl-2 md:pl-3'><FaDownload /></span>
                        </a>
                        <button className='cursor-pointer text-sm md:text-md border-2 hover:bg-transparent px-3 md:px-8 py-2 text-slate-300 bg-slate-900 border-slate-600 duration-200  rounded-sm'>
                            Let's Talk
                        </button>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <Social />
            </div>
        </div>
    )
}

export default HomePage;