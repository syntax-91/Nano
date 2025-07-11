import { Router } from 'express'
import { validateLoginOrRegister } from '../middlewares/validateLoginOrRegister.js'
import { addUserService } from '../service/user/addUser.service.js'
import { LoginService } from '../service/user/login.service.js'

export const AuthRouter = Router()

// /auth
AuthRouter.get('/', (req, res) => {
	res.json({
		msg: 'Yo Yo Yo 1-4-8 3 to the 3 to the 6 to the 9. Representing the ABQ. What up BIATCH! Leave at the tone. ',
	})
})

// /auth/login

AuthRouter.use('/login', validateLoginOrRegister)

AuthRouter.post('/login', (req, res) => {
	console.log('req.body >  ', req.body)
	const data = req.body

	LoginService(data).then(e => {
		res.json({
			success: e.success,
			msg: e.msg,
		})
	})
})

// /auth/register

AuthRouter.use('/register', validateLoginOrRegister)

AuthRouter.post('/register', (req, res) => {
	console.log('req.body >  ', req.body)
	const data = req.body

	addUserService(data).then(e => {
		res.json({
			success: e.success,
			msg: e.msg,
		})
	})
})
