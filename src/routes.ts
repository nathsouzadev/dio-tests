import { Router } from 'express'
import { MessageController } from './controllers/MessageController'
import { UserController } from './controllers/UserController'

const router = Router()

const messageController = new MessageController()
const userController = new UserController()

router.get('/', messageController.handle)
router.post('/user', userController.createUser)

export { router }
