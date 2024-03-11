"use client"
import React, { useState } from 'react'
import { NavLink } from "../component/NavLink"
import Link from 'next/link'

const navLink = [
  {
    title: "About",
    path:"#about",
  },
  {
    title: "Projects",
    path:"#projects",
  },
  {
    title: "Contact",
    path:"#contact",
  },
]

export const Navbar = () => {
  const [navbarOpen,setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-90">
      <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
        <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
          LOGO
        </Link>
        <div className='mobile-menu block md:hidden'>

        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-4 mt-0'>
          {
            navLink.map((val, index) => (
              <li key={index}>
                <NavLink href={val.path} title={val.title} />
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    </nav>
  )
}
