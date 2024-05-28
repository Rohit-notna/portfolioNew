import React from 'react';
import ParticlesComponent from '../library/ParticlesComponent';
import { Icon } from '@iconify/react';
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <div>
      <div className="bg-BACK dark:bg-BACK" id="contact">
      <div className="relative mx-auto max-w-5xl text-center pt-10">
  <motion.h2 initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="block w-full bg-BACK text-SHADE mt-10 mb-10 text-4xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
    Contact Us
  </motion.h2>
  <motion.p initial={{ x:50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="mx-auto my-4 w-full max-w-xl bg-BACK text-center text-TEXT mt-20 mb-16 text-base sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
  Have something to say? We are here to help. Fill up the form or send an email or call us.
  </motion.p>
</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
          <motion.div initial={{ x:-80,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }}>
            <h2 className="mb-2 text-SHADE block sm:mt-2 text-3xl font-semibold">Contact Us</h2>
            <p className="max-w-sm mt-4 mb-4 dark:text-gray-400"></p>
            <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-gray-400">
           <span className='text-TEXT text-2xl mt-3  text-grey1  sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0'><Icon icon="mdi:contact" /></span>
              <span className='text-TEXT text-base mt-3  text-grey1  sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0'>8199013477</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
           <span className='text-TEXT text-2xl mt-3  text-grey1  sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0'><Icon icon="ic:outline-email" /></span>
            
              <p className='text-TEXT text-base mt-3  text-grey1  sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0'>rohitnotna009@gmail.com</p>
            </div>
          
          </motion.div>
          <div>
            <motion.form initial={{ x:80,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }}>
              <input type="hidden" id="botcheck" name="botcheck" />
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="off"
                  className="w-full px-4 py-3 border-2 placeholder:text-TEXT dark:text-TEXT rounded-md outline-none dark:placeholder:text-TEXT dark:bg-BACK focus:ring-4 border-SHADE focus:border-gray-600  dark:border-SHADE dark:focus:border-SHADE"
                  name="name"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email_address" className="sr-only">Email Address</label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="Email Address"
                  autoComplete="off"
                  className="w-full px-4 py-3 border-2 placeholder:text-TEXT dark:text-TEXT rounded-md outline-none dark:placeholder:text-TEXT dark:bg-BACK focus:ring-4 border-SHADE focus:border-gray-600  dark:border-SHADE dark:focus:border-SHADE"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 placeholder:text-gray-800 dark:text-TEXT dark:placeholder:text-TEXT dark:bg-BACK rounded-md outline-none h-36 focus:ring-4 border border-SHADE focus:border-SHADE dark:border-SHADE dark:ring-0"
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full border border-SHADE py-4 font-semibold text-SHADE transition-colors bg-BACK rounded-md  focus:outline-none focus:ring-offset-2  px-7 dark:bg-BACK dark:text-SHADE"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
