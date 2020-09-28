import React, { useState, useEffect }from 'react'
import { projectData } from '../../data'

const Projects = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        setData(projectData);
    }, [])

    return(
        <div></div>
    )
}

export default Projects;

