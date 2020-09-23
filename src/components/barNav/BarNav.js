import React, { useState } from 'react'
import './barNav.css'
import { Link } from 'react-router-dom'


const BarNav = () =>{

  const [active,setActive] = useState(false)

    return(
        <>
<nav role="navigation" className="barNav">

  <div id="menuToggle">
  
    <a className='burger' id={active?'active':''} onClick={()=>setActive(!active?true:false)}/>
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu" onClick={()=>setActive(false)}>
      <li><a href='#home'>Home</a></li>
      <li><a href='#profil'>Profil</a></li>
      <li><a href='#competence'>Compétences</a></li>
      <li><a href='#containerProjets'>Créations</a></li>
      <li><a href='#containerContact'>Contact</a></li>
    </ul>
   
  </div>
</nav>
</>
    );
}

export default BarNav