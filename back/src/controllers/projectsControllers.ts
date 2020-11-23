import {getRepository} from 'typeorm';
import Projects from '../model/project'

import {Request, Response} from 'express'

export default {

  async create(request:Request, response:Response){
    const {project} = request.body

    console.log(request.body)
  
    const projectRepo = getRepository(Projects)
  
    const Projeto = projectRepo.create({
      project
    })
  
    await projectRepo.save(Projeto)
  
  
    return response.status(201).json(Projeto)
  },

  async index(request:Request, response:Response){
    const projectRepo = getRepository(Projects)

    const projects = await projectRepo.find({
      where:`id=(SELECT MAX(ID)  FROM projects)`
    })
      return response.json(projects)
  }
}