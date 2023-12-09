import React from 'react';
import { RiContactsLine } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { PiMessengerLogoBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";

const ContactPage = () => {
    return (

        <div className='bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900 py-16 md:py-32'>
            <div className='w-10/12 mx-auto'>
                <div className='text-center mb-24'>
                    <p className='text-lg md:text-xl text-slate-400 inline-block bg-slate-900 px-6 md:px-10 py-2 md:py-3 font-bold items-center rounded-ss-2xl md:rounded-ss-3xl rounded-ee-2xl md:rounded-ee-3xl shadow-lg shadow-slate-700'>
                        <span className='inline-block pr-3 text-[16px] md:text-md'><RiContactsLine /></span>
                        Contact Me
                    </p>
                </div>
                <div className='md:flex justify-end items-center'>
                    <div className='w-full md:w-6/12 text-slate-500 space-y-5'>
                        <div className=' border-2 shadow-lg text-slate-400font-medium border-slate-500 text-center p-5 space-y-1 rounded-ss-full rounded-se-full'>
                            <span className='inline-block text-3xl font-bold'><MdMailOutline /></span>
                            <h1>Email</h1>
                            <p>shamsuttabriz.md@gmail.com</p>
                            <a href='https://mail.google.com/' target='_blank' className='text-blue-400 pt-2 cursor-pointer'>Send a message</a>
                        </div>

                        <div className=' border-2 shadow-lg text-slate-400font-medium border-slate-500 text-center p-5 space-y-1 rounded-2xl'>
                            <span className='inline-block text-3xl text-slate-400 font-bold'><PiMessengerLogoBold /></span>
                            <h1>Messenger</h1>
                            <p>Shamsut Tabriz</p>
                            <a href='https://www.messenger.com/' target='_blank' className='text-blue-400 pt-3 cursor-pointer'>Send a message</a>
                        </div>

                        <div className=' border-2 shadow-lg text-slate-400font-medium border-slate-500 text-center p-5 space-y-1 rounded-2xl'>
                            <span className='inline-block text-3xl text-slate-400 font-bold'><BsWhatsapp /></span>
                            <h1>Whatsapp</h1>
                            <p>+8801986884508</p>
                            <a href='https://web.whatsapp.com/' target='_blank' className='text-blue-400 pt-3 cursor-pointer'>Send a message</a>
                        </div>
                    </div>
                    <div className='w-full text-md md:text-lg text-slate-400 font-medium mt-12 md:mt-55 md:pl-32'>
                        <div className="flex justify-start items-center">
                            <form
                                action="#"
                                method="POST"
                                className="flex flex-col w-full md:w-1/2"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="px-5 w-full md:w-[500px] py-2 bg-transparent border-b-2 placeholder:opacity-50 placeholder:text-slate-400 font-medium border-slate-800 text-slate-400 focus:border-b-3 shadow-sm shadow-slate-700 focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    className=" w-full md:w-[500px] px-5 py-2 bg-transparent border-b-2 placeholder:opacity-50 placeholder:text-slate-400 font-medium border-slate-800 text-slate-400 focus:border-b-3 shadow-sm shadow-slate-700 focus:outline-none mt-10"
                                />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter your phone"
                                    className=" w-full md:w-[500px] px-5 py-2 bg-transparent border-b-2 placeholder:opacity-50 placeholder:text-slate-400 font-medium border-slate-800 text-slate-400 focus:border-b-3 shadow-sm shadow-slate-700 focus:outline-none mt-10"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Enter your message"
                                    rows="5"
                                    className=" w-full md:w-[500px] px-5 py-2 bg-transparent border-b-2 placeholder:opacity-50 placeholder:text-slate-400 font-medium border-slate-800 text-slate-400 focus:border-b-3 shadow-sm shadow-slate-700 focus:outline-none mt-10"
                                ></textarea>

                                <button className="w-[7rem] md:w-[10rem] border-2 border-slate-400 hover:border-slate-300 px-5 py-2 text-[10px] md:text-[12px] md:text-md font-semibold uppercase text-slate-400 hover:text-slate-300 duration-200 mt-5">
                                    Let's Talk
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactPage;