import React, { useState, useEffect } from 'react'
import './projet.css'
import Axios from 'axios'


const Projet = () => {

const [projets,setProjets] = useState([])

useEffect(()=> {
    getProjet()
})

const getProjet = () => {
Axios.get('http://localhost:3001/projet')
.then(res => setProjets(res.data))
}
    return (
        <div id='containerProjets'>
        <h3>Mes créations</h3>
        <div className='sectionProjet'>
        {projets.map(projet => {
            return(
                <div id='projet'>
                    <img src={projet.image}></img>
                      <p>{projet.name}</p>
                      <a href={projet.link}>
                      <input type="button" value="Lien vers le site" />
                     </a>
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default Projet