import { Router } from 'express'
import { ChatsService } from '../service/chats.service.js'

 
 export const ChatsRouter = Router()

// /chats 
ChatsRouter.get('/', async (req, res) => {
	const username = req.headers.authorization;

	ChatsService(username)
	.then(e => {
		res.json({
			success: e.success,
			msg: e.msg,
			chats: e.chats
		})
	})

		
})