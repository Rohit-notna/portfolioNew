import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Github from './Components/Github';
import Footer from './Components/Footer';

function App() {
  return (
  <div>
<BrowserRouter>
<Navbar/>
<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Project" element={<Project/>}/>
  <Route path="/Github" element={<Github/>}/>
</Routes>
<Footer/>
</BrowserRouter>


  </div>
  );
}

export default App;
