import { MsgsModel } from '../../models/MsgsModel.js'

export async function SaveMsgDB(data) {
	try {
		console.log('ROOMID > ', data)

		const addMsg = await MsgsModel.create({
			roomID: data.roomID,

			text: data.msg.text,
			ava: '1488',
			time: data.msg.time,
			who: data.msg.who,
			createAt: data.msg.createAt,
		})

		if (!addMsg || addMsg === null) {
			console.log('не удалось добавить сообщение!')
		}

		console.log('saveMsgService data > ', data)

		if (addMsg) {
			console.log('сообщение добавлено!')
		}
	} catch (err) {
		console.log('ERROR > SaveMsgDB ', err)
	}
}
