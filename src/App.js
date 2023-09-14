
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import About from './components/about/About';
import Chat from './components/chat/Chat';
import Event from './components/event/Event';
import Forum from './components/forum/Forum';
import History from './components/history/History';
import LeaderBoard from './components/leaderboard/LeaderBoard';
import Media from './components/media/Media';
import PauCMS from './components/paucms/PauCMS';
import AcademicStudies from './components/resources/Academic/AcademicStudies';
import AlgorithmVisualizer from './components/resources/AlgorithmVisualizer';
import Resources from './components/resources/Resources';
import Roadmap from './components/roadmap/Roadmap';
import Team from './components/team/Team';
import NotFound from './components/notfound/NotFound';
import Practice from './components/practice/Practice';
import ResumeBuilder from './components/resources/ResumeBuilder';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';



function App() {
  return (
    <div className='bg-blue-200'>
      <Header/>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/chat" element={<Chat/>}/>
          <Route path ="/event" element={<Event/>}/>
          <Route path ="/forum" element={<Forum/>}/>
          <Route path ="/history" element={<History/>}/>
          <Route path ="/leaderboard" element={<LeaderBoard/>}/>
          <Route path ="/media" element={<Media/>}/>
          <Route path ="/practice" element={<Practice/>}/>
          <Route path ="/paucms" element={<PauCMS/>}/>
          <Route path ="/academics" element={<AcademicStudies/>}/>
          <Route path ="/algorithmvisualizer" element={<AlgorithmVisualizer/>}/>
          <Route path ="/resources" element={<Resources/>}/>
          <Route path ="/roadmap" element={<Roadmap/>}/>
          <Route path ="/team" element={<Team/>}/>
          <Route path ="/resumebuilder" element={<ResumeBuilder/>}/>
          <Route path ="/footer" element={<Footer/>}/>
          <Route path ="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
