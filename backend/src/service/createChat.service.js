import { v4 } from 'uuid'
import { MsgsModel } from '../models/MsgsModel.js'
import { RoomModel } from '../models/RoomModel.js'
import { UserModel } from './../models/UserModel.js'
import { NotifyNewChatService } from './notifyNewChat.service.js'

export async function createChatService(data){
	
	try {
		 
		const roomID = v4();
		
		const res = await RoomModel.insertOne({
			roomID: roomID,
			roomType: 'xz',
			members: [data.userA, data.userB],
			createdAt: new Date,
		}) 

		const addMsg = MsgsModel.insertOne({
			roomID:roomID,
			
			ava:'',
			text: data.firsMsg,
			who: data.userA
		})

		const UserAData = {
			username: data.userA,
			ava: '',
			roomID: roomID
		}

		const UserBData = {
			username: data.userB,
			ava: '',
			roomID: roomID
		}

		const addChatUserA = await UserModel.updateOne(
			{username: data.userA},
			{ $push: {chats: UserBData } },
			{ upsert: true }
		)


		const addChatUserB = await UserModel.updateOne(
			{username: data.userB},
			{ $push: {chats: UserAData } },
			{ upsert: true }
		)

		if(!res || res === null || !addChatUserA ||
			addChatUserA === null || !addChatUserB ||
			addChatUserB === null
		 ){

			return {
				success: false,
				msg: 'что-то пошло не так!'
			}
		}

		const chatData = {
			roomID: roomID,
			members: {userA: UserAData.username, username: UserBData.username}
		} 

		NotifyNewChatService([data.userA, data.userB], chatData) 

		return {
			success: true,
			msg: 'сгенерировано!'
		}

	} catch(err){	
		console.log("ERROR > ", err)
		return {
				success: false,
				msg: '500 - ошибка на сервере'
			}
	}
}