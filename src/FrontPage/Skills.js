import React from 'react';
import { Icon } from '@iconify/react';
import ParticlesComponent from '../library/ParticlesComponent';
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <div className='bg-BACK ' id="skills">
      <div className="relative mx-auto max-w-5xl text-center pt-10">
        <motion.h2 initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="block w-full bg-BACK text-SHADE mt-10 mb-10 text-4xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
          Skills & Technologies
        </motion.h2>
        <motion.p initial={{ x:50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="mx-auto my-4 w-full max-w-xl bg-BACK text-center text-TEXT mt-20 mb-16 text-base sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
          Crafting exceptional websites with HTML, CSS, Bootstrap, JavaScript, React, Node.js, MongoDB, and more cutting-edge technologies.
        </motion.p>
      </div>



      <div>
        <motion.div initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 2, }} class="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-10 mx-auto text-center w-9/12 pb-12 pt-6">
          <div  className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="vscode-icons:file-type-reactjs" className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">React JS</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="devicon:nextjs" className="md:text-9xl text-8xl  text-efd09e mx-auto text-center p-2 " />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Next JS</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="skill-icons:expressjs-light" className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Express JS</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'> 
           <Icon icon="logos:nodejs-icon" className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Node JS</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="vscode-icons:file-type-reactjs" className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">React JS</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="skill-icons:css" className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">CSS</p> */}
          </div>

        </motion.div>
      </div>



      <div>
        <motion.div initial={{ x:50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 2, }} class="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-10 mx-auto text-center w-9/12 pb-12 pt-6">
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="logos:java"  className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">React JS</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="devicon:mysql"  className="md:text-9xl text-8xl  text-efd09e mx-auto text-center p-2 " />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Next JS</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="devicon:framermotion"  className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Express JS</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'> 
           <Icon icon="logos:threejs"  className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Node JS</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="bxl:spring-boot"  className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">React JS</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
          <Icon icon="logos:redux"  className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />

          </div>

        </motion.div>
      </div>




      <div>
        <motion.div initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 2, }} class="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-10 mx-auto text-center w-9/12 pb-16 pt-6 ">
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="logos:material-ui" className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ">Material UI</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="devicon:tailwindcss" className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ">Tailwind CSS</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="vscode-icons:folder-type-mongodb-opened" className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ">Mongo DB</p> */}
          </div>

          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="devicon:jquery" className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Jquery</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="devicon:javascript" className="md:text-9xl text-8xl  text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">JavaScript</p> */}
          </div>
          <div className=' px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 mx-auto text-center'>
            <Icon icon="skill-icons:bootstrap" className="md:text-9xl text-8xl text-efd09e mx-auto text-center p-2" />
            {/* <p className="mt-3 text-base text-TEXT sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Bootstrap</p> */}
          </div>

        </motion.div>
      </div>

    </div>
  );
}
