import { Router } from 'express'
import { historyChatService } from '../service/historyChat.service.js'

export const historyChatRouter = Router()


// /historyChat
historyChatRouter.get('/', (req, res) => {
	const roomID = req.headers.authorization;

	historyChatService(roomID)
	.then(e => {
		res.json({
			success: e.success,
			msg: e.msg,
			msgs: e.msgs
		})
	
	})
})