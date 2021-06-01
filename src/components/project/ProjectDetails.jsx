import React from 'react'

const ProjectDetails=(props)=> {
    let id=props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by the Nerdytech ❤️</div>
                <div>2nd sept, 2am</div>
            </div>
        </div>
    )
}

export default ProjectDetails