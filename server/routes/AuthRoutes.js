import {Router} from 'express'
import { checkUSer } from '../controllers/AuthController.js'
const router = Router()

router.post('/check-user',checkUSer)


export default router