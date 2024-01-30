import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import "./Prasang.css"
const projectInfoPage = ({ProjectName,ProjectLink}) => {
  return (
    <>
    <Navbar></Navbar>
    <div className='ProjectsPage'>
      <h1>{ProjectName}</h1>
      <iframe width="560" height="315" src={ProjectLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      {/* <p>Try it : <a href=''  target="_blank">https://prasang-nitg.netlify.app/</a></p> */}
      <p>Code: <a href=""  target="_blank">GitHub</a></p>
    </div>
    <Footer/>
    </>
  )
}

export default projectInfoPage
