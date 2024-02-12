import React from 'react';
import ProjectItem from './ProjectItem';

class Projects extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null
        };
    }

    // TODO: Replace with actual fetch and create actual API to fetch from
    componentDidMount() {
        fetch('http://127.0.0.1:5000/api/projects')
            .then(response => {
                if (!response.ok)
                    throw new Error("API offline");
                return response.json();
            })
            .then(data => this.setState({ data }))
            .catch(error => this.setState({ error: error.toString()}));
    }

    render() {
        if (this.state.error)
        {
            return <div>API offline.. can't load Projects</div>
        } else if (this.state.data) {
            return (
                <div class="projects">
                    <h1>Projects</h1>
                    <p>Here are some of my projects:</p>
                    <div class="project-container">
                        {this.state.data.map((project, index) => (<ProjectItem key={index} project={project} />))}
                    </div>
                </div>
            );
        } else
            return <div>Loading Projects...</div>
    }
}

export default Projects;