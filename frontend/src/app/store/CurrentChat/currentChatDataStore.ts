import { makeAutoObservable, reaction } from 'mobx'
import type { IMsgProps } from '../../../shared/types/types'

export interface IMsgsCurrentChatProps {
	roomID:string
}

class currentChatDataClass {
	
	selectedCurrentChat: boolean = false
	ava = '' 
	username = ''
	roomID = ''

	loading: boolean = false

	isFound = false
	msgs: IMsgProps[] = []
	latestMsg = ''

	constructor() {
		makeAutoObservable(this)	

		reaction(
			() => this.loading,
			() => console.log('currentChatData loading > ', this.loading)
		)

	}

	setSelectedCurrentChat(value: boolean) {
		this.selectedCurrentChat = value
	}

	setData(ava: string, username: string, roomID: string ){ 
		this.ava = ava
		this.username = username
		this.roomID = roomID
	}

	setMsgs(msgs: IMsgProps[]){
		this.msgs = msgs
	}

	setMsg(msg: IMsgProps){
		this.msgs.push(msg)
	}


	setIsFound(value:boolean){
		this.isFound = value
	}

	setLoading(value:boolean){
		this.loading = value
	}

}

export const currentChatDataStore = new currentChatDataClass()