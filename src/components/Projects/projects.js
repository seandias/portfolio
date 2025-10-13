import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
      <span className='projectsTitle'>Projects</span>
      <div className='projectsContainer'>
        <div className='projectCard'>
          <div className='projectImagePlaceholder'>
            <img src={require('../../assets/ezstates.png')} alt='EZSTATE' className='projectImg' />
          </div>
          <div className='projectText'>
            <h2>EZSTATE (NUS CS2103T) — Full-Stack Developer</h2>
            <h3>Aug – Nov 2024</h3>
            <ul>
              <li>Built a CLI property-agent app using Java and JavaFX.</li>
              <li>Increased Codecov test coverage by 20% through boundary tests.</li>
              <li>Shipped User and Developer Guides (GitHub Pages/Jekyll) and CI/CD (GitHub Actions).</li>
            </ul>
          </div>
        </div>

        <div className='projectCard'>
          <div className='projectImagePlaceholder'>
            <img src={require('../../assets/grabrescue.png')} alt='GrabRescue' className='projectImg' />
          </div>
          <div className='projectText'>
            <h2>hackjakarta (Grab x AngelHack) — 2nd Place, Social Responsibility</h2>
            <h3>2024 — GrabRescue</h3>
            <ul>
              <li>Optimized ambulance dispatch with real-time routing (OpenAI API, Google Maps API, Python).</li>
              <li>Built a React prototype with driver push notifications.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects


