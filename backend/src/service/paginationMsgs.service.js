import mongoose from 'mongoose'
import { MsgsModel } from '../models/MsgsModel.js'

export async function paginationMsgsService(data) {
	try {
		console.log('Input Data > ', data)

		const firstMsgId = new mongoose.Types.ObjectId(data.firstMsgId)

		const totalCount = await MsgsModel.countDocuments({ roomID: data.roomID })

		console.log('totalMsgs In Room > ', totalCount)

		if (totalCount.length === 0) {
			console.log('total Msgs In Room > 0')
		}

		const msgsAfter = await MsgsModel.countDocuments({
			roomID: data.roomID,
			_id: { $gt: firstMsgId },
		})

		const msgsBefore = await MsgsModel.countDocuments({
			roomID: data.roomID,
			_id: { $lt: firstMsgId },
		})

		console.log('сообщение после firstMsg ', msgsAfter)
		console.log('сообщение ДО firstMsg > ', msgsBefore)

		const res = await MsgsModel.find({
			roomID: data.roomID,
			_id: { $lt: firstMsgId },
		})
			.sort({ _id: -1 })
			.limit(20)

		console.log('pagination > ', res)

		return {
			msgs: res.reverse(),
		}
	} catch (err) {
		console.error('ERROR > ', err)
	}
}
