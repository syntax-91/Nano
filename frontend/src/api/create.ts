import axios from 'axios'
import { modalStore } from '../app/store'
import type { ICreateChatProps } from '../shared/types/types'

 

export async function CreateChatAPI(
	{
		userA,
		userB,
		firstMsg

	}:ICreateChatProps
) {
	try {	
		
		const data = {userA: userA, userB: userB, firstMsg: firstMsg}
 
		const res = await axios.post(
			'http://localhost:3000/createChat',
			data
		)

		console.info("ответ от сервера create (create) > ", res.data)
		modalStore.run(res.data.msg, res.data.success)

	
 
	} catch(err){
		console.error("ERROR > ", err)
	}
}