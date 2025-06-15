import { RoomModel } from '../models/RoomModel.js'

export async function historyChatService(
	roomID
){

	try {	
		
		const room = await RoomModel.findOne(
			{ roomID: roomID }
		)

		const lastMsgs = room.msgs.slice(-20);
		
		return {
			success: true,
			msg: 'всё ок (вроде)',
			msgs: lastMsgs
		}

	} catch(err){
		console.log('ERROR b> ', err)
		return []
	}
}