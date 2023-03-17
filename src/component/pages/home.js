import React from 'react'
import { FaCss3, FaHtml5, FaReact, FaSass, FaNodeJs, FaGithub} from "react-icons/fa"
import {SiJavascript, SiTailwindcss, SiNextdotjs} from "react-icons/si"
import Sidebar from '../../navbar/sidebar/Sidebar'

const Home = () => {

  return (
    <>
      <Sidebar />
      <div className="meSection">
       <p className='experience'>
        Ho lavorato come Network Specialist per Lutech come consulente per
        Fatweb, alla fine della pandemia dopo aver ripreso con la programmazione
        ho deciso di Provare a intraprendere una nuova carriera come Web
        Developer, ho deciso di frequentare un BootCamp dalla durata di 5 mesi
        dove ho appreso le seguenti Tecnologie:
        </p> 
        <br/>
        <ul>
        <li><FaHtml5 className='icon size-icon-home'></FaHtml5></li>
        <li><FaCss3 className='icon size-icon-home' ></FaCss3></li>
        <li><FaSass className='icon size-icon-home'></FaSass></li>
        <li><SiTailwindcss className='icon size-icon-home'></SiTailwindcss></li>
        <li><SiJavascript className='icon size-icon-home'></SiJavascript></li>
        <li><FaNodeJs className='icon size-icon-home'></FaNodeJs></li>
        <li><FaReact className='icon size-icon-home'></FaReact></li>
        <li><SiNextdotjs className='icon size-icon-home'></SiNextdotjs></li>
        </ul>
        <br />
        <p>Sistema di versioning</p>
        <ul><li><FaGithub className='icon size-icon-home'></FaGithub></li></ul>
        <br />
        <p>Grazie alla mia precedente esperienza lavorativa ho appreso:</p>
        <li>Lavoro all'interno di un team</li>
        <li>Lavoro in autonomia</li>
        <li>Coordinamento tra diversi team</li>
        <li>Gestione delle Risorse in campo</li>
      </div>
    </>
  )
}

export default Home
