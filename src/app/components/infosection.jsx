"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

export default function InfoSection() {
  return (
    <section className=''>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
          <motion.div 
            initial = {{opacity: 0, scale: 0.5}}
            animate = {{ opacity: 1, scale: 1}}
            transition = {{ duration: 0.5 }}
            className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
            <h1 className='text-white mb-4 text-4xl
            lg:text-6xl font-extrabold'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400
              to-pink-600'>
                Hello, I'm {" "}
              </span>
              <br />
              <TypeAnimation 
                sequence={[
                  'Tukdanai Urumporn',
                  1000,
                  'Book',
                  1000,
                  'CPE35',
                  1000,
                  'Web Developer',
                  1000,
                  'FullStack Developer',
                  1000,
                  'Backend Developer',
                  1000
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
              />
              </h1>
            <div className='border-2 border-solid border-black
            rounded-full bg-gradient-to-br from-blue-500 to-pink-400 
            flex justify-evenly sm:w-fit'>
              <p className='text-white text-lg lg:text-xl py-1 px-2 sm:w-fit'>
                FullStack Developer, Learner</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='mt-4 col-span-4 place-self-center'>
              <div className='rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 w-[250px] h-[250px] relative'>
                <Image 
                  src="/image/profile.png"
                  alt='profile'
                  className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  width={300}
                  height={300}
                />
              </div>
            </motion.div>
        </div>
    </section>
  )
}
