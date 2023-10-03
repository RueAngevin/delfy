import React, { useState } from "react";
import { useEffect } from "react";
import { Dropdown, Ripple, Tooltip, initTE } from "tw-elements";

const Sidenav = () => {

    useEffect(() => {
        initTE({ Dropdown, Ripple, Tooltip });
    }, []);

    return (
        <div>
            <div className="absolute top-4 right-4 z-[99] md:hidden">
                <div className="relative" data-te-dropdown-ref>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"
                        type="button"
                        id="dropdownMenuButton2"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false">

                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />

                    </svg>


                    <ul
                        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-gray-300 bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton2"
                        data-te-dropdown-menu-ref>
                        <li>
                            <a className="block w-full whitespace-nowrap bg-rose-500 px-4 py-2 text-sm font-normal text-black hover:bg-rose-600 active:text-neutral-800 active:no-underline"
                                href="#" data-te-dropdown-item-ref>Home</a>
                        </li>
                        <li>
                            <a className="block w-full whitespace-nowrap bg-rose-500 px-4 py-2 text-sm font-normal text-black hover:bg-rose-600 active:text-neutral-800 active:no-underline"
                                href="#" data-te-dropdown-item-ref>Projects</a>
                        </li>
                        <li>
                            <a className="block w-full whitespace-nowrap bg-rose-500 px-4 py-2 text-sm font-normal text-black hover:bg-rose-600 active:text-neutral-800 active:no-underline"
                                href="#" data-te-dropdown-item-ref>Our services</a>
                        </li>
                        <li>
                            <a className="block w-full whitespace-nowrap bg-rose-500 px-4 py-2 text-sm font-normal text-black hover:bg-rose-600 active:text-neutral-800 active:no-underline"
                                href="#" data-te-dropdown-item-ref>Contact</a>
                        </li>
                        <li>
                            <a className="block w-full whitespace-nowrap bg-rose-500 px-4 py-2 text-sm font-normal text-black hover:bg-rose-600 active:text-neutral-800 active:no-underline"
                                href="#" data-te-dropdown-item-ref>Meet the team</a>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#main" className="rounded-full shadow-lg bg-rose-600 shadow-rose-500 m-2 p-4 cursor-pointer hover:bg-rose-500 ease-in duration-200" data-te-toggle="tooltip"
                        data-te-placement="right"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        title="Home">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>

                    </a>
                    <a href="#work" className="rounded-full shadow-lg bg-rose-600 shadow-rose-500 m-2 p-4 cursor-pointer hover:bg-rose-500 ease-in duration-200"
                        data-te-toggle="tooltip"
                        data-te-placement="right"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        title="Projects">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                            <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-rose-600 shadow-rose-500 m-2 p-4 cursor-pointer hover:bg-rose-500 ease-in duration-200" data-te-placement="right"
                        data-te-toggle="tooltip"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        title="Our Services">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-rose-600 shadow-rose-500 m-2 p-4 cursor-pointer hover:bg-rose-500 ease-in duration-200"
                        data-te-toggle="tooltip"
                        data-te-placement="right"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        title="Contact">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-rose-600 shadow-rose-500 m-2 p-4 cursor-pointer hover:bg-rose-500 ease-in duration-200"
                        data-te-toggle="tooltip"
                        data-te-placement="right"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        title="Meet the team">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Sidenav