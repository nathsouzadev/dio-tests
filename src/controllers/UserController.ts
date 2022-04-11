import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
  async createUser (request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body

    if(name.length < 1 || email.length < 1) {
      return response.status(400).json({})
    }

    const userService = new UserService({ name, email })

    try {
      const newUser = await userService.createUser()

      return response.status(201).json(newUser)
    } catch (error) {
      console.log(error)
      return response.status(500)
    }
  }
}
