import React from 'react'
import netfloxImg from "../utils/img/Netflox(1).png"

const work =[
    {
        id:1,
        name:"netflox",
        url:"https://bluealastor.github.io/netflox/",
        image: netfloxImg,
    },
    {
        id:2,
        name:"CV WEB",
        url:"https://precious-cuchufli-e97137.netlify.app/",
        image:""
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
                    <li className='container'>
                    <a href={url} className='card'>
                    <img src={image} alt={name} className='imgSize'/>
                        <h3 className='title'>{name}</h3>
                    </a>
                    </li>
                )
            })
        }
    </ul>

      {/* <li class="container">
        <div class="card">
          <img src="" alt="Netflox" className="imgSize" />
          <h3 class="title">Card 1</h3>
        </div>
      </li> */}
    </>
  )
}

export default Works
