/* eslint-disable react-hooks/rules-of-hooks */
import React, {FormEvent, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import api from '../server/api'

import '../App.css'

function escolhaProjeto() {

  const [project, setProject] = useState('');



  async function handleSubmit(event: FormEvent){
    event.preventDefault();

    await api.post('createproject', {project});

    console.log({project})

    alert(`Projeto ${project} escolhido`)
  }

    return(
    <div className="App">
    <Header/>

    <h2>Escolha um Projeto</h2>

    <h2>ESCOLHA APENAS UMA OPÇÃO</h2>

<form onSubmit={handleSubmit} >
    <div className="projects">
     
        <div className="project1">
         
        <div >
              <label>Qual Projeto?</label>
              <input type='number' id="project" 
              value= {project} 
              onChange={event => setProject(event.target.value)}
              />
        </div>


<button className="confirm-button" type="submit">
            Confirmar
          </button>
      </div>
          </div>

          </form>


      <Footer/>


    </div>
  )
}
export default escolhaProjeto;