import { useNavigate } from 'react-router-dom'
import { CreateChatAPI } from '../../../api/create'
import socket from '../../../app/socket/socket'
import { userDataStore } from '../../../app/store/app/userData'
import { currentChatDataStore } from '../../../app/store/chatStore/currentChatDataStore'
import { isOpenStore } from '../../../app/store/isOpen/isOpenSettingsStore'
import type { IMsgProps, ISendMsgProps } from '../../types/types'

export const handleClickProfile = (
	username:string,
	navigate: ReturnType<typeof useNavigate>
) => {
	

		if(username === userDataStore.userName){
			isOpenStore.setIsOpen('settings',true)
		} else {
			navigate(`/u/${username}`)
		} 
}

export const handleKeyDownCurrentChat =(
	e:KeyboardEvent
) => 
{

		if(
			e.ctrlKey === true &&
			e.key === 'Escape' &&
			currentChatDataStore.selectedCurrentChat
		){
			currentChatDataStore.reset()
		}
	
}

export const handleNewMsg = (msg: IMsgProps) => {
			console.info('new-msg > ', msg)
//			notification.play()
			currentChatDataStore.setMsg(msg)
}  

const now = new Date;
const hours = now.getHours()
const minutes = now.getMinutes()

export const sendMsg = (
	{
		endRef,
		roomID,
		text,
		setText,
	}:ISendMsgProps
) => {
	
		endRef.current?.scrollIntoView({behavior: 'smooth'})
		
		if(currentChatDataStore.isFound){

			console.warn('roomID: ', currentChatDataStore.roomID)

			socket.emit('sendMessage', {
			roomID: roomID, 
			
				msg: {
					msgID: new Date,
					text: text,
					ava: '', 
					who: userDataStore.userName,
					createAt: `${hours}:${minutes}`
				}
			})
		} 
		
		else if(!currentChatDataStore.isFound || 	currentChatDataStore.isFound === null) {
			CreateChatAPI({
				userA: userDataStore.userName||'',
				userB: currentChatDataStore.username,
				firstMsg: text
			})	
		}
		
		setText('')
	}