import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [navBar, setNavBar] = useState(false);
    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'About Us' },
        { id: 3, link: 'Skills' },
        { id: 4, link: 'Works' },
        { id: 5, link: 'Contact Us' },
    ]
    return (
        <div className='flex justify-between items-center w-full h-16 md:h-20 bg-slate-900 shadow-xl shadow-slate-800 fixed top-0 z-20'>
            <div className='md:pl-6'>
                <a href='#' className="text-md md:text-xl font-semibold border-2 border-slate-400 px-3 py-1 ml-5 font-signature text-slate-400">S-Tabriz</a>
            </div>
            <ul className='space-x-5 pr-5 mr-5 hidden md:flex'>
                {
                    links.map(({ id, link }) => (<li key={id} className=' font-medium cursor-pointer capitalize text-slate-400 hover:text-slate-300 duration-200'>
                        <Link to={link} smooth duration={500} >{link}</Link>
                    </li>
                    ))
                }
            </ul>
            <div onClick={() => setNavBar(!navBar)} className='pr-3 mr-3 text-slate-400 hover:text-slate-300 cursor-pointer z-10 md:hidden'>
                {navBar ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>

            {navBar && (
                <ul className='flex space-y-5 flex-col justify-start items-end pr-6 py-5 w-6/12 absolute top-[4rem] md:top-20 right-0 h-screen bg-slate-900 text-slate-400 border-t-2 border-slate-800 md:hidden shadow-md shadow-slate-600'>
                    {
                        links.map(link => (<li key={link.id} className='text-xl font-medium cursor-pointer capitalize hover:text-slate-300'>{link.link}</li>))
                    }
                </ul>
            )}
        </div>
    );
}

export default NavBar;