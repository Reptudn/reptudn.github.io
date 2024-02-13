import React from 'react';
import './ProjectItem.css';

function ProjectItem({ project }) {

    return (
        <div class="project-item">
            <a href={project.link} target='_blank' rel="noreferrer"><h2>{project.name}</h2></a>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectItem;