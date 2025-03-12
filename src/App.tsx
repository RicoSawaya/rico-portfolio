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
        <HomePage></HomePage>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/studies" element={<StudiesPage/>}/>
        <Route path="/lifting" element={<LiftingPage/>}/>
      </Routes>
    </div>
  )
}

export default App
