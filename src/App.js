import React from 'react';
import './App.css';
import BarNav from './components/barNav/BarNav';
import Landing from './components/landing/Landing';
import Profil from './components/profil/Profil';
import Competence from './components/competence/Competence';
import Projet from './components/Projet/Projet';
import Contact from './components/contact/Contact';
import Router from './components/Router';


function App() {
  return (
    <>
      <BarNav/>
      <Landing/>
      <Profil/>
      <Competence/>
      <Projet/>
      <Contact/>
    </>
  );
}

export default App;
