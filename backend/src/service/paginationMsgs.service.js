import mongoose from 'mongoose'
import { MsgsModel } from '../models/MsgsModel.js'

export async function paginationMsgsService(data)
{
	
	try {

		const firstMsgId = new mongoose.Types.ObjectId(data.firstMsgId)

		console.log('данные которые отправили при пагинаций > ', data)

		
		const res = await MsgsModel.find({
			roomID: data.roomID,
			_id: { $lt: firstMsgId }
		})
		.sort({ _id: -1 })
		.limit(20)
		

		const dataJSON = JSON.parse(JSON.stringify(res))
 
		console.log('pagination > ', res)

		return {
			msgs:dataJSON
		}

	} catch(err){
		console.error('ERROR > ', err)
	}

}