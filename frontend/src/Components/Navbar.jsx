import { Link } from 'react-router-dom';
import React from 'react';

export function Navbar() {

        return (
            <nav className="bg-slate-200 border-gray-200 h-20">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse pt-4">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Medicore Logo" />
                        <span className="self-center text-3xl font-semibold whitespace-nowrap">Medex</span>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 pt-4">

                        <button className="flex gap-2 pt-2 pb-2 px-5 hover:text-blue-700 focus:text-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>

                            <div className="block px-1 text-1.5xl text-blue-700 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Get Support</div>
                        </button>
                    </div>


                   


                </div>

            </nav>
        )
    }
