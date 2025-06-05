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

		room.msgs.push({
			msgID: new Date,
			text: data.msg.text,
			ava: '1488',
			who: data.username
		})

		room.save()

		if(room){
			console.log('сообщение добавлено!')
		}

	} catch(err){
		console.log("ERROR > SaveMsgDB ", err)
	}
}