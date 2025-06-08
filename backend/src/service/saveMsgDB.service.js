import { RoomModel } from './../models/RoomModel.js'

export async function SaveMsgDB(data){

	console.log('saveMsg service props  > ', data)

	try {
		
		console.log('ROOMID > ', data.roomID)

		const room = await RoomModel.findOne({
			roomID: data.roomID
		})

		console.log('room > ', room)

		if(!room || room === null){
			console.log('не удалось получить roomID')
		}

		console.log('saveMsgService data > ', data)

		room.msgs.push({
			roomID: data.roomID,
			msgID: new Date,
			text: data.msg.text,
			ava: '1488',
			who: data.msg.who
		})

		room.save()

		if(room){
			console.log('сообщение добавлено!')
		}

	} catch(err){
		console.log("ERROR > SaveMsgDB ", err)
	}
}