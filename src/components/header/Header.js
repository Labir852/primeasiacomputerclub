import React, { useEffect } from 'react'
import universitylogo from '../../assets/primeasia.gif'
import { BrowserRouter, Link, Routes, useLocation } from 'react-router-dom'

const Header = () => {

  return (
    <div>
      {/* <img src={universitylogo}/> */}
      <BrowserRouter>
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
      </BrowserRouter>


    </div>
  )
}

export default Header