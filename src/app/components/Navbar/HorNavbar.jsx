"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';


const navLinks = [
    {
        title: "Home",
        path: "home",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
      
      
      },
    {
      title: "About",
      path: "about",
      image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        </svg>
    
    },
    {
      title: "Projects",
      path: "projects",
      image:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
        </svg>
    
    },
    {
      title: "Contact",
      path: "contact",
      image:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
        <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
        <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
        </svg>
    
    },
  ];

  const HorNavbar = () => {
    const [click, setClick] = useState("Home");
    const [active, setActive] = useState(false);
    const [detail, setDetail] = useState("");
    const [opacity, setOpacity] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setOpacity(100);
    setIsVisible(true)
  }, []);

    return(
        <div className={`fixed top-1/4 right-10 mx-auto z-10 bg-black bg-opacity-100 sm:opacity-0 transition-all duration-500 ease-in-out ${isVisible ? 'md:opacity-100 translate-y-1/4' : 'translate-y-0'}`}>
            <div className=" grid grid-cols-1 border-2 border-solid rounded-full outline-none">
                {navLinks.map((link, index) => (
                    <div className={`p-5 bg-black ${click == link.title ? 'bg-gradient-to-r from-purple-400 to-pink-600' : null} rounded-full outline-none border-black`} key={index}>
                        <ScrollLink
                        to={link.path}
                        smooth={true}
                        duration={500}
                        onClick={() => setClick(link.title)}
                        onMouseEnter={() => {setActive(true), setDetail(link.title)}}
                        onMouseLeave={() => setActive(false)}
                        className="block cursor-pointer"
                        >
                            {link.image}
                            <span className={`absolute text-white rounded-full bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 p-2 outline-none duration-300 -mt-8 right-10
                            ease-out ${active ? detail == link.title ? 'opacity-100 right-20': null : null}`}>{link.title}</span>
                        </ScrollLink>
                    </div>
                ))}
            </div>
        </div>
    );
  }
  export default HorNavbar;