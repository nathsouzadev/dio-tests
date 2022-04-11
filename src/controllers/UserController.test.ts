import { User } from '../entities/User'
import { Request } from 'express'
import { makeMockResponse } from '../__mocks__/mockResponse'
import { getMockUser } from '../__mocks__/mockUser'
import { UserController } from './UserController'

const mockUser: User = getMockUser()

let mockReturnCreateUser
jest.mock('../services/UserService', () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return {
        createUser: mockReturnCreateUser
      }
    })
  }
})

describe('UserController', () => {
  const userController = new UserController()

  const request = {
    body: {
      name: 'Algum nome',
      email: 'email@dio.ex'
    }
  } as Request

  const response = makeMockResponse()
  it('Deve retornar status 201 e o usuário criado', async () => {
    mockReturnCreateUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
    await userController.createUser(request, response)
    expect(response.state.status).toBe(201)
    expect(response.state.json).toHaveProperty('user_id')
    expect(response.state.json).toMatchObject({
      name: 'Algum nome',
      email: 'email@dio.ex'
    })
  })

  it('Deve retornar status 400 quando o usuário não informar name e email', async () => {
    const request = {
      body: {
        name: '',
        email: ''
      }
    } as Request

    await userController.createUser(request, response)
    expect(response.state.status).toBe(400)
  })

  it('Deve retornar status 500, quando ocorrer um erro', async () => {
    mockReturnCreateUser = jest.fn().mockImplementation(() => {
      throw new Error()
    })
    await userController.createUser(request, response)
    expect(response.state.status).toBe(500)
  })
})
