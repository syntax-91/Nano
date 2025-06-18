import { makeAutoObservable, reaction, toJS } from 'mobx'
import type { IMsgProps } from '../../../shared/types/types'

export interface IMsgsCurrentChatProps {
	roomID:string
}

class currentChatDataClass {
	
	selectedCurrentChat: boolean = false
	ava = '' 
	username = ''
	roomID = ''

	firstMsgId:string = '';

	loading: boolean = false

	isFound = false
	msgs: IMsgProps[] = []
	latestMsg = ''

	constructor() {
		makeAutoObservable(this)	

		reaction(
			() => this.loading,
			() => { 
				const json = toJS(this.msgs) 
				 console.info('>>> ', json)
			}
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

	reset(){
		this.selectedCurrentChat = false
		this.username = ''
	}

	setIsFound(value:boolean){
		this.isFound = value
	}

	setLoading(value:boolean){
		this.loading = value
	}

	setFirstMsgId(value:string){
		this.firstMsgId = value
	}

	setNewMsgs(msgs:IMsgProps[]){
		this.msgs.unshift(...msgs)
	} 

}

export const currentChatDataStore = new currentChatDataClass()