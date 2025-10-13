import React from 'react'
import './intro.css'
import bg from '../../assets/Adobe Express - file.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
    <div className='introContent'>
        <p className='hello'>Hello,</p>
        <p className='introText'>I'm <span className='introName'>Sean Dias</span></p>
        <p className='introTitle'>Computer Science Student at NUS</p>
        <p className='introPara'>
            I’m a Computer Science student at NUS with a minor in Quantitative Finance, currently in my third year and expected to graduate by the end of the year. I’m passionate about AI/ML, product management, and building meaningful tech solutions that bridge people and technology. Along the way, I’ve worked on various projects that you’ll find on this site — each a small experiment in learning, design, and impact. Outside of tech, I enjoy playing football (and most other sports) on weekends and traveling whenever I get the chance 😎.
        </p>
        <Link to='contact' spy={true} smooth={true} offset={-80} duration={500}>
          <button className='btn primaryCta'>Let's Connect</button>
        </Link>        
    </div>
    <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro
