import axios from 'axios'
import { currentChatDataStore } from '../app/store/CurrentChat/currentChatDataStore'
import { searchQueryStore } from '../app/store/HeaderSearchQuery'
import type { IChatProps } from '../shared/types/types'


//

export async function msgsAPI(){
	
	const roomIDCurrentChat=  currentChatDataStore.roomID;
	console.info('roomID (currentChat): ', roomIDCurrentChat)
 
	 try {
		
		const res = await axios.get('http://localhost:3000/historyChat',
			{headers: {Authorization: `${roomIDCurrentChat}`}}
		)
 
		console.info('ответ от сервера  > ', res.data)

		currentChatDataStore.setMsgs(res.data.msgs)
		

	 } catch(err){
		console.error('ERROR > ', err)
	 }
}

export async function QueryAPI(){

	console.info('queryAPI > ', searchQueryStore.query)

	try {
		const res = await axios.get(
			'http://localhost:3000/query',
			{headers: { 'x-query': searchQueryStore.query }}
		)

		const data:IChatProps[] = res.data

		searchQueryStore.setQueryRes(data.res)

	} catch(err){
		console.error("ERROR > ", err)
	}
}