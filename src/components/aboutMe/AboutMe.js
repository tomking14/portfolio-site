import React from 'react'
import './aboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
export default function AboutMe() {
  const aboutMeArr = ["Cooking","Playing Video Games", "Listening to Music", "Watching Anime","Chrisopher Nolan Films"]
  const skillsArr = [
    {
      text: "React",
      icon: <FontAwesomeIcon icon={faReact} size='2x'/>
    },
    {
      text: "Java",
      icon: <FontAwesomeIcon icon={faJava} size='2x'/>
    },
    {
      text: "JavaScript",
      icon: <FontAwesomeIcon icon={faJs} size='2x'/>
    },
    {
      text:"CSS3",
      icon: <FontAwesomeIcon icon={faCss3} size='2x'/>
    },
    {
      text:"Bootstrap",
      icon:<FontAwesomeIcon icon={faBootstrap} size='2x'/>
    },
    {
      text:"Python",
      icon:<FontAwesomeIcon icon={faPython} size='2x'/>
    },
    { 
      text: "NodeJS", 
      icon: <FontAwesomeIcon icon={faNodeJs} size='2x' /> 
    },
  ];
  return (
    <div className='about-me-styling'>
    <p className='regular-text-body'>
        I'm a recent graduate from the University of Georgia with a degree in Computer Science.
        My primary focus is <strong class="highlight medium-text-italic"> frontend development</strong>, but I have a strong interest in all aspects of software development.
    </p>
    <p className='regular-text-body'>
        I'm a very curious person, so I am dedicated to continuously learn and expand my knowledge.
        I aim to use my skills and knowledge to develop software that's both effective and makes a real difference.
    </p>
    <h4 className='highlight mb-3 regular-text-italic'>My Skills:</h4>
    <div className='d-flex flex-wrap gap-3 mb-2'>
              {skillsArr.map((item, index) => (
                <p className='regular-text pill-design d-flex align-items-center pill-animation' key={index}>
                {item.text} <span style={{ marginLeft: '5px' }}>{item.icon}</span>
              </p>
              ))}
      </div>
      <h4 className='highlight regular-text-italic mb-3'>Some hobbies and things I love:</h4>
    <div className='d-flex flex-wrap gap-3'>
              {aboutMeArr.map((item, index) => (
                <p className='regular-text  pill-design pill-animation' key={index}>{item}</p>
              ))}
      </div>
    </div>

      
  )
}
