import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import projeto1 from '../assents/projeto1.png'
import projeto2 from '../assents/projeto2.jpeg'
import projeto3 from '../assents/projeto3.jpeg'
import projeto4 from '../assents/projeto4.jpeg'
import projeto5 from '../assents/projeto5.jpeg'


function programar() {
  return(
    <div className="App">
    <Header/>
    <br/>
    <br/>
    <br/>
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
 
<Link to='/escolhaProjeto' className="linksApostilas">Escolher Projeto</Link>

  
    <br/>
    <br/>
    <br/>
    <Footer/>
    </div>
  )
}
export default programar;