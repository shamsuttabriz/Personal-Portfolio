import React from 'react';
import { FaTools } from "react-icons/fa";
import css from '../../assets/css.png';
import github from '../../assets/github.png';
import graphql from '../../assets/graphql.png';
import html from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import nextjs from '../../assets/nextjs.png';
import node from '../../assets/node.png';
import react from '../../assets/react.png';
import tailwind from '../../assets/tailwind.png';

const ExperiencePage = () => {

    const tools = [
        { id: 1, src: css, title: "CSS", style: "shadow-blue-500" },
        { id: 2, src: html, title: "HTML", style: "shadow-orange-500" },
        { id: 3, src: github, title: "GitHub", style: "shadow-gray-400" },
        { id: 4, src: graphql, title: "GraphQL", style: "shadow-pink-400" },
        { id: 5, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
        { id: 6, src: nextjs, title: "NextJS", style: "shadow-white" },
        { id: 7, src: node, title: "Node", style: "shadow-[#8CC84B]" },
        { id: 8, src: react, title: "React", style: "shadow-blue-600" },
        { id: 9, src: tailwind, title: "Tailwind", style: "shadow-sky-400" }
    ]

    return (
        <div id="skills" className='bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900 py-12 md:py-32'>
            <div className="w-10/12 md:w-9/12 px-2 py-5 md:px-14 md:py-10 mx-auto flex flex-col justify-center text-white">
                <div className='text-center mb-24'>
                    <p className='text-lg md:text-xl text-slate-400 inline-block bg-slate-900 px-6 md:px-10 py-2 md:py-3 font-bold items-center rounded-ss-2xl md:rounded-ss-3xl rounded-ee-2xl md:rounded-ee-3xl shadow-lg shadow-slate-700'>
                        <span className='inline-block pr-3 text-[16px] md:text-md'><FaTools /></span>
                        My Skills
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-[1rem] md:px-12 sm:px-0">
                    {tools.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperiencePage;