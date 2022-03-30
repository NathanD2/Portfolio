import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Header from "./components/Header"
import HomeGraphic from "./components/HomeGraphic"
import MainProjects from "./components/MainProjects"
import Projects from "./components/Projects"
import About from "./components/About"
import MainAbout from "./components/MainAbout"
import MainContactMe from "./components/MainContactMe"

import { HighlightProjectData } from './ProjectData'

function App() {

  const [hightlightProjects, setHightlightProjects] = useState([]);

  useEffect(() => {
    setHightlightProjects(HighlightProjectData);
  })

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
              <HomeGraphic />
                <div className="content">
                  
                  {hightlightProjects.length > 0 ? <MainProjects projects={hightlightProjects} /> : 'No projects to show'}
                  <MainAbout />
                  <MainContactMe />
                </div>
              </>
            } />
            <Route path='/projects' element={
              <>
                <Projects />
              </>} />
            <Route path='/about' element={
              <>
                <About />
              </>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
