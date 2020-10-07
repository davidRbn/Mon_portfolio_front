import React, { useState, useEffect } from 'react'
import './competence.css'
import Axios from 'axios'
import Particles from 'react-particles-js';
import imageJs from '../../assets/javascript.jpg'

const Competence = () => {
    
const [skills,setSkills] = useState([])


useEffect(()=>{
    getSkills()
},[])

const getSkills = () => {
    Axios.get('https://blooming-beyond-04058.herokuapp.com/competence')
    .then(res => setSkills(res.data))
}
    
    
    
    return(
       
        <div id='competence' className='containerSkill'>
            <div id='containerListSkill'>
				<div className='listSkill'>
              <h3>Compétences</h3>
              <div className="blocSkill">
              {skills.map(skill => {
                  return(
                      <>
                          <li>{skill.name}</li> 
                          <div className='jauge'></div>
                      </>  
                  )
              })}
			  </div>
              </div>
            </div>
            <div id='containerLogoSkills'>
            <Particles
           id='canvasLogoSkills'
    params={{
	    "particles": {
	        "number": {
	            "value": 15,
	            "density": {
	                "enable": false,
	                "value_area": 800
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 10
	            // "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image"
	                // "circle"
	            ],
	            "image": [
	                {
	                    "src": "https://www.zupimages.net/up/20/30/gypu.png",
	                    "height": 80,
	                    "width": 50
	                },
	                {
	                    "src": "https://www.zupimages.net/up/20/30/d0lx.png",
	                    "height": 80,
	                    "width": 50
	                },
	                {
	                    "src": "https://www.zupimages.net/up/20/30/y16s.png",
	                    "height": 80,
	                    "width": 50
                    },
                    {
	                    "src": "https://www.zupimages.net/up/20/30/f609.png",
	                    "height": 200,
	                    "width": 110
                    },
                    {
	                    "src": "https://www.zupimages.net/up/20/30/gypu.png",
	                    "height": 80,
	                    "width": 50
	                },
	                {
	                    "src": "https://www.zupimages.net/up/20/30/d0lx.png",
	                    "height": 80,
	                    "width": 50
	                },
	                {
	                    "src": "https://www.zupimages.net/up/20/30/y16s.png",
	                    "height": 80,
	                    "width": 50
                    },
                    {
	                    "src": "https://www.zupimages.net/up/20/30/f609.png",
	                    "height": 200,
	                    "width": 110
                    },
                    {
	                    "src": "https://www.zupimages.net/up/20/30/gypu.png",
	                    "height": 80,
	                    "width": 50
	                }
	            ]
	        },
	        "color": {
	            "value": "#c66b3d"
	        },
	        "size": {
	            "value": 30,
	            "random": false,
	            "anim": {
	                // "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
        },
        "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    },
	    "retina_detect": false
	}} />


            </div>
        </div>
    )
}

export default Competence