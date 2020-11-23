import React from 'react';
import Header from '../components/Header';

import '../App.css'
import Footer from '../components/Footer';

function apostilasEMais() {
  return(
    <div className="App">
    <Header />
    <p className="textGlobal">
    <strong>- APOSTILAS</strong><br/><br/>
Junto com nosso kit de Robótica Rasblock, <br/>
temos quatro exemplos de projetos que podem ser
 aplicados em sala de aula. <br/><br/>
Abaixo, temos os links para download do material do aluno e o<br/>
 do professor.
 <br/><br/>
 
 <a href="https://drive.google.com/file/d/12LFoeCFsvK9Vvz0EPw1LaXS7xbSDKbot/view?usp=sharing" target='_blank' rel='noreferrer noopener'className="linksApostilas">Apostila aluno</a>
 <a href="https://drive.google.com/file/d/1xUMGYmZMQFgclmYlVQLCqy_8p9FXrN1U/view?usp=sharing" target='_blank' rel='noreferrer noopener'className="linksApostilas">Apostila professor</a>

 <br/><br/>
 <br/>

ALGUNS LINKS PARA CONTEÚDO COMPLEMENTAR DOS PROJETOS

    </p>
    
    <br/>
    <a href="https://youtu.be/zFVxrghrwuE" target='_blank' rel='noreferrer noopener' className='linkComple' >MEDIDAS DE MASSA</a>
    <br/>
    <br/>

    <a href="https://youtu.be/w-2xXCr_GTE" target='_blank' rel='noreferrer noopener' className='linkComple' >Unidades de Medida de Massa (Peso)</a>
    <br/>
    <br/>

    <a href="https://youtu.be/ZAHI_r99jmw" target='_blank' rel='noreferrer noopener' className='linkComple' >COMO FUNCIONA UM ELEVADOR? #Boravê Manual do Mundo</a>
    <br/>
    <br/>

    <a href="https://youtu.be/fzjSWeGicn8" target='_blank' rel='noreferrer noopener' className='linkComple' >Uso Correto do Elevador</a>
    <br/>
    <br/>

    <a href="https://youtu.be/qhZAx7q_45Q" target='_blank' rel='noreferrer noopener' className='linkComple' >De Onde Vem o Avião? #Episódio 6</a>
    <br/>
    <br/>

    <a href="https://youtu.be/BLJniYo_wd4" target='_blank' rel='noreferrer noopener' className='linkComple' >Por que o AVIÃO voa? #Ticolicos|EP38</a>
    <br/>
    <br/>

    <a href="https://youtu.be/ba-wQKDiZIQ" target='_blank' rel='noreferrer noopener' className='linkComple' >Cores do Semáforo</a>
   
    <Footer />
    </div>
  )
}

export default apostilasEMais;