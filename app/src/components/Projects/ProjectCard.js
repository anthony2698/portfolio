import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme.js';

const Card = styled.div`
    font-family:${theme.font};
    height:100%;
    width: 80%;
    max-width: 850px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    border-radius: 10px;
    padding: 20px;
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: ${theme.colors.lightestNavy};
    .info{
        h2 {
            color:${theme.colors.green};
            font-size:${theme.fontSizes.titleLine};
        }
        p{
            color: ${theme.colors.white};
            margin: 10px;
        }
        h4{
            color: ${theme.colors.slate};
            margin: 10px;
        }
        .task-container {
            color: ${theme.colors.white};
            ul {
                padding: 0;
            }
            ul li {
                list-style-position: inside;
                margin: 0;
            }
        }
    }
    .card{
        img{
            margin: 10px;
            width: 400px;
            height: 250px;
        }
        .card-footer{
            width: 250px;
            height: 50px;
            display: flex;
            align-items: center;
        }
    a {
        color:${theme.colors.green};
        margin-right: 4%;
    }
    }
`;
const ProjectCard = ({ project }) => {
    return (
        <Card>
            <div className='info'>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <h4>{project.stack}</h4>
                <div className='task-container'>
                    <ul>
                        {project.tasks.map(task => {
                            return <li key={task}>{task}</li>
                        })}
                    </ul>
                </div>
            </div>
            <div className='card'>
                {project.img && (
                    <img src={project.img} alt={project.name}/>
                )}
                {(project.url || project.github ) && (
                    <div className='card-footer'>
                        {project.deployed && (
                            <a href={project.deployed} target='_blank' rel="noopener noreferrer" >
                                Deployed
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target='_blank' rel="noopener noreferrer" >
                                Github
                            </a>
                        )}  
                    </div>
                )}
            </div>
        </Card>
    );
}

export default ProjectCard;