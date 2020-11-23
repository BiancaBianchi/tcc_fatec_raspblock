import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../App.css';


function comoProgramar() {
  return(
    <div className="App">
      <Header/>
    <p className="textGlobal">
      <strong>
      - COMO PROGRAMAR?
      </strong>
<br/><br/>
      Para programar o nosso kit Rasblock, abaixo temos um passo-a-passo que vai te auxiliar!
    </p>
    <br></br>
    <br></br>
    <a href="https://drive.google.com/file/d/12LFoeCFsvK9Vvz0EPw1LaXS7xbSDKbot/view?usp=sharing" target="_blank" rel='noreferrer noopener' className="linksApostilas">Como Programar?</a>
    <Footer/>
    </div>
  )
}

export default comoProgramar;