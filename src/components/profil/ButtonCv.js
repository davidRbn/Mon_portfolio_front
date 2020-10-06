import React from 'react'
import './buttonCv.css'
import Cv from './../../assets/CvDavid.pdf'

const ButtonCv = () => {



    return(
        <>
            <a className='containerButtonCv' href={Cv}>
                <button className='buttonCv'>Voir CV</button>
            </a>
        </>
    )
}

export default ButtonCv