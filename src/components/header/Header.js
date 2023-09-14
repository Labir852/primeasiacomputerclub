
import React from 'react';
import universitylogo from '../../assets/primeasia.gif';
import { Link } from 'react-router-dom';

import {AiOutlineMenu} from "react-icons/ai"
import links from './navitems'
// import { useState } from 'react'



const Header = () => {
 // const [toggle, setToggle] = useState(false);

  return (

    <nav className='px-4 py-8 sticky top-0 z-10 bg-transparent backdrop-filter backdrop-blur-sm bg-opacity-20  border-b border-gray-200'>
      <div className="w-full mx-auto px-4">
        <div className='flex items-center justify-between'>
          <div className='flex flex-1'>
            <img src={universitylogo}/>
          </div>
          <ul className="hidden md:flex flex-1 space-x-4 font-medium text-gray-900 ">
          {links.slice(0, 8).map((link) => (
          <li >
            <Link className='hover:text-indigo-500 focus:text-indigo-600 hover:scale-110 transition-all' to={link.to}>{link.text}</Link>
          </li>
        ))}
            <AiOutlineMenu size={25} className='flex cursor-pointer hover:text-indigo-500 items-center'/>
            <div className='hidden flex-col space-y-4'>
            {links.slice(8).map((link) => (
          <li >
            <Link className='hover:text-indigo-500 focus:text-indigo-600 hover:scale-110 transition-all' to={link.to}>{link.text}</Link>
          </li>
        ))}
            </div>
            </ul>
            <AiOutlineMenu size={25} className='flex md:hidden cursor-pointer hover:text-indigo-500 items-center'/>
            
        </div>
{/* 
    <div>

      <img src={universitylogo} alt="" style={{height:'200px',width:'550px'}}/>

       <img src={universitylogo}/> 
     
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/event">Event</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/leaderboard">LeaderBoard</Link>
          </li>
          <li>
            <Link to="/media">Media</Link>
          </li>
          <li>
            <Link to="/practice">Practice</Link>
          </li>
          <li>
            <Link to="/paucms">PauCMS</Link>
          </li>
          <li>
            <Link to="/academics">Academics</Link>
          </li>
          <li>
            <Link to="/algorithmvisualizer">AlgorithmVisualizer</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/resumebuilder">ResumeBuilder</Link>
          </li>
          <li>
            <Link to="/footer">Footer</Link>
          </li>
          
        </ul>
      </nav>
    </div> */}





      </div>
    </nav>
  )
}

export default Header