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
          Ho lavorato come Network Specialist per Lutech come consulente per
          Fatweb, alla fine della pandemia dopo aver ripreso con la
          programmazione ho deciso di Provare a intraprendere una nuova carriera
          come Web Developer, ho deciso di frequentare un BootCamp dalla durata
          di 5 mesi dove ho appreso le seguenti Tecnologie:
        </p>
        <br />
        <ul>
          <li  style={{ color: 'Orange' }} className="li-icon"> HTML5
            <br/>
            <a
              href="https://en.wikipedia.org/wiki/HTML5"
              title="HTML5"
              target="_blank">
              <FaHtml5
                style={{ color: 'Orange' }}
                className="icon size-icon-home">
              </FaHtml5>
            </a>
          </li>
          <li className="li-icon" style={{ color: 'Blue' }}> CSS3
          <br/>
            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              title="CSS3"
              target="_blank">
              <FaCss3
                style={{ color: 'Blue' }}
               className="icon size-icon-home"></FaCss3>
            </a>
          </li>
          <li className="li-icon" style={{ color: 'Pink' }}> SASS
          <br/>
            <a href="https://sass-lang.com/" title="SASS" target="_blank">
              <FaSass
                style={{ color: 'Pink' }}
                className="icon size-icon-home">
                </FaSass>
            </a>
          </li>
          <li className="li-icon" style={{color: '#00FFFF'}}>
          TailWindCss
          <br/>
            <a href="https://tailwindcss.com/" title="TAILWIND" target="_blank">
              <SiTailwindcss style={{color: '#00FFFF'}} className="icon size-icon-home"></SiTailwindcss>
            </a>
          </li>
          <li className="li-icon" style={{ color: '#8A9242' }}>
          Javascript 
          <br/>
            <a
              href="https://javascript.info/"
              title="JAVASCRIPT"
              target="_blank">
              <SiJavascript
                style={{ color: 'Yellow' }}
                className="icon size-icon-home">
                </SiJavascript>
            </a>
          </li>
          <li className="li-icon" style={{ color: 'Green' }}>
          NODE.JS
          <br/>
            <a
              href="https://nodejs.org/it/docs"
              title="NODE.JS"
              target="_blank">
              <FaNodeJs
                style={{ color: 'Green' }}
                className="icon size-icon-home">
              </FaNodeJs>
            </a>
          </li>
          <li className="li-icon" style={{ color: '#0066FF' }}>
          React.JS

          <br/>
            <a href="https://17.reactjs.org/" title="REACT.JS" target="_blank">
              <FaReact style={{ color: '#0066FF' }} className="icon size-icon-home"></FaReact>
            </a>
          </li>
          <li className="li-icon" style={{ color: 'Black' }}>
          NEXT.js
          <br/>
            <a href="https://nextjs.org/" title="NEXT.JS" target="_blank">
              <SiNextdotjs
                style={{ color: 'Black' }}
                className="icon size-icon-home"
              ></SiNextdotjs>
            </a>
          </li>
        </ul>
        <br />
        <p>Sistema di versioning</p>
        <br />
        <ul>
          <li>
            {' '}
            GitHub <br/>
            <FaGithub
              style={{ color: 'Black' }}
              className="icon size-icon-home"
            ></FaGithub>
          </li>
        </ul>
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
