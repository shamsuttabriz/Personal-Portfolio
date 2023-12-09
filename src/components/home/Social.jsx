import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Social = () => {
    return (
        <div className=' md:fixed md:bottom-0 md:left-10 z-10'>
            <div className='flex md:flex-col items-center justify-center space-x-5 md:space-x-0 md:space-y-5 mt-16'>
                <a className='bg-slate-900 text-slate-400 text-md p-3 block w-10 rounded-full hover:scale-105 duration-200 shadow-md shadow-slate-500 ' href="https://www.linkedin.com/in/shamsuttabriz/" target='_blank'><FaLinkedin /></a>
                <a className='bg-slate-900 text-slate-400 text-md p-3 block w-10 rounded-full hover:scale-105 duration-200 shadow-md shadow-slate-500 ' href="https://github.com/shamsuttabriz/" target='_blank'><FaGithub /></a>
                <a className='bg-slate-900 text-slate-400 text-md p-3 block w-10 rounded-full hover:scale-105 duration-200 shadow-md shadow-slate-500 ' href="https://www.facebook.com/shamsuttabriz0/" target='_blank'><FaFacebook /></a>
                <a className='bg-slate-900 text-slate-400 text-md p-3 block w-10 rounded-full hover:scale-105 duration-200 shadow-md shadow-slate-500 ' href="https://www.youtube.com/channel/UCgu4VulE82WGuA5_OaSqPZQ" target='_blank'><FaYoutube /></a>
                <p className="after:content-[''] w-[2px] h-20 bg-slate-700 hidden md:block"></p>
            </div>
        </div>
    )
}

export default Social;