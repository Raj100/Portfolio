import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import "./Prasang.css"
const TankAlert = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div className='ProjectsPage'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cWKBjlTCxV4?si=-CzTbQK0OVUcdNd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>Try it : <a href='https://prasang-nitg.netlify.app/'  target="_blank">https://prasang-nitg.netlify.app/</a></p>
      <p>Code: <a href="https://github.com/Raj100/Prasang"  target="_blank">https://github.com/Raj100/Prasang</a></p>
    </div>
    <Footer/>
    </div>
  )
}

export default TankAlert
