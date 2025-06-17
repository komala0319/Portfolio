import React from 'react'

const Skills = () => {
    const skills=[{language:'HTML/CSS',level:90},
        {language:'JAVASCRIPT',level:80},
        {language:'REACT',level:80},
        {language:'BOOSTRAP',level:90},
        {language:'GIT',level:80}];
  return (
    <section id='skills' className='skills'>
        <h2>My Skills</h2>
        <div className='skills-container'>
            {skills.map((skill,index)=>(
            <div key={index}className='skill-item'>
                <h3>{skill.language}</h3>
                <div className='skill-bar'>
                <div className='skill-progress' style={{width: `${skill.level}%`}}>
           </div>   
        </div>
    </div>
    ))}
    </div>
    </section>
  )
}

export default Skills




