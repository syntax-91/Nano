import axios from 'axios'
import { currentChatDataStore } from '../app/store/CurrentChat/currentChatDataStore'
import { searchQueryStore } from '../app/store/HeaderSearchQuery'
import { userDataStore } from '../app/store/userData'
import type { IChatProps } from '../shared/types/types'
 
//

export async function msgsAPI(roomID:string){

	currentChatDataStore.setLoading(true)

	 try {

		const res = await axios.get('http://localhost:3000/historyChat',
			{headers: {Authorization: `${roomID}`}}
		)

	
		currentChatDataStore.setMsgs(res.data.msgs)
		currentChatDataStore.setLoading(false)


	 } catch(err){
		console.error('ERROR > ', err)
	 }
}

export async function QueryAPI(){

	try {
		const res = await axios.get(
			'http://localhost:3000/query',
			{
				headers: { 'x-query': searchQueryStore.query, 'username': userDataStore.userName }
				
			}
		)

		const data:IChatProps[] = res.data.res
		
		if(res.data){
			searchQueryStore.setQueryRes(data)
		}

	} catch(err){
		console.error("ERROR > ", err)
	}
}