import { useContext } from 'react'
import './Projects.css'
import ProjectsContext from '../../context/ProjectsContext'

const Projects = () => {
    const context = useContext(ProjectsContext)
    const {projectsList} = context
  return (
    <div id='projects' className='projects-section'>
        <h2>Projects</h2>
        <hr className='rule'/>
        <ul className='projects-list'>
            {projectsList.map((each)=>{
                const {project,projectLink,description,url}=each
                return (
                    <li className='project-list-item' key={each.project}>
                        <div className='project-detail-section'>
                        <h2 className='project-title'>{project}</h2>
                        <p className='project-description'>{description}
                        </p>
                        <a href={projectLink} target='_blank'>
                            <button className='view-project-button'>View Project</button>
                        </a>                
                        </div>
                        <div className='project-image-section'>
                            <img 
                            src={url}
                            className='project-image'
                            alt='project'
                            />
                        </div>
                    </li>
                )
            })}
           
        </ul>
    </div>
  )
}

export default Projects