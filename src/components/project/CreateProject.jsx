import React,{useState} from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

const CreateProject=(props)=> {

    let [projectData,setProjectData]=useState({
        title:'',
        content:''
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(projectData);
        props.createProject(projectData)
        
    }
    const handleChange=(e)=>{
        setProjectData((preValue)=>{
            return {
                ...preValue,
                [e.target.id]:e.target.value
            }
        })
    }
    

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
            <h5 className="grey-text text-darken-3">Create New Project</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id='title' onChange={handleChange} />
            </div>
            <div className="input-field">
                <label htmlFor="content">Project Content</label>
                <textarea  id="content" className="materialize-textarea" onChange={handleChange}></textarea>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create Project</button>
            </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null,mapDispatchToProps)(CreateProject)