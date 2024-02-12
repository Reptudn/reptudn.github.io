import React from 'react';
import ProjectItem from './ProjectItem';

class Projects extends React.Component {
    
    // TODO: Replace with actual fetch and create actual API to fetch from
    componentDidMount() {
        fetch('http://127.0.0.1:5000/api/projects')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
        return (
        <div class="projects">
            <h1>Projects</h1>
            <p>Here are some of my projects:</p>
            <div class="project-container">
                {this.state.data.map((project, index) => (<ProjectItem key={index} project={project} />))}
            </div>
        </div>
        );
    }
}

export default Projects;