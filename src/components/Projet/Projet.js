import React, { useState, useEffect } from 'react'
import './projet.css'
import Axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projet = () => {

const [projets,setProjets] = useState([])

useEffect(()=> {
    getProjet()
})

const getProjet = () => {
Axios.get('https://blooming-beyond-04058.herokuapp.com/projet')
.then(res => setProjets(res.data))
}

const settings = {
    className:'slide',
    arrows:true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:2000,
    infinite:true,
    slidesToShow: 1,
    slidesToScroll: 1
}
    return (
        <div id='containerProjets'>
        <h3>Mes créations</h3>
        <Slider {...settings}>
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
        </Slider>
        </div>
        
    )
}

export default Projet