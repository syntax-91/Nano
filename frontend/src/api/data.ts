import axios from 'axios'
import { userDataStore } from '../app/store/app/userData'
import { currentChatDataStore } from '../app/store/chatStore/currentChatDataStore'
import { searchQueryStore } from '../app/store/fetch/HeaderQuery'
import type { IChatProps, IUserData } from '../shared/types/types'
 
//

export async function msgsAPI(roomID:string){

	 try {

		const res = await axios.get('http://localhost:3000/historyChat',
			{headers: {Authorization: `${roomID}`}}
		)

	
		currentChatDataStore.setMsgs(res.data.msgs)

	 } catch(err){
		console.error('ERROR > ', err)
	 } finally {
			currentChatDataStore.setLoading(false)
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

export async function userDataAPI(username:string){

	try {	
		const res = await axios.get(
			'http://localhost:3000/userInfo',
			{ 
				headers: { 'username': username } 
			}
		);
		
		const data:IUserData = res.data;

		return data

	} catch(err){
		console.error("ERROR userDateAPI > ", err)
	}

}