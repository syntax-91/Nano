import { Router } from 'express'
import { RoomModel } from '../models/RoomModel.js'

export const SendMsgRouter = Router()

// /sendMsg
SendMsgRouter.post('/', async (req, res) => {
	const data = req.body;

	if(!data.roomID){
		return res.json({ success: false, msg: 'ошибка!' })
	}

	try {
		const newMsg = await RoomModel.findOne({
			roomID: data.roomID
		})

		console.log('sendMsg > ', newMsg)

	} catch(err){
		console.log("ERROR SendMSG_Route > ", err)
	}

})