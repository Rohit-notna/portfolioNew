import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const down = {
    1: { label: 'Home', link: '/' },
    2: { label: 'About', link: '/About' },
    3: { label: 'Project', link: '/Project' },
  
  };

  const [icon, setIcon] = useState(<Icon icon="octicon:three-bars-16" />);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = () => {
    if (icon.props.icon === 'octicon:three-bars-16') {
      setIcon(<Icon icon="maki:cross" />);
      setShowDropdown(true);
    } else if (icon.props.icon === 'maki:cross') {
      setIcon(<Icon icon="octicon:three-bars-16" />);
      setShowDropdown(false);
    }
  };

  return (
    <div>
      <nav>
        <div className="grid grid-cols-3 w-full bg-gray-950 text-white p-2 md:p-2 lg:p-2 fixed">


        <div className='flex pl-8 pt-1 pb-2'>
          <Icon icon="game-icons:scorpion" className='text-4xl text-b76e79 mt-1' />
          <h1 className='text-4xl font-extrabold text-efd09e'> RN</h1>
        </div>
        
          <div className=" hidden sm:block  w-full pt-2">
            <ul className="flex mx-auto text-efd09e  ">

            <Link to="/" className='flex'> 
            <Icon icon="ic:round-home" className='pt-1 text-3xl' />
            <li className=" lg:text-2xl text-efd09e ">
             Home
              </li></Link>


              <Link to="/About" className='flex pl-12'>
              <Icon icon="material-symbols:person-outline" className='pt-1 text-3xl' />
                 <li className="  lg:text-2xl text-efd09e">
             About
              </li></Link>


              <Link to="/Project"  className='flex pl-12'> 
              <Icon  icon="solar:tv-broken" className='pt-1 text-3xl' /> 
              <li className=" lg:text-2xl text-efd09e">
             Project
              </li></Link>

            </ul>
          </div>

         
         

          <div className=' ml-44 pr-8 pt-2  md:hidden lg:hidden lg:pb-16'>
           <button className="md:text-2xl lg:text-2xl p-2 text-xl   bg-fuchsia-950 rounded-md" onClick={handleChange}>
              {icon}
            </button>
            {showDropdown && (
              <ul className="absolute top-12 right-0 bg-gray-950 text-white p-4">
               <Link to="/"> 
               <li className="py-3 px-3">Home</li>
               </Link>
               <Link to="/About">   
                <li className="py-3 px-3">About</li>
                </Link>
                <Link to="/Project">   
                 <li className="py-3 px-3">Project</li>
                 </Link>

              
              </ul>
            )}
          </div>


        </div>
      </nav>
    </div>
  );
}
