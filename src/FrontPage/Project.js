import React from 'react';
import { Link } from 'react-router-dom'

import { Parallax } from 'react-parallax';
import image1 from '../pic/fit.png';
import image from '../pic/home.jpg';
import image2 from '../pic/school.jpg';
import image3 from '../pic/cart.jpg';
import image4 from '../pic/calculator.jpg';
import image5 from '../pic/tic.png';
import { motion } from "framer-motion"

import '../FrontPage/Project.css'; // Make sure to create this CSS file

export default function Project() {
  return (
    <div className='bg-BACK' id="project">
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 bg-BACK">
      <div className="relative mx-auto max-w-5xl text-center pt-10">
  <motion.h2 initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="block w-full bg-BACK text-SHADE mt-10 mb-10 text-4xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
    Projects
  </motion.h2>
  <motion.p initial={{ x:50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="mx-auto my-4 w-full max-w-xl bg-BACK text-center text-TEXT mt-20 mb-16 text-base sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
    Showcasing a variety of projects developed using HTML, CSS, Bootstrap, JavaScript, React, Node.js, MongoDB, and other innovative technologies.
  </motion.p>
</div>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          <div  className="rounded overflow-hidden shadow-lg flex flex-col bg-BACK border">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <Parallax bgImage={image} strength={300} className="parallax-container">
                  <div style={{ height: 300 }}></div>
                </Parallax>
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            
            </div>
            <div className="px-6 py-4 mb-auto bg-BACK">
                <h1 className="mb-2 text-SHADE block sm:mt-2 text-3xl font-semibold"> Real Estate
                </h1>
              <p className="text-TEXT text-base mt-3  text-grey1  sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
              I have developed a real estate website using a tech stack that includes ReactJS, Tailwind CSS, Material UI, JavaScript, Node.js, Express.js, MongoDB, Redux, and Firebase.
              </p>
              <div className='flex gap-10'>
     <Link to="https://github.com/Rohit-notna/E-BROKER" className='text-TEXT'>  <button className='px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-3 border-SHADE'>Github</button></Link>
    <Link to="https://e-broker-front-end-auction.vercel.app/" className='text-TEXT'> <button className='px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-3 border-SHADE'>Website</button></Link>  
              </div>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg flex flex-col bg-BACK border">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <Parallax bgImage={image1} strength={300} className="parallax-container">
                  <div style={{ height: 300 }}></div>
                </Parallax>
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            
            </div>
            <div className="px-6 py-4 mb-auto bg-BACK">
                <h1 className="mb-2 text-SHADE block sm:mt-2 text-3xl font-semibold"> Fittera
                </h1>
              <p className="text-TEXT text-base mt-3  text-grey1  sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
              I have developed a Fittera webpage using ReactJS, Tailwind, and Material UI. The website is fully responsive, ensuring optimal viewing and functionality across various devices.
              </p>
              <div className='flex gap-10'>
     <Link to="https://github.com/Rohit-notna/FITTERA" className='text-TEXT'> 
      <button className='px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-3 border-SHADE'>Github</button></Link>
    <Link to="https://fittera.in/" className='text-TEXT'> <button className='px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-3 border-SHADE'>Website</button></Link>  
              </div>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg flex flex-col bg-BACK border">
            <a href="#"></a>
            <div className="relative">
              <a href="#">
                <Parallax bgImage={image2} strength={300} className="parallax-container">
                  <div style={{ height: 300 }}></div>
                </Parallax>
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            
            </div>
            <div className="px-6 py-4 mb-auto bg-BACK">
                <h1 className="mb-2 text-SHADE block sm:mt-2 text-3xl font-semibold"> School
                </h1>
              <p className="text-TEXT text-base mt-3  text-grey1  sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
              I developed a school website with Next.js, MySQL, Tailwind CSS, Node.js, and Material UI, enabling administrators to upload and manage school details.
              </p>
              <div className='flex gap-10'>
     <Link to="https://github.com/Rohit-notna/school" className='text-TEXT'>  <button className='px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-3 border-SHADE'>Github</button></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">

<div className="rounded overflow-hidden shadow-lg flex flex-col bg-BACK border">
  <a href="#"></a>
  <div className="relative">
    <a href="#">
      <Parallax bgImage={image3} strength={300} className="parallax-container">
        <div style={{ height: 300 }}></div>
      </Parallax>
      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
    </a>
  
  </div>
  <div className="px-6 py-4 mb-auto bg-BACK">
      <h1 className="mb-2 text-SHADE block sm:mt-2 text-3xl font-semibold"> Shopping Cart
      </h1>
    <p className="text-TEXT text-base mt-3  text-grey1  sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
   
I have created a website that utilizes various API functionalities such as GET, PUT, and POST requests. Additionally, when users click on the "add items" button, the selected items are added to the shopping cart. To implement this feature, I utilized Redux for state management and Firebase for data storage and retrieval.
    </p>
    <div className='flex gap-10'>
     <Link to="https://github.com/Rohit-notna/redux-back" className='text-TEXT'>  <button className='px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-3 border-SHADE'>Github</button></Link>
    <Link to="https://redux-front.vercel.app/" className='text-TEXT'> <button className='px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-3 border-SHADE'>Website</button></Link>  
              </div>
  </div>
</div>

<div className="rounded overflow-hidden shadow-lg flex flex-col bg-BACK border">
  <a href="#"></a>
  <div className="relative">
    <a href="#">
      <Parallax bgImage={image4} strength={300} className="parallax-container">
        <div style={{ height: 300 }}></div>
      </Parallax>
      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
    </a>
  
  </div>
  <div className="px-6 py-4 mb-auto bg-BACK">
      <h1 className="mb-2 text-SHADE block sm:mt-2 text-3xl font-semibold"> Calculator
      </h1>
    <p className="text-TEXT text-base mt-3  text-grey1  sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
    I developed a calculator utilizing Bootstrap, JavaScript, and integrated custom logic.
    </p>
    <div className='flex gap-10'>
     <Link to="https://github.com/Rohit-notna/Calculator" className='text-TEXT'>  <button className='px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-3 border-SHADE'>Github</button></Link>
              </div>
  </div>
</div>

<div className="rounded overflow-hidden shadow-lg flex flex-col bg-BACK border">
  <a href="#"></a>
  <div className="relative">
    <a href="#">
      <Parallax bgImage={image5} strength={300} className="parallax-container">
        <div style={{ height: 300 }}></div>
      </Parallax>
      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
    </a>
  
  </div>
  <div className="px-6 py-4 mb-auto bg-BACK">
      <h1 className="mb-2 text-SHADE block sm:mt-2 text-3xl font-semibold"> Tic Tac Toe
      </h1>
    <p className="text-TEXT text-base mt-3  text-grey1  sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
    I developed a Tic Tac Toe game using React.js, JavaScript, and Bootstrap. The game displays a "You Win" message when a player wins, and users have the option to restart the game.
    </p>
    <div className='flex gap-10'>
     <Link to="https://github.com/Rohit-notna/Tic-Tac-Toe" className='text-TEXT'>  <button className='px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-3 border-SHADE'>Github</button></Link>
              </div>
  </div>
</div>
</div>



      </div>
    </div>
  );
}
