import React from 'react'
import Link from 'react-router-dom'
import './logo.css'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'

const Logo = () => {

    return(

        <div id='containerLogo'>
            <a href='https://www.linkedin.com/in/david-ruben/'>
                <img alt='LinkedIn' src={Linkedin} />
            </a>
                <a href='https://github.com/davidRbn'>
                    <img alt='Github' src={Github} />
            </a>
        </div>
    )
}

export default Logo