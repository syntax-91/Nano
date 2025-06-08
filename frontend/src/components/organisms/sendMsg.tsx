import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { CreateChatAPI } from '../../api/create'
import socket from '../../app/socket/socket'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'
import { userDataStore } from '../../app/store/userData'
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
					msgID: new Date,
					text: text,
					ava: '', 
					who: userDataStore.userName
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
	flex gap-2 delay-1000 items-center  rounded-[5px] relative_'>
		 
		<Input 
		rhf={false}
		value={text}
		onChange={(e) => setText(e.target.value) }
		style='full'
		/>

		{text.length > 0 && 
		<div className={
			clsx(
				text.trim().length > 0
				? 'inline-block': 'hidden',
				' ab_solute right-0 top-0')
		}>
			<IoMdSend 
			color='#cfcbcb' 
			size={40} 
			onClick={send}
			className='hover:rotate-x-[-30deg] 
			text-[#cfcbcb]'
			/>
		</div>}
		

	</div>
	)
}

export default observer(SendMsg)