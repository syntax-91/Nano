import { MsgsModel } from './../models/MsgsModel.js'

export async function SaveMsgDB(data){

	try {
		
		console.log('ROOMID > ', data.roomID)

		const msgs = await MsgsModel.create({
			roomID: data.roomID,
			
			text: data.msg.text,
			ava: '1488',
			who: data.msg.who,
			createAt: data.msg.createAt
		})


		if(!msgs || msgs === null){
			console.log('не удалось добавить сообщение!')
		}

		console.log('saveMsgService data > ', data)

		if(msgs){
			console.log('сообщение добавлено!')
		}

	} catch(err){
		console.log("ERROR > SaveMsgDB ", err)
	}
}