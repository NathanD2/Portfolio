import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Element } from "react-scroll";

import Header from "./components/Header"
import HomeGraphic from "./components/HomeGraphic"
import MainProjects from "./components/MainProjects"
import Projects from "./components/Projects"
import About from "./components/About"
import MainAbout from "./components/MainAbout"
import MainContactMe from "./components/MainContactMe"
import ProjectModal from './components/ProjectModal.js';

import { HighlightProjectData } from './ProjectData'

function App() {

  const [hightlightProjects, setHightlightProjects] = useState([]);

  useEffect(() => {
    setHightlightProjects(HighlightProjectData);
  }, [])

  // const findProjectById = (id) => {
  //   const project = hightlightProjects.find(project => project.id === id)
  //   return project;
  // }

  const [showModal, setShowModal] = useState(false);

  // Modal States
  const [projectImageName, setProjectImageName] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [links, setLinks] = useState([]);
  const [desc, setDesc] = useState("");
  const [descLong, setDescLong] = useState("");

  const openModal = (projectImageName, title, tags, links, desc, descLong) => {
    setProjectImageName(projectImageName);
    setTitle(title);
    setTags(tags);
    setLinks(links);
    setDesc(desc);
    setDescLong(descLong);

    setShowModal(true);
    console.log("Project:", projectImageName, title, tags, links, desc, descLong);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <ProjectModal show={showModal} handleClose={closeModal} projectImageName={projectImageName} title={title} tags={tags} links={links} desc={desc} descLong={descLong}>
            <p>Modal</p>
          </ProjectModal>
          <Routes>
            <Route path="/" element={
              <>
              <Element name="home" id="home">
                <HomeGraphic />
              </Element>
              

              

                <div className="content">
                  <Element name="projects" id="projects">
                    {hightlightProjects.length > 0 ? <MainProjects projects={hightlightProjects} openModal={openModal}/> : 'No projects to show'}
                  </Element>
                  <Element name="about" id="about">
                  <MainAbout />
                    {/* <MainAboutContacts /> */}
                  </Element>
                  <Element name="contact" id="contact">
                    <MainContactMe />
                  </Element>
                  
                </div>
              </>
            } />
            <Route path='/projects' element={
              <>
                <Projects openModal={openModal}/>
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
