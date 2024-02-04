import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from '../pic/box.avif'
import Image1 from '../pic/home.jpg'
import Image2 from '../pic/images1.avif'
import Image3 from '../pic/tic.png'
export default function Project() {
  return (
    <div className='pt-28 pb-10 bg-gray-950 text-efd09e'>
      <div className='md:flex md:justify-around md:w-7/12 grid grid-cols-1  w-11/12 mx-auto'>
      <Card sx={{ maxWidth: 345 }} className='border-2 border-b76e79 bg-gray-950 mx-auto mt-2 mb-2'>
      <CardMedia
        sx={{ height: 140 }}
        image={Image}
        title="green iguana"
      />
      <CardContent className='bg-gray-950 text-efd09e'>
        <Typography gutterBottom variant="h5" component="div" className="text-b76e79">
          Fittera
        </Typography>
        <Typography variant="body2" className="text-efd09e bg-gray-950">
          I have developed a Fittera webpage using ReactJS, Tailwind, and Material UI. The website is fully responsive, ensuring optimal viewing and functionality across various devices.
        </Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: 'black', color: '#efd09e' }}>
  <Button size="small" sx={{ border: '1px solid', backgroundColor: 'black', color: '#efd09e' }}>
  <a href="https://github.com/Rohit-notna/FITTERA" target="_blank" rel="noopener noreferrer" className='no-underline '> Github</a>
  </Button>
  <Button size="small" sx={{ border: '1px solid', backgroundColor: 'black', color: '#efd09e' }}>
  <a href="https://fittera.in/" target="_blank" rel="noopener noreferrer" className='no-underline '> Website</a>
  </Button>
</CardActions>

    </Card>

    <Card sx={{ maxWidth: 345 }} className='border-2 border-b76e79 mx-auto mt-2 mb-2'>
      <CardMedia
        sx={{ height: 140 }}
        image={Image1}
        title="green iguana"
      />
      <CardContent className='bg-gray-950 text-efd09e'>
        <Typography gutterBottom variant="h5" component="div" className="text-b76e79">
         Real Estate
        </Typography>
        <Typography variant="body2" className="text-efd09e bg-black">
        I have developed a real estate website using a tech stack that includes ReactJS, Tailwind CSS, Material UI, JavaScript, Node.js, Express.js, MongoDB, Redux, and Firebase. 
        </Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: 'black', color: '#efd09e' }}>
  <Button size="small" sx={{ border: '1px solid', backgroundColor: 'black', color: '#efd09e' }}>
  <a href="https://github.com/Rohit-notna/E-BROKER" target="_blank" rel="noopener noreferrer" className='no-underline '> Github</a>
  </Button>
  <Button size="small" sx={{ border: '1px solid', backgroundColor: 'black', color: '#efd09e' }}>
  <a href="https://e-broker-front-end-auction.vercel.app/" target="_blank" rel="noopener noreferrer" className='no-underline '> Website</a>
  </Button>
</CardActions>

    </Card>
    
      </div>

      <div className='md:flex md:justify-around md:w-7/12 grid grid-cols-1  w-11/12 mx-auto mt-6'>

      <Card sx={{ maxWidth: 345 }} className='border-2 border-b76e79 bg-gray-950 mx-auto mt-2 mb-2'>
      <CardMedia
        sx={{ height: 140 }}
        image={Image2}
        title="green iguana"
      />
      <CardContent className='bg-gray-950 text-efd09e'>
        <Typography gutterBottom variant="h5" component="div" className="text-b76e79">
          School
        </Typography>
        <Typography variant="body2" className="text-efd09e bg-gray-950">

        I developed a school website with Next.js, MySQL, Tailwind CSS, Node.js, and Material UI, enabling administrators to upload and manage school details.
        </Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: 'black', color: '#efd09e' }}>
  <Button size="small" sx={{ border: '1px solid', backgroundColor: 'black', color: '#efd09e' }}>
  <a href="https://github.com/Rohit-notna/school" target="_blank" rel="noopener noreferrer" className='no-underline '> Github</a>
  </Button>
  
</CardActions>

    </Card>

    <Card sx={{ maxWidth: 345 }} className='border-2 border-b76e79 mx-auto mt-2 mb-2'>
      <CardMedia
        sx={{ height: 140 }}
        image={Image3}
        title="green iguana"
      />
      <CardContent className='bg-gray-950 text-efd09e'>
        <Typography gutterBottom variant="h5" component="div" className="text-b76e79">
        Tic Tac Toe
        </Typography>
        <Typography variant="body2" className="text-efd09e bg-black">
   
I developed a Tic Tac Toe game using React.js, JavaScript, and Bootstrap. The game displays a "You Win" message when a player wins, and users have the option to restart the game.
        </Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: 'black', color: '#efd09e' }}>
  <Button size="small" sx={{ border: '1px solid', backgroundColor: 'black', color: '#efd09e' }}>
  <a href="https://github.com/Rohit-notna/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer" className='no-underline '> Github</a>

  </Button>
  
</CardActions>

    </Card>
      </div>
      
    </div>
  )
}
