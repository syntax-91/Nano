import { Router } from 'express'
import { createChatService } from '../service/shared/createChat.service.js'

export const createChatRouter = Router()

// /createChat
createChatRouter.post('/', (req, res) => {
	const data = req.body
	console.log('req > /createChat  > ', data)

	createChatService(data).then(e =>
		res.json({
			success: e.success,
			msg: e.msg,
		})
	)
})
