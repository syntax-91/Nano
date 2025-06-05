import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { CreateChatAPI } from '../../api/create'
import socket from '../../app/socket/socket'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'
import { userDataStore } from '../../app/store/userData'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'

interface ISendMsgProps {
	roomID: string
}

 function SendMsg(
	{
		roomID
	}:ISendMsgProps 
){ 

	const [text, setText] = useState('')

	const send = () => {
	
		if(currentChatDataStore.isFound){

			console.warn('roomID: ', currentChatDataStore.roomID)

			socket.emit('sendMessage', {
			roomID: roomID, 
		
				msg: {
					msgID: 'HUI',
					text: text,
					ava: '', 
					who: currentChatDataStore.username
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

	return (
	<div className='w-[100%] h-18 bottom-[100px] left-0
	flex justify-between gap-5'>
		
		<Input 
		rhf={false}
		value={text}
		onChange={(e) => setText(e.target.value) }
		style='full'
		/>

		<div className='w-[120px]'>
		<Button 
		w={120} 
		isBlock={false}
		max_w={120}
		label='send'
		disabled={!text.trim()}
		onClick={send}
		/>
		</div>
		

	</div>
	)
}

export default observer(SendMsg)