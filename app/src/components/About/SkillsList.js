import React, { useState, useEffect } from 'react';
import SkillsCard from './SkillsCard';
import { skillData } from '../../data/data';

const SkillsList = () => {
    const [ skills, setSkills ] = useState([]);

    useEffect(() => {
        setSkills(skillData);
    }, [])

    return(
        <div className='skills'>
            {skills.map(skill => {
                return <SkillsCard skill={skill} key={skill.id}/>
            })}
        </div>
    );
}

export default SkillsList;