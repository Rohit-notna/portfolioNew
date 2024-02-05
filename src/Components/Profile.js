import React from 'react';
import Write from '../Components2/Write';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import image from '../pic/rohit.jpg'


export default function Profile() {
  const navigate =  useNavigate();

  const handleNavigate=()=>{
    window.open("https://in.docs.wps.com/l/sIM-RjrVLtcWRrQY?v=v2")
    }

  return (
    <div className='bg-gray-950 text-efd09e pb-20'>
      <div className='grid grid-cols-2 w-10/12 mx-auto pt-20'>

      
      <div className=' md:pt-16'>
        <h1 className='md:pt-5 md:text-5xl text-xl font-extrabold mx-auto text-center '>Hi I'm</h1>
        <h1 className='md:pt-7 md:text-5xl text-xl font-extrabold mx-auto text-center text-b76e79' >Rohit Notna</h1>
        <h3 className='md:pt-7 md:text-5xl text-xl font-extrabold mx-auto text-center'><Write/></h3>
        <div className='flex justify-center items-center mt-9  text-center md:p-0 p-4'>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" className='mx-auto' style={{ color: '#efd09e', borderColor: '#b76e79' }}><a href="https://github.com/Rohit-notna" target="_blank" rel="noopener noreferrer" className='no-underline '> Github</a></Button>
            <Button variant="outlined" style={{ color: '#efd09e', borderColor: '#b76e79' }} onClick={handleNavigate}>Resume</Button>
          </Stack>
    
    
        </div>
        </div>
        <div className='md:pt-16 lg:pt-4'>
        <img src={image} className='md:p-10 rounded-full'/>
  </div> 


      </div>
    </div>
  );
}
