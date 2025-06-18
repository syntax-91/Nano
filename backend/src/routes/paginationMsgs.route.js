import { Router } from 'express'
import { paginationMsgsService } from '../service/paginationMsgs.service.js'

export const PgMsgsRoute = Router();

// paginationMsgs

PgMsgsRoute.get('/', (req, res) => {

	
	const roomID = req.headers['roomid']
	const firstMsgId = req.headers['firstmsgid']

	const data = { 
		roomID: roomID,
		firstMsgId: firstMsgId
	 }

	console.log('><> ', data)

	console.log('запрос на пагинацию сообщений')

	paginationMsgsService(data)
	.then(e => {
		res.json({
			msgs:e.msgs
		})
	})

})
