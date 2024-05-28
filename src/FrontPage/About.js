import React from 'react'
import Write from '../library/Write'
import { Link } from 'react-router-dom'
import Robot from '../library/Robot'
import Face from '../library/Face'
import { motion } from "framer-motion"
function About() {
  return (
    <div>
   <section id="about" className="bg-BACK dark:bg-BACK pt-20">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-TEXT sm:text-lg dark:text-TEXT">
          <motion.h2 initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="mb-4 text-4xl tracking-tight font-extrabold  sm:text-4xl md:text-5xl text-TEXT dark:text-TEXT ">
          Hi There!
          </motion.h2>
          <motion.h2 initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="mb-4 text-4xl tracking-tight font-extrabold  sm:text-4xl md:text-5xl text-TEXT dark:text-TEXT ">
          I'M <span className='mb-4 text-4xl tracking-tight font-extrabold  sm:text-4xl md:text-5xl text-SHADE dark:text-SHADE'>Rohit Notna</span>
          </motion.h2>
          <motion.h2 initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="mb-4 text-4xl tracking-tight font-extrabold  sm:text-4xl md:text-5xl text-TEXT dark:text-TEXT ">
           <Write/>
          </motion.h2>
          
<div className='flex gap-10 mt-7'>
     <Link to="https://github.com/Rohit-notna">  <motion.button initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className='px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-10 border-SHADE'>Github</motion.button></Link>
    <Link to="https://in.docs.wps.com/l/sIDyRjrVL86PSsgY?sa=cl&v=v2"> <motion.button initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className='px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2 mt-10 border-SHADE'>Resume</motion.button></Link>  
              </div>
        </div>
        <motion.div initial={{ x:50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="mt-8 text-center">
    <Face/>



        </motion.div>
      </div>
    </section>
    <section id="about" className="bg-BACK dark:bg-BACK pt-5">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div className="grid grid-cols-2 gap-4 mt-8">
          <motion.img initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
          <motion.img initial={{ x:-50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
        <motion.div initial={{ x:50,opaction:0 }} 
          whileInView={{ x:0,opacity:1}} 
          transition={{ duration: 1, }} className="font-light text-TEXT sm:text-lg dark:text-TEXT">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold  sm:text-4xl md:text-5xl text-SHADE dark:text-TEXT anime-heading">
          LET ME <span className='text-SHADE'>INTRODUCE</span> MYSELF
          </h2>
          <p className="mb-4 text-TEXT  mt-3 text-base  sm:mt-5 sm:text-lg sm:max-w-xl  md:mt-5 md:text-xl ">I fell in love with programming and I have at least learnt something, I think… 
Java, Javascript.</p>
<p className="mb-4 text-TEXT  mt-3 text-base  sm:mt-5 sm:text-lg sm:max-w-xl  md:mt-5 md:text-xl ">My field of Interest's are building new  Web Technologies and Products and also in areas related to Backend.</p>
<p className="mb-4 text-TEXT  mt-3 text-base  sm:mt-5 sm:text-lg sm:max-w-xl  md:mt-5 md:text-xl ">Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js

</p>
        </motion.div>
       
      </div>
    </section>
    </div>
  )
}

export default About
