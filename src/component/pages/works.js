import React from 'react'
import netfloxImg from "../utils/img/Netflox(1).png"
import amacaImg from "../utils/img/Amaca Travel.png"

const work =[
    {
        id:1,
        name:"Netflox",
        url:"https://bluealastor.github.io/netflox/",
        image: netfloxImg,
    },
    {
        id:2,
        name:"CV WEB",
        url:"https://precious-cuchufli-e97137.netlify.app/",
        image:""
    },
    {
      id:3,
      name:'Amaca Travel',
      url:'http://pixel-travel-weld.vercel.app/',
      image: amacaImg,
    }
]

const Works = () => {
  return (
    <>
    <ul className='work'>
        {
            work.map((el) => {
                const { id, name, url, image} = el;
                return(
                    <li className='container' title={name} key={id}>
                    <a href={url} title={name} target='_blank' rel="noreferrer" className='card'>
                    <img src={image} alt={name} className='imgSize'/>
                        <h3 className='title'>{name}</h3>
                    </a>
                    </li>
                )
            })
        }
    </ul>   
    </>
  )
}

export default Works
