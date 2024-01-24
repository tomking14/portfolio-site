import React from 'react'
import './aboutMe.css'

export default function AboutMe() {
  const aboutMeArr = ["Cooking","Playing Video Games", "Listening to Music", "Watching Anime","Chrisopher Nolan Films"]
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
    <p className='highlight regular-text-italic fs-4'>Some hobbies and things I love:</p>
    <div className='d-flex flex-wrap gap-3'>
              {aboutMeArr.map((item, index) => (
                <p className='regular-text  pill-design pill-animation' key={index}>{item}</p>
              ))}
       </div>
    </div>

      
  )
}
