"use client";
import Link from "next/link";
import React, { useState } from "react";
import ContactLink from "./ContactLink";
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const contactLinks = [
    {
        title: "Facebook",
        path : "https://www.facebook.com/tukdanai.urumporn.9",
    },
    {
        title : "LinkedIn",
        path : "https://www.linkedin.com/in/tukdanai-urumporn-3105a02a2/"
    }
]

const ContactSection = () => {
    return(
        <motion.div 
            initial = {{opacity: 0, scale: 0.5}}
            animate = {{ opacity: 1, scale: 1}}
            transition = {{ duration: 0.5 }}
            className="flex items-center flex-col justify-center mt-6" id="contact">
                <h1 className="font-bold bg-gradient-to-tr from-purple-600
                 to-pink-300 text-4xl lg:text-6xl text-transparent bg-clip-text">
                    Contact Me</h1>
                <p className="font-bold text-2xl lg:text-xl text-white mt-10">
                    Email : <span className="font-normal text-white">
                    <TypeAnimation 
                        sequence={[
                        'jdaiproduction@gmail.com',
                        1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={1}
                    />
                    </span>
                </p>
                <div className="flex mt-4 space-x-8">
                    {contactLinks.map((link, index) => {
                        return <ContactLink href={link.path} title={link.title} key={index}/>;
                    })}
                </div>
                <br />
                <br />
        </motion.div>
    )
}

export default ContactSection;