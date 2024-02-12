import React from 'react';
import './ProjectItem.css';

function ProjectItem({ project }) {

    return (
        <div class="project-item">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.url}>Link to project</a>
        </div>
    );
}

export default ProjectItem;