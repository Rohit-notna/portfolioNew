import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <div>
      <section class="pt-16 pb-7 bg-BACK">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-BACK">
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-6 pb-10 border-b-2 border-gray-200">
        {/* <Icon icon="game-icons:scorpion" className='text-4xl text-b76e79 mt-1' />
          <h1 className='text-4xl font-extrabold text-efd09e'> RN</h1> */}
          <h1 className='mb-2 text-SHADE block sm:mt-2 text-3xl font-semibold'>RohitNotna</h1>
        <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <ul class="flex flex-col sm:flex-row items-center gap-5 sm:gap-12">
        <Link to="about">   <li id="about" class="block py-2 px-3  rounded  md:p-0  dark:text-TEXT  leading-6 text-TEXT text-base  s sm:text-lg   md:text-lg" >
                Home
            </li></Link> 
            <Link to="project">   <li id="about" class="block py-2 px-3  rounded  md:p-0  dark:text-TEXT  leading-6 text-TEXT text-base  s sm:text-lg   md:text-lg" >
               Project
            </li></Link> 
            <Link to="skills">   <li id="about" class="block py-2 px-3  rounded  md:p-0  dark:text-TEXT  leading-6 text-TEXT text-base  s sm:text-lg   md:text-lg" >
                Skills
            </li></Link> 
            <Link to="contact">   <li id="about" class="block py-2 px-3  rounded  md:p-0  dark:text-TEXT  leading-6 text-TEXT text-base  s sm:text-lg   md:text-lg" >
                Contact
            </li></Link> 
          
          </ul>
         
        </div>
      </div>
      <div class="pt-7 flex flex-col-reverse min-[520px]:flex-row items-center justify-between gap-6">
        <span class="block py-2 px-3  rounded  md:p-0  dark:text-TEXT  leading-6 text-TEXT text-base  s sm:text-lg   md:text-lg">©RohitNotna2023, All rights reserved.</span>
        <ul class="flex items-center gap-9">
          <li className='block py-2 px-3  rounded  md:p-0  dark:text-TEXT  leading-6 text-TEXT text-base  s sm:text-lg   md:text-lg'>
             Terms
          </li>
          <li className='block py-2 px-3  rounded  md:p-0  dark:text-TEXT  leading-6 text-TEXT text-base  s sm:text-lg   md:text-lg'>Privacy
          </li>
         
        </ul>
      </div>
    </div>
  </section>
    </div>
  )
}
