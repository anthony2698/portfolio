import React, { useState, useEffect }from 'react'
import { projectData } from '../../data/data.js';
import {  ProjectsContent } from '../../styles/StyledComponents.js';
import ProjectCard from '../Projects/ProjectCard.js';

const Projects = () => {
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        setProjects(projectData);
    }, [])

    return(
        <ProjectsContent>
            {projects.map(project => {
                return <ProjectCard key={project.id} project={project}/>
            })}
        </ProjectsContent>
    )
}

export default Projects;

