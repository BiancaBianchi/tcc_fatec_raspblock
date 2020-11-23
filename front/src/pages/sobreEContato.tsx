import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../App.css';


function sobreEContato() {
  return(
    <div className="App">
      <Header/>
      <p className="textGlobal">

        <strong>- SOBRE E CONTATO</strong><br/><br/>
      Olá, tudo bem? Vamos saber mais sobre a criação do Rasblock.
      <br/><br/>
      <strong>
Criação<br/>

      </strong>
O Rasblock foi criado como projeto de trabalho de conclusão de curso para obtenção de Tecnólogo em Mecatrônica Industrial na Faculdade de Tecnologia de Santo André.<br/><br/>

Esse projeto foi feito com o intuito de criar um kit de robótica acessível para adequação do STEM à educação atual para, além de deixar a aula mais prática e ilustrativa, melhorar habilidades dos alunos principalmente na solução de problemas e promover o interesse nas áreas de tecnologia, matemática, ciência e engenharia.<br/><br/>
<strong>

Desenvolvedora<br/>
</strong>
Esse projeto foi desenvolvido por Bianca Bianchi de Oliveira Leite, estudante de Mecatrônica Industrial na FATEC Santo André.<br/><br/>
<strong>

Informações de contato<br/>
</strong>
Para maiores informações sobre o projeto, desenvolvimento e alguma crítica, mande um email para biancabianchideoleite@gmail.com.
      </p>

      <Footer/>
    </div>
  )
}

export default sobreEContato;