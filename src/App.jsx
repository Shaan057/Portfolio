import { useContext, useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Home from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import ProjectsContext from './context/ProjectsContext.js'
import projects from './assets/ProjectsList.js'
import Contact from './components/Contact/Contact.jsx'

function App() {
    const [projectsList,setProjectsList] = useState(projects)

    const addProjectsList = (obj) =>{
    setProjectsList((prev)=>[...prev,obj])
    }

  return (
        <ProjectsContext.Provider value={{
        projectsList,
        addProjectsList
    }}>
    <div className='bg-container'>
      <Header/>
      <Home/>
      <Projects/>
      <Contact/>
    </div>
    <div className='footer'>
      <img className='footer-vector'
       src='https://res.cloudinary.com/dx8csuvrh/image/upload/v1706111652/Portfolio/Vector_hhgty3.png'
      alt='vector'/>
    </div>
    </ProjectsContext.Provider>
  )
}

export default App
