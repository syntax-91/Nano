import { RoomModel } from '../models/RoomModel.js'

export async function historyChatService(roomID){

	try {	
		
		const res = await RoomModel.findOne({
			roomID: roomID
		})

		if(!res){
			return {
				success: false,
				msg: 'хуй знает что-то пошло не так',
				msgs: []
			}
		}

		const dataJSON = JSON.parse(JSON.stringify(res))
		const msgsJSON = dataJSON.msgs;

		return {
			success: true,
			msg: 'всё ок (вроде)',
			msgs: msgsJSON
		}

	} catch(err){
		console.log('ERROR > ', err)
		return
	}
}