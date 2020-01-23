import React from 'react'

const SkillsSection = (props) => {
    let skillsList = props.skills.map(skill => 
        <div className="skill">{skill}</div>)
    return (
        <div className="skills-list">
            {skillsList}
        </div>
    );
}
 
export default SkillsSection;