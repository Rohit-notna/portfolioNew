import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div>
      <footer className="text-center bg-gray-950">
        <div className='mx-auto '>
          <h1 className='text-b76e79 lg:text-5xl md:text-2xl text-lg font-semibold p-2'>Follow me on:</h1>
        </div>

        <div className='flex justify-center space-x-4 pt-2 pb-8'>
          <span>
          <a href="https://www.instagram.com/_its_sabu7_/?next=%2F" target="_blank" rel="noopener noreferrer" className='no-underline '>
            <Icon icon="skill-icons:instagram"  className='lg:text-4xl md:text-2xl text-lg mr-6'/></a>
          </span>
          <span>
          <a href="https://www.linkedin.com/in/rohit-notna-1b38a4216/" target="_blank" rel="noopener noreferrer" className='no-underline '>
            <Icon icon="devicon:linkedin" className='lg:text-4xl md:text-2xl text-lg mr-6' /></a>
          </span>
          <span>
          <a href="https://github.com/Rohit-notna" target="_blank" rel="noopener noreferrer" className='no-underline '>
          <Icon icon="bi:github" className='lg:text-4xl md:text-2xl text-lg mr-6 bg-white'/></a>
          </span>
        </div>

        <div className="text-center p-1  text-efd09e lg:text-xl md:text-2xl text-lg pt-3 pb-3 bg-gray-900" >
          © 2024 Copyright:
          <Link to="https://mdbootstrap.com/" className="text-body">
            Rohit Notna
          </Link>
        </div>
      </footer>
    </div>
  );
}
