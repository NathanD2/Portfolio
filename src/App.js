import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Header from "./components/Header"
import HomeGraphic from "./components/HomeGraphic"
import ProjectHighlights from "./components/ProjectHighlights"
import Projects from "./components/Projects"
import About from "./components/About"

function App() {

  // States are immutable. Need to use setTasks to create a new State.
  const [hightlightProjects, setHightlightProjects] = useState([
    {
      id: 0,
      projectImageName: "https://i.imgur.com/NfZxz6S.jpg",
      projectTitle: "Web Portfolio",
      tags: [
        {tag: 'Javascript', color: 'lightgreen'},
        {tag: 'React', color: 'lightblue'},
        {tag: 'Sass', color: 'pink'},
        {tag: 'CSS', color: 'pink'},
        {tag: 'HTML5', color: 'lightblue'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    },
    {
      id: 1,
      projectImageName: "https://i.imgur.com/71ur9Al.gif",
      projectTitle: "Title",
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    },
    {
      id: 2,
      projectImageName: "https://i.imgur.com/71ur9Al.gif",
      projectTitle: "Title",
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 0,
      projectImageName: "https://i.imgur.com/NfZxz6S.jpg",
      projectTitle: "Web Portfolio",
      tags: [
        {tag: 'Javascript', color: 'lightgreen'},
        {tag: 'React', color: 'lightblue'},
        {tag: 'Sass', color: 'pink'},
        {tag: 'CSS', color: 'pink'},
        {tag: 'HTML5', color: 'lightblue'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    },
    {
      id: 1,
      projectImageName: "https://i.imgur.com/71ur9Al.gif",
      projectTitle: "Title",
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    },
    {
      id: 2,
      projectImageName: "https://i.imgur.com/71ur9Al.gif",
      projectTitle: "Title",
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    },
    {
      id: 3,
      projectImageName: "https://i.imgur.com/71ur9Al.gif",
      projectTitle: "Title",
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    },
    {
      id: 4,
      projectImageName: "https://i.imgur.com/71ur9Al.gif",
      projectTitle: "Title",
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    },
    {
      id: 5,
      projectImageName: "https://i.imgur.com/71ur9Al.gif",
      projectTitle: "Title",
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    },
    {
      id: 6,
      projectImageName: "https://i.imgur.com/71ur9Al.gif",
      projectTitle: "Title",
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    },
    {
      id: 7,
      projectImageName: "https://i.imgur.com/71ur9Al.gif",
      projectTitle: "Title",
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    },
    {
      id: 8,
      projectImageName: "https://i.imgur.com/71ur9Al.gif",
      projectTitle: "Title",
      tags: [{tag: 'Javascript', color: 'lightgreen'}, {tag: 'React', color: 'lightblue'}, {tag: 'Javascript', color: 'pink'}],
      desc: "Excepteur reprehenderit non dolor excepteur. Deserunt ea voluptate deserunt consectetur aliquip nulla commodo. Ex reprehenderit commodo aliqua non qui laboris sit. Voluptate nostrud fugiat deserunt proident ut eiusmod in pariatur ad occaecat Lorem aliqua cillum esse."
    },
  ]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
              <HomeGraphic />
                <div className="content" id="projects">
                  
                  {hightlightProjects.length > 0 ? <ProjectHighlights projects={hightlightProjects} /> : 'No projects to show'}
                  <Link to="/projects" className='center-horizon link-no-decoration'>
                    <h1 className="logo-text-bold content-title click-me-color more-projects" >{"See my other Projects"}</h1>
                  </Link>
                </div>
              </>
            } />
            <Route path='/projects' element={
              <>
                <Projects projects={projects} />
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
