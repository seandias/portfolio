import React from 'react'
import './navbar.css'
import logo from '../../assets/SKD_logo_small.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='desktopMenu'>
          <Link to='intro' className='desktopMenuListItem' spy={true} smooth={true} offset={-80} duration={500}>Home</Link>
          <Link to='workexp' className='desktopMenuListItem' spy={true} smooth={true} offset={-80} duration={500}>Work Experience</Link>
          <Link to='projects' className='desktopMenuListItem' spy={true} smooth={true} offset={-80} duration={500}>Projects</Link>
      </div>
      <Link to='contact' spy={true} smooth={true} offset={-80} duration={500} onSetActive={() => { try { document.getElementById('phoneLink')?.classList.add('flash'); document.getElementById('emailLink')?.classList.add('flash'); setTimeout(()=>{ document.getElementById('phoneLink')?.classList.remove('flash'); document.getElementById('emailLink')?.classList.remove('flash'); }, 1200);} catch(e){} }}>
        <button className='desktopMenuBtn'>
          <img src={contactImg} alt='' className='desktopMenuImg'/>Contact Me
        </button>
      </Link>
      
    </nav>
  )
}

export default Navbar
