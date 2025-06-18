import { MsgsModel } from '../models/MsgsModel.js'

export async function historyChatService(
	roomID
){

	try {	
		
		const msgs = await MsgsModel.find({
			 roomID: roomID 
		})
		.sort({_id: 1}) // старые -> новые
		.limit(20) // максимум 20

		return {
			success: true,
			msg: 'всё ок (вроде)',
			msgs: msgs
		}

	} catch(err){
		console.log('ERROR b> ', err)
		return []
	}
}