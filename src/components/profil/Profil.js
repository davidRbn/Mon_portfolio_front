import React from 'react'
import './profil.css'
import photos from '../../assets/photosProfile.png'

const Profil = () => {
    return(
        <div id='profil' className='containerProfil'>
            <div id='containerImage'>
            {/* <img src={photos}  id="cercle"/> */}
            </div>
                <div id='containerTexteProfil'>
               <p>Omitto iuris dictionem in libera civitate contra leges senatusque consulta; caedes relinquo; libidines praetereo, quarum acerbissimum extat indicium et ad insignem memoriam turpitudinis et paene ad iustum odium imperii nostri, quod constat nobilissimas virgines se in puteos abiecisse et morte voluntaria necessariam turpitudinem depulisse. Nec haec idcirco omitto, quod non gravissima sint, sed quia nunc sine teste dico.</p>    
            </div>
        </div>
    )
}

export default Profil