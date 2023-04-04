import React from 'react'
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaSass,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import Sidebar from '../../navbar/sidebar/Sidebar'

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="meSection">
        <p className="experience">
          Ho lavorato come consulente Fastweb nel ruolo di Network Specialist, 
          alla fine del 2021 dopo aver ripreso con la
          programmazione ho deciso di provare a intraprendere una nuova carriera
          come Web Developer, ho deciso di frequentare un BootCamp dalla durata
          di 5 mesi dove ho appreso le seguenti Tecnologie:
        </p>
        <br />
        <ul>
          <li style={{ color: 'Orange' }} className="li-icon">
            <a className='card-iperlink'
              href="https://html.com/"
              title="HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tecno">HTML5</p>
              <br />
              <FaHtml5
                style={{ color: 'Orange' }}
                className="icon size-icon-home"
              ></FaHtml5>
            </a>
          </li>
          <li className="li-icon" style={{ color: 'Blue' }}>
            <a className='card-iperlink'
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              title="CSS3"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tecno">CSS3</p>
              <br />
              <FaCss3
                style={{ color: 'Blue' }}
                className="icon size-icon-home"
              ></FaCss3>
            </a>
          </li>
          <li className="li-icon" style={{ color: 'Pink' }}>
            <a className='card-iperlink'
              href="https://sass-lang.com/"
              title="SASS"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tecno">SASS</p>
              <br />
              <FaSass
                style={{ color: 'Pink' }}
                className="icon size-icon-home"
              ></FaSass>
            </a>
          </li>
          <li className="li-icon" style={{ color: '#00FFFF' }}>
            <a className='card-iperlink'
              href="https://tailwindcss.com/"
              title="TAILWIND"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tecno">TailWindCss</p>
              <br />
              <SiTailwindcss
                style={{ color: '#00FFFF' }}
                className="icon size-icon-home"
              ></SiTailwindcss>
            </a>
          </li>
          <li className="li-icon" style={{ color: '#8A9242' }}>
            <a className='card-iperlink'
              href="https://javascript.info/"
              title="JAVASCRIPT"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tecno">Javascript</p>
              <br />
              <SiJavascript
                style={{ color: 'Yellow' }}
                className="icon size-icon-home"
              ></SiJavascript>
            </a>
          </li>
          <li className="li-icon" style={{ color: 'Green' }}>
            <a className='card-iperlink'
              href="https://nodejs.org/it/docs"
              title="NODE.JS"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tecno">NODE.JS</p>
              <br />
              <FaNodeJs
                style={{ color: 'Green' }}
                className="icon size-icon-home"
              ></FaNodeJs>
            </a>
          </li>
          <li className="li-icon" style={{ color: '#0066FF' }}>
            <a className='card-iperlink'
              href="https://17.reactjs.org/"
              title="REACT.JS"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tecno">React.Js</p>
              <br />
              <FaReact
                style={{ color: '#0066FF' }}
                className="icon size-icon-home"
              ></FaReact>
            </a>
          </li>
          <li className="li-icon" style={{ color: 'Black' }}>
            <a className='card-iperlink'
              href="https://nextjs.org/"
              title="NEXT.JS"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tecno">NEXT.js</p>
              <br />
              <SiNextdotjs
                style={{ color: 'Black' }}
                className="icon size-icon-home"
              ></SiNextdotjs>
            </a>
          </li>
        </ul>
        <br />
        <p className="tecno">Sistema di versioning</p>
        <br />
        <ul>
          <li>
          <a className='card-iperlink' href="https://github.com/login"
              title="GitHub"
              target="_blank"
              rel="noreferrer">
           <p className="tecno">GitHub</p> 
            <br />
            <FaGithub
              style={{ color: 'Black' }}
              className="icon size-icon-home"
            ></FaGithub>
            </a>
          </li>
        </ul>
        <br />
        <p>Grazie alla mia precedente esperienza lavorativa ho appreso:</p>
        <ul>
        <li>Lavoro all'interno di un team</li>
        <li>Lavoro in autonomia</li>
        <li>Coordinamento tra diversi team</li>
        <li>Gestione delle Risorse in campo</li>
        </ul>
      </div>
    </>
  )
}

export default Home
