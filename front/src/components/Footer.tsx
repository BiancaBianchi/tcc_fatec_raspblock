/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import logo from '../assents/Robo_Bi.png';

import '../App.css';
import { Link } from 'react-router-dom';

function Footer() {
return(  
  <>
   <br/>
    <br/>
    <br/>
    <br/>
    <br/>
<footer className="footer">
<div className="divImg">
<Link to='/'><img className='imgFooter' src={logo} alt="logo"/></Link>
  
</div>
<a href="/sobreecontato" className="about">Sobre</a>
<a href="/comoprogramar"className="howToProg">Como Programar?</a>
<a href="projects" className="projects">Projetos</a>
</footer>
</>
)
}

export default Footer;
