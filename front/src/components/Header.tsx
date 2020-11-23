import React from 'react';
import logo from '../assents/Robo_Bi.png';

import '../App.css';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div className="headerdiv">
<header className="header">
  <Link to='/'><img className='imgLogo' src={logo} alt="logo"/></Link>

<p>KIT DE ROBÓTICA RASPBLOCK - O KIT DE ROBÓTICA STEM PARA A SUA ESCOLA</p>
</header>

<a href="/programar" className = 'buttonA'>PROGRAMAR</a>

<div className="buttons">

<a href="/apostilas" className = 'buttonB'>APOSTILA E <br/>CONTEÚDOS <br/> COMPLEMENTARES</a>
<a href="/projects" className = 'buttonC'>PROJETOS <br/></a>
<a href="/stem" className = 'buttonD'>O QUE É STEM</a>
<a href="/comoprogramar" className = 'buttonE'>COMO PROGRAMAR</a>
<a href="/sobreecontato" className = 'buttonF'>SOBRE E CONTATO</a>
</div>
</div>
)
  }

  export default Header;