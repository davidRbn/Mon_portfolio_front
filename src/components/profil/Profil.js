import React from 'react'
import './profil.css'
import photos from '../../assets/photosProfile.png'
import ButtonCv from './ButtonCv'

const Profil = () => {
    return(
        <div id='profil' className='containerProfil'>
            <div id='containerImage'>
            <img src={photos}  id="cercle"/> 
            </div>
                <div id='containerTexteProfil'>
               <p>Ayant suivi une formation pour devenir developpeur fullstack, je suis actuellement à la recherche d'un stage 
                   pour compléter ma formation.
                   J'ai efféctué des projets ou j'ai pu travailler sur le front comme sur le back que je vous invite à aller voir dans section mes créations.
                   </p>    
              <ButtonCv/>
            </div>
        </div>
    )
}

export default Profil