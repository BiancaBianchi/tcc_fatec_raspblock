/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Header from '../components/Header';
import projeto1 from '../assents/projeto1.png'
import projeto2 from '../assents/projeto2.jpeg'
import projeto3 from '../assents/projeto3.jpeg'
import projeto4 from '../assents/projeto4.jpeg'
import projeto5 from '../assents/projeto5.jpeg'


import '../App.css'
import Footer from '../components/Footer';

function projects() {

 
  return(
    <div className="App">
    <Header />
    <p className="textGlobal">
      <strong>- PROJETOS</strong><br/><br/>
    Junto com nosso kit de Robótica Rasblock, temos quatro exemplos de projetos que <br/>
    podem ser aplicados em sala de aula. <br/><br/>
O passo-a-passo da montagem e de sua integração em aula está 
<br/>na aba "Apostilas e Conteúdos complementares". <br/>
Abaixo, fotos dos projetos montados feitos em Fusion 360.


 <br/>
 <br/>
 <div className="projects">
 <strong>Projeto 1</strong>
 <img src={projeto1} alt="projeto1"/>
 <strong>Projeto 2</strong>
 <img src={projeto2} alt="projeto2"/>
 </div>

 <div className="projects">
 <strong>Projeto 3</strong>
 <img src={projeto3} alt="projeto3"/>
 <strong>Projeto 4</strong>
 <img src={projeto4} alt="projeto4"/>
 </div>

 <div className="projects">
 <strong>Projeto 5</strong>
 <img src={projeto5} alt="projeto5"/>
 </div>
 <br/>
    </p>
    <Footer />
    </div>
  )
}

export default projects;