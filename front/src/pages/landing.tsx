/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import logo from '../assents/Robo_Bi.png';
import Header from '../components/Header'
import '../App.css';
import Footer from '../components/Footer';

function landing() {
  return (
    <div  className="App">
     <Header />
      <main className="aboutKit">

          <img className="fotoKit" src={logo} alt="Foto Kit"/>

          <p className="textKit">
          Olá, Seja bem vindo! <br/>
          O Rasblock é um kil de robótica, feito com<br/>
          peças impressas em 3D, usada para <br/> implementar o STEM na sua escola! <br/><br/>
          Neste kit você encontra além dos blocos montáveis, <br/> peças eletronicas para deixar cada vez mais divertido!
          </p>

      </main>
      <div id="container">
     
          <br/>
        
    </div>
     <Footer />
    </div>
);
}

export default landing;
