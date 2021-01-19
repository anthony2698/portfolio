import React from 'react';
import Title from './Title';
import { ProjectsBody } from '../styles/StyledComponents.js';
import Projects from '../components/Projects/Projects.js';

const ProjectsPage = () => {
    return (
        <ProjectsBody>
            <Title title='Featured Projects'/>
            <Projects />
        </ProjectsBody>
    );
}

export default ProjectsPage;