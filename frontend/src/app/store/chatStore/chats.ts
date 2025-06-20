import axios from 'axios'
import { makeAutoObservable, reaction } from 'mobx'
import type { IChatProps } from '../../../shared/types/types'
import { userDataStore } from '../app/userData'
import { modalStore } from '../shared/modalStore'

class ChatsStore {
	
	chats: IChatProps[] = []
	 
	constructor() {
		makeAutoObservable(this);
		reaction(
		() => this.chats,
		() => console.log("chats: > ", this.chats)
		)
	} 

	async fetchChats(){
		
		try {
			const res = await axios.get('http://192.168.100.58:3000/chats', { headers: { Authorization: 
				userDataStore.userName
			 } })

			 console.info('Ответ от сервера > ', res.data)

			 if(!res.data.success){
				modalStore.run(res.data.success, res.data.msg, 3000)
			 }

			

			const data:IChatProps = res.data.chats
			const chatsArr:IChatProps[] = Object.values(data)

			 this.chats = chatsArr

		} catch(err){
			console.error("ERROR ChatsStore > ", err)
		}
	}

	// update
	updateChats(data: IChatProps){	
		this.chats.push(data)
	}


}

export const chatsStore = new ChatsStore