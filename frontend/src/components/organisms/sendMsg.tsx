import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { CreateChatAPI } from '../../api/create'
import socket from '../../app/socket/socket'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'
import { userDataStore } from '../../app/store/userData'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'

interface ISendMsgProps {
	roomID: string,
	endRef: React.RefObject<HTMLDivElement | null>
}

 function SendMsg(
	{
		roomID,
		endRef
	}:ISendMsgProps 
){ 

	const [text, setText] = useState('')

	const send = () => {
	
		endRef.current?.scrollIntoView({behavior: 'smooth'})
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
	<div className='w-[100%] h-17
	flex justify-between gap-2 delay-1000 items-center bg-[#050505] rounded-[5px]'>
		 
		<Input 
		rhf={false}
		value={text}
		onChange={(e) => setText(e.target.value) }
		style='full'
		
		
		/>

		{text.length > 0 && 
		<div className='w-[120px] fixed right-[-18px]'>
		<Button 
		w={99} 
		isBlock={false}
		max_w={190}
		label='send'
		disabled={!text.trim()}
		onClick={send}
		/>
		</div>}
		

	</div>
	)
}

export default observer(SendMsg)