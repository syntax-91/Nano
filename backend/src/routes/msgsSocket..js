import { Router } from 'express'
import { MsgsService } from '../service/msgs.service.js'

export const msgsRouter = Router()



// /getMsgs
msgsRouter.get('/', (req, res) => {
	 
	const roomID = req.headers.authorization;
	console.log('roomID > ', roomID)

	MsgsService(roomID)  
	.then(e => {	
		res.json({success: e.success, msgs: e.msgs})
	})


})
