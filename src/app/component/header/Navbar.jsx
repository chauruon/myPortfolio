"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavLink } from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from "../view/MenuOverlay";
import Image from "next/image"

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className={`flex flex-wrap items-center md:justify-end justify-between mx-auto px-4 h-[45px]`}>
        <div className='rounded-full bg-[#181818] w-[50px] h-[50px] mt-1 md:hidden relative'>
          <Link href={'/'}>
            <Image className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              src={'/images/doing-onlines.jpg'}
              priority={true} alt={''}
              width={300} height={300} />
          </Link>
        </div>

        <div className='mobile-menu block md:hidden mt-1 mr-2'>
          {
            !navbarOpen ?
              <button onClick={() => setNavbarOpen(true)}
                className={`
                flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200
                hover:text-white hover:border-white
              `}>
                <Bars3Icon className='h-5 w-5' />
              </button>
              : null
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* {navbarOpen ? <MenuOverlay links={navLinks} /> : null} */}
      <div className={`rounded-s-lg bg-[#121212] md:hidden top-0 right-0 w-[25vw] 
      text-white fixed ease-linear duration-500 
        ${navbarOpen ? "translate-x-0 " : "translate-x-full"}`}>
        <div className='flex justify-end mr-2 bg-[#121212]'>
          <button onClick={()=> setNavbarOpen(false)}
            className='mt-3 px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
            <XMarkIcon className='h-5 w-5' />
          </button>
        </div>
        <ul>
          {
            navLinks.map((link, index) => (
              <li key={index} className='flex justify-center px-1 py-1 w-full rounded-full
                sm:mt-auto mt-3
                hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
              hover:bg-slate-800 text-white '>
                <Link href={link.path}
                  className='block hover:bg-slate-800
                  rounded-full px-5 py-2 text-sm'>
                  {link.title}
                </Link>

            </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
};
