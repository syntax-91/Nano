import { UserModel } from '../models/UserModel.js'

export async function ChatsService(username){
	try {	
		
		const res = await UserModel.findOne({
			username: username
		})

		if(!res){
			return {
				success: false,
				msg: 'что-то пошло не так!',
				chats: []
			}
		}

		
		const resJSON = JSON.parse(JSON.stringify(res))
		const chatsJSON = resJSON.chats

			return {
				success: true,
				msg: 'на',
				chats: chatsJSON
			}

	} catch(err){
		console.error("ERROR > ", err)
		return;
	}
}