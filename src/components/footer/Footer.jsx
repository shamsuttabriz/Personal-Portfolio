import React from 'react'

const Footer = () => {
    return (
        <div
            name="contact"
            className='bg-slate-900 text-slate-400 py-5 text-center font-semibold flex justify-center item-center md:h-16npm'
        >
            <div className='flex-row md:mb-0  md:flex justify-between items-center w-full md:w-10/12 px-5 md:px-24'>
                <div>&copy; Design By: Tabriz For <span>Learnathon2.0</span></div>
                <div className='space-x-5 mt-5 md:mt-0'>
                    <a className='w-8 h-8 text-center inline-block rounded-full text-sm border-2 border-slate-500 p-[5px]' href="#">H</a>
                    <a className='w-8 h-8 text-center inline-block rounded-full text-sm border-2 border-slate-500 p-[5px]' href="#">H</a>
                    <a className='w-8 h-8 text-center inline-block rounded-full text-sm border-2 border-slate-500 p-[5px]' href="#">H</a>
                    <a className='w-8 h-8 text-center inline-block rounded-full text-sm border-2 border-slate-500 p-[5px]' href="#">H</a>
                    <a className='w-8 h-8 text-center inline-block rounded-full text-sm border-2 border-slate-500 p-[5px]' href="#">H</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;