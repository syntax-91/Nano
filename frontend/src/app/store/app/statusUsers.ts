import { makeAutoObservable } from 'mobx'

interface Props {
	username: string,
	status: 'online'|'offline'
}

class StatusFriends {
	
	chats:Props[] = []

	constructor() {
		makeAutoObservable(this)	
	}

	setChats(data:Props[]){
		this.chats = data
	}


}

export const statusFriendsStore = new StatusFriends()