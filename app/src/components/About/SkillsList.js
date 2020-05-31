import React, { useState, useEffect } from 'react';
import SkillsCard from '../components/about/SkillsCard';
import { skillData } from '../../data/data';

export default () => {
    const [ skills, setSkills ] = useState([]);

    useEffect(() => {
        setSkills(skillData);
    }, [])

    return(
        <div>
            {skills.map(skill => {
                return <SkillsCard skill={skill} key={skill.id}/>
            })}
        </div>
    );
}