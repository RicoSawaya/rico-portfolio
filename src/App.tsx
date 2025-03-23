//import { useState } from 'react'
import './App.css'
import { Routes,Route } from "react-router-dom";
import HomePage from './pages/homePage';
import ProjectsPage from './pages/projectsPage';
import StudiesPage from './pages/studiesPage';
import LiftingPage from './pages/liftingPage';
import NavBar from './components/navbar';

function App() {
  return (
    <div className='main-body'>
      <NavBar/>
      <Routes>
        <Route path="/rico-portfolio/" element={<HomePage/>}/>
        <Route path="/rico-portfolio/projects" element={<ProjectsPage/>}/>
        <Route path="/rico-portfolio/studies" element={<StudiesPage/>}/>
        <Route path="/rico-portfolio/lifting" element={<LiftingPage/>}/>
      </Routes>
    </div>
  )
}

export default App
