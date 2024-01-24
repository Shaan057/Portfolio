import { useContext } from 'react'
import './AddProjectForm.css'


import { useState } from 'react'
import ProjectsContext from '../../context/ProjectsContext'

const AddProjectForm = () => {
    const [project,setProject] = useState('')
    const [projectLink,setProjectLink] = useState('')
    const [description,setDescription] = useState('')
    const context = useContext(ProjectsContext)
    const {addProjectsList}=context

    const onAddButtonClicked=(e)=>{
        e.preventDefault()
        const projectObject = {
            project,
            projectLink,
            description,
            url:'https://res.cloudinary.com/dx8csuvrh/image/upload/v1706105484/Portfolio/Sample_projects_wpmnzh.jpg'
        }
        addProjectsList(projectObject)
        setProject('')
        setProjectLink('')
        setDescription('')
    }

  return (

    <div className='form-section'>
        <h3 className='add-projects-heading'>Add Project</h3>
        <hr className='rule'/>
    <form className='form' onSubmit={onAddButtonClicked}>
        <div className='input-section'>
            <label htmlFor='projectName'>Project</label>
            <input id='projectName' className='name-input' type='text' value={project} onChange={(e)=>setProject(e.target.value)}/>
        </div>
           <div className='input-section'>
            <label htmlFor='link'>Project Link</label>
            <input id='link' className='name-input' type='text' value={projectLink} onChange={(e)=>setProjectLink(e.target.value)}/>
        </div>
           <div className='input-section'>
            <label htmlFor='description'>Description</label>
            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} id='description' className='text-area' type='text'/>
        </div>
        <button className='add-button' type='submit'>Add</button>
    </form>
    </div>  
  )
}

export default AddProjectForm