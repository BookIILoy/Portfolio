"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
  {
    title: <Image 
            src="/image/github.png"
            alt='github'
            width={35}
            height={35}
            className="hover:scale-125 duration-500 ease-in-out"
        />,
    path: "https://github.com/BookIILoy",
  },
  {
    title: <Image 
            src="/image/linked.png"
            alt='linkedin'
            width={35}
            height={35}
            className="hover:scale-125 duration-500 ease-in-out"
        />,
    path: "https://www.linkedin.com/in/tukdanai-urumporn-3105a02a2/",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [click, setClick] = useState("");

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-black bg-opacity-100">
      <div className="flex lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setClick("")}
          className="text-2xl text-white font-semibold cursor-pointer"
        >
          Book.dev
        </ScrollLink>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 text-xl md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                {link.path.startsWith('http') ? (
                  <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-teal-200 hover:text-white">
                    {link.title}
                  </a>
                ) : (
                  <ScrollLink
                    to={link.path}
                    smooth={true}
                    duration={500}
                    onClick={() => setClick(link.title)}
                    className={`block mt-4 lg:inline-block lg:mt-0 ${click == link.title ? 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' : 'text-white'} hover:text-teal-200 cursor-pointer`}
                  >
                    {link.title}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;