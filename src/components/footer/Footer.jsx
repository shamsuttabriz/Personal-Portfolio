import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div
            className='bg-slate-900 text-slate-400 py-5 text-center font-semibold flex justify-center item-center md:h-16npm'
        >
            <div className='flex-row md:mb-0  md:flex justify-between items-center w-full md:w-10/12 px-5 md:px-24'>
                <div className='text-sm md:text-lg py-4 md:py-0 mt-3 md:mt-0'>&copy; All rights reserved by Md. Shamsut Tabriz </div>
                <div className='flex justify-center items-center space-x-5 my-3 md:my-0 md:mt-0'>
                    <a className='bg-slate-900 text-slate-400 text-md p-3 block w-10 rounded-full hover:scale-105 duration-200 shadow-md shadow-slate-500 ' href="https://www.linkedin.com/in/shamsuttabriz/" target='_blank'><FaLinkedin /></a>
                    <a className='bg-slate-900 text-slate-400 text-md p-3 block w-10 rounded-full hover:scale-105 duration-200 shadow-md shadow-slate-500 ' href="https://github.com/shamsuttabriz" target='_blank'><FaGithub /></a>
                    <a className='bg-slate-900 text-slate-400 text-md p-3 block w-10 rounded-full hover:scale-105 duration-200 shadow-md shadow-slate-500 ' href="https://www.facebook.com/shamsuttabriz0/" target='_blank'><FaFacebook /></a>
                    <a className='bg-slate-900 text-slate-400 text-md p-3 block w-10 rounded-full hover:scale-105 duration-200 shadow-md shadow-slate-500 ' href="https://www.youtube.com/channel/UCgu4VulE82WGuA5_OaSqPZQ" target='_blank'><FaYoutube /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;