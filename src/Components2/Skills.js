import React from 'react';
import { Icon } from '@iconify/react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Skills() {
  return (
    <div className='bg-gray-950 text-efd09e border border-b76e79 p-10'>
     <div>
      <h1 className='pt=4 text-5xl font-extrabold pb-8 mx-auto text-center'>Skills and Tools</h1>

     </div>





   <div className='md:flex md:justify-center grid grid-cols-2 gap-5'>

   <Card sx={{ maxWidth: 345, backgroundColor: 'black', border: '1px solid #B76E79' }}>
      <CardMedia
        component={() => <Icon icon="devicon:react" className="text-9xl text-efd09e p-2" />}
        alt="icon"
        height="140"
        sx={{ backgroundColor: '#1E1E1E' }}  // Set background color inline for CardMedia
      />
      <CardContent className="text-efd09e">
        <Typography gutterBottom variant="h5" component="div" className="text-efd09e">
          React JS
        </Typography>
      </CardContent>
    </Card>


    <Card sx={{ maxWidth: 345, backgroundColor: 'black', border: '1px solid #B76E79' }}>
      <CardMedia
        component={() => <Icon icon="devicon:nextjs"  className="text-9xl text-efd09e p-2" />}
        alt="icon"
        height="140"
        sx={{ backgroundColor: '#1E1E1E' }}  // Set background color inline for CardMedia
      />
      <CardContent className="text-efd09e">
        <Typography gutterBottom variant="h5" component="div" className="text-efd09e">
          Next JS
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345, backgroundColor: 'black', border: '1px solid #B76E79' }}>
      <CardMedia
        component={() => <Icon icon="skill-icons:expressjs-light"  className="text-9xl text-efd09e mx-auto text-center p-2" />}
        alt="icon"
        height="140"
        sx={{ backgroundColor: '#1E1E1E' }}  // Set background color inline for CardMedia
      />
      <CardContent className="text-efd09e">
        <Typography gutterBottom variant="h5" component="div" className="text-efd09e mx-auto text-center">
          Express JS
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345, backgroundColor: 'black', border: '1px solid #B76E79' }}>
      <CardMedia
        component={() => <Icon  icon="logos:nodejs-icon"  className="text-9xl text-efd09e p-2" />}
        alt="icon"
        height="140"
        sx={{ backgroundColor: '#1E1E1E' }}  // Set background color inline for CardMedia
      />
      <CardContent className="text-efd09e">
        <Typography gutterBottom variant="h5" component="div" className="text-efd09e">
          Node JS
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ maxWidth: 345, backgroundColor: 'black', border: '1px solid #B76E79' }} >
      <CardMedia
        component={() => <Icon icon="logos:mongodb-icon" className="text-9xl text-efd09e mx-auto text-center p-2" />}
        alt="icon"
        height="140"
        sx={{ backgroundColor: '#1E1E1E' }}  // Set background color inline for CardMedia
      />
      <CardContent className="text-efd09e text-center mx-auto">
        <Typography gutterBottom variant="h5" component="div" className="text-efd09e ">
          Mongo DB
        </Typography>
      </CardContent>
    </Card>
    
    <Card sx={{ maxWidth: 345, backgroundColor: 'black', border: '1px solid #B76E79' }} >
      <CardMedia
        component={() => <Icon icon="devicon:javascript"  className="text-9xl text-efd09e mx-auto text-center p-2" />}
        alt="icon"
        height="140"
        sx={{ backgroundColor: '#1E1E1E' }}  // Set background color inline for CardMedia
      />
      <CardContent className="text-efd09e text-center mx-auto">
        <Typography gutterBottom variant="h5" component="div" className="text-efd09e ">
          JavaScript
        </Typography>
      </CardContent>
    </Card>











   </div>

<div className='md:flex md:justify-center grid grid-cols-2 gap-5 pt-10'>

<Card sx={{ maxWidth: 345, backgroundColor: 'black', border: '1px solid #B76E79' }} >
      <CardMedia
        component={() => <Icon icon="icon-park:html-five" className="text-9xl text-white mx-auto text-center p-2" />}
        alt="icon"
        height="140"
        sx={{ backgroundColor: '#1E1E1E' }}  // Set background color inline for CardMedia
      />
      <CardContent className="text-efd09e text-center mx-auto">
        <Typography gutterBottom variant="h5" component="div" className="text-efd09e ">
         HTML
        </Typography>
      </CardContent>
    </Card>


    <Card sx={{ maxWidth: 345, backgroundColor: 'black', border: '1px solid #B76E79' }} >
      <CardMedia
        component={() => <Icon  icon="skill-icons:css"  className="text-9xl text-efd09e mx-auto text-center p-2" />}
        alt="icon"
        height="140"
        sx={{ backgroundColor: '#1E1E1E' }}  // Set background color inline for CardMedia
      />
      <CardContent className="text-efd09e text-center mx-auto">
        <Typography gutterBottom variant="h5" component="div" className="text-efd09e ">
         CSS
        </Typography>
      </CardContent>
    </Card>


    <Card sx={{ maxWidth: 345, backgroundColor: 'black', border: '1px solid #B76E79' }} >
      <CardMedia
        component={() => <Icon icon="skill-icons:bootstrap" className="text-9xl text-efd09e mx-auto text-center p-2" />}
        alt="icon"
        height="140"
        sx={{ backgroundColor: '#1E1E1E' }}  // Set background color inline for CardMedia
      />
      <CardContent className="text-efd09e text-center mx-auto">
        <Typography gutterBottom variant="h5" component="div" className="text-efd09e ">
         Bootstrap
        </Typography>
      </CardContent>
    </Card>


    <Card sx={{ maxWidth: 345, backgroundColor: 'black', border: '1px solid #B76E79' }} >
      <CardMedia
        component={() => <Icon  icon="devicon:tailwindcss"  className="text-9xl text-efd09e mx-auto text-center p-2" />}
        alt="icon"
        height="140"
        sx={{ backgroundColor: '#1E1E1E' }}  // Set background color inline for CardMedia
      />
      <CardContent className="text-efd09e text-center mx-auto">
        <Typography gutterBottom variant="h5" component="div" className="text-efd09e ">
          Tailwind
        </Typography>
      </CardContent>
    </Card>




  
</div>







    </div>
  );
}








{/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto md:gap-8'>
        

<div className='mx-auto p-5 border border-b76e79 mt-6 md:mt-0 mb-4 text-center'>
  <Icon icon="devicon:react" className='text-9xl p-3' />
  <h2 className='font-extrabold mt-2 text-3xl md:text-xl p-3'>React JS</h2>
</div>

<div className='mx-auto p-5 border border-b76e79 mt-6 md:mt-0 mb-4 text-center'>
  <Icon icon="teenyicons:nextjs-outline" className='text-9xl p-3' />
  <h2 className='font-extrabold mt-2 text-3xl md:text-xl p-3'>Next JS</h2>
</div>


<div className='mx-auto p-5 border border-b76e79 mt-6 md:mt-0 mb-4 text-center'>
  <Icon icon="skill-icons:expressjs-light" className='text-9xl p-3 mx-auto' />
  <h2 className='font-extrabold mt-2 text-3xl md:text-xl p-3'>Express JS</h2>
</div>


<div className='mx-auto p-5 border border-b76e79 mt-6 md:mt-0 mb-4 text-center'>
  <Icon icon="bxl:nodejs" className='text-9xl p-3' />
  <h2 className='font-extrabold mt-2 text-3xl md:text-xl p-3'>Node JS</h2>
</div>


<div className='mx-auto p-5 border border-b76e79 mt-6 md:mt-0 mb-4 md:text-center'>
  <Icon icon="logos:mongodb-icon" className='text-9xl p-3 mx-auto' />
  <h2 className='font-extrabold mt-2 text-3xl md:text-xl p-3'>Mongo DB</h2>
</div>

</div> */}