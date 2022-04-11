import { getCustomRepository } from 'typeorm'
import { User } from '../entities/User'
import { UserRepository } from '../repositories/UserRepository'

interface IUserService {
  userRepository?: UserRepository
  name: string
  email: string
}

export class UserService {
  private userRepository: UserRepository
  private user: User

  constructor ({
    userRepository = getCustomRepository(UserRepository),
    name,
    email
  }: IUserService) {
    this.userRepository = userRepository
    this.user = new User(name, email)
  }

  async createUser (): Promise<User> {
    return await this.userRepository.save(this.user)
  }
}
