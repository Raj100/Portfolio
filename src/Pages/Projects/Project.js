import React from 'react'
import "./Project.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ProjectBox from '../../Components/ProjectBox/ProjectBox'
import PrasangImage from '../../Assets/PrasangWebsite.png'
import TankAlertImg from "../../Assets/TankAlert.png"
import LobbyLightImg from "../../Assets/LobbyLights.png"
import MonkeyTypeImg from "../../Assets/MonkeyType.png"


const Project = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='Projects'>
        <ProjectBox ProjectName="Prasang Website" ProjectImg={PrasangImage} ProjectLink="/Projects/PrasangWebsite"/>
        <ProjectBox ProjectName="Lobby Light Automation" ProjectImg={LobbyLightImg} ProjectLink="/Projects/LobbyLightAutomation"/>
        <ProjectBox ProjectName="Tank Fill alert to save water" ProjectImg={TankAlertImg} ProjectLink="/Projects/TankAlerter"/>
        <ProjectBox ProjectName="TodoList" ProjectImg="" ProjectLink="/Projects/TodoList"/>
        <ProjectBox ProjectName="Krim Desktop Assistant" ProjectImg="" ProjectLink="/Projects/KrimDesktopAssistant"/>
        <ProjectBox ProjectName="MonkeyType Automation" ProjectImg={MonkeyTypeImg} ProjectLink="/Projects/MonkeytypeAutomation"/>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Project
