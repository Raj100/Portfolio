import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Project from "./Pages/Projects/Project"
import ErrorPage from './ErrorPage';
import About from './Pages/About/About';
import Prasang from './Pages/Prasang'
import LobbyLightAutomation from './Pages/LobbyLightAutomation';
import TankAlert from './Pages/TankAlert';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={< App />}/>
    <Route path="/Projects" element={<Project/>}/>
    <Route path="/About" element={<About />}/>
    <Route path="/Projects/PrasangWebsite" element={<Prasang />}/>
    <Route path='/Projects/LobbyLightAutomation' element={<LobbyLightAutomation />}></Route>
    <Route path="/Projects/TankAlerter" element={<TankAlert/>}></Route>
    <Route path="/Projects/TodoList"></Route>
    <Route path='/Projects/KrimDesktopAssistant'></Route>
    <Route path="/Projects/MonkeytypeAutomation"></Route>
    <Route path="/*" element={< ErrorPage />}/>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
