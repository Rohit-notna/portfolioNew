import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Icon } from '@iconify/react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-BACK dark:bg-BACK fixed w-full z-20 top-0 start-0 border-b ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      {/* <Icon icon="game-icons:scorpion" className='text-4xl text-b76e79 mt-1' />
          <h1 className='text-4xl font-extrabold text-efd09e'> RN</h1> */}
        
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-SHADE">RohitNotna</span>
    
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-SHADE rounded-lg md:hidden hover:bg-BACK focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMobileMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 text-SHADE" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-BACK   ">
            {/* <li>
              <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 px-3 text-TEXT  rounded md:bg-transparent md:text-text-TEXT md:p-0 md:dark:text-TEXT" onClick={closeMobileMenu}>Home</Link>
            </li> */}
            <li>
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 px-3  rounded  md:p-0  dark:text-TEXT  leading-6 text-TEXT text-base  s sm:text-lg   md:text-lg" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li>
              <Link to="project" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 px-3  rounded  md:p-0  dark:text-TEXT  leading-6 text-TEXT text-base  s sm:text-lg   md:text-lg" onClick={closeMobileMenu}>Services</Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 px-3  rounded  md:p-0  dark:text-TEXT  leading-6 text-TEXT text-base  s sm:text-lg   md:text-lg" onClick={closeMobileMenu}>Skills</Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="block py-2 px-3  rounded  md:p-0  dark:text-TEXT  leading-6 text-TEXT text-base  s sm:text-lg   md:text-lg" onClick={closeMobileMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
