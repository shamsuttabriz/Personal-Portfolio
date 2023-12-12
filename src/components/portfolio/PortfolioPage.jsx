import React from 'react';
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import eCommerce from '../../assets/portfolio/eCommerce.png';
import restaurant from '../../assets/portfolio/restaurant.png';
import tChicken from '../../assets/portfolio/tChicken.png';
import tynione from '../../assets/portfolio/tynione.png';
import weatherChecker from '../../assets/portfolio/weatherChecker.png';
import todoList from '../../assets/portfolio/todoList.png';


const PortfolioPage = () => {
    const works = [
        { id: 1, src: tynione, title: 'Tynione', demo: 'https://shamsuttabriz.github.io/tynione/', code: 'https://github.com/shamsuttabriz/tynione' },
        { id: 2, src: weatherChecker, title: 'Weather-Checker', demo: 'https://shamsuttabriz.github.io/Weather-Checker/', code: 'https://github.com/shamsuttabriz/Weather-Checker' },
        { id: 3, src: todoList, title: 'Todo-List', demo: 'https://learnathon2-0-todo-list.vercel.app/', code: 'https://github.com/shamsuttabriz/Learnathon2.0-TodoList' },
        { id: 4, src: tChicken, title: 'T-Chicken', demo: 'https://shamsuttabriz.github.io/T-Chicken/', code: 'https://github.com/shamsuttabriz/T-Chicken' },
        { id: 5, src: restaurant, title: 'Restaurant Bill Management', demo: 'https://github.com/shamsuttabriz/restaurantsMakeBill', code: 'https://github.com/shamsuttabriz/restaurantsMakeBill' },
        { id: 6, src: eCommerce, title: 'E-commerce', demo: 'https://four-team.surge.sh/', code: 'https://github.com/shamsuttabriz/ema-jhon-simple' }
    ]
    return (
        <div id="works" className='bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900 py-12 md:py-32'>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-10/12 md:w-8/12 py-5 clear-both'>
                    <div className='text-center mb-24'>
                        <p className='text-lg md:text-xl text-slate-400 inline-block bg-slate-900 px-6 md:px-10 py-2 md:py-3 font-bold items-center rounded-ss-2xl md:rounded-ss-3xl rounded-ee-2xl md:rounded-ee-3xl shadow-lg shadow-slate-700'>
                            <span className='inline-block pr-3 text-[16px] md:text-md'><MdOutlineWorkOutline /></span>
                            My Works
                        </p>
                    </div>
                    <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-8'>
                        {
                            works.map(({ id, src, title, demo, code }) => (
                                <div key={id} className='bg-slate-900 shadow-md shadow-gray-700 rounded-md p-4 '>
                                    <img className='w-full rounded-md duration-200 ' src={src} alt="Personal Work" />
                                    <div className='pb-3 pr-2 text-slate-400 mt-5'>
                                        <h1 className='text-md font-semibold'>{title}</h1>
                                    </div>
                                    <div className='pb-3 pr-2 text-slate-400 '>
                                        <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>HTML</p>
                                        <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>CSS</p>
                                        <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>JavaScript</p>
                                        <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>Tailwind</p>
                                        <p className='border-2 border-slate-700 px-2 py-1 text-sm inline-block m-1 cursor-pointer'>React</p>
                                    </div>
                                    <div className='flex justify-around items-center bg-slate-800 rounded-md px-5 py-3'>
                                        <a href={code} target='_blank' className='text-[16px] font-semibold text-slate-400 hover:text-slate-300 hover:scale-105 duration-200'>
                                            <FaGithub />
                                        </a>
                                        <a href={demo} target='_blank' className='text-[16px] font-semibold text-slate-400 hover:text-slate-300 hover:scale-105 duration-200'>
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage;