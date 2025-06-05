import { makeAutoObservable } from 'mobx'
import type { IMsgProps } from '../../../shared/types/types'

export interface IMsgsCurrentChatProps {
	roomID:string
}

class currentChatDataClass {
	
	selectedCurrentChat: boolean = false
	ava = '' 
	username = ''
	roomID = ''
	isFound = false
	msgs: IMsgProps[] = []

	constructor() {
		makeAutoObservable(this)	
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

}

export const currentChatDataStore = new currentChatDataClass()