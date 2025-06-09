import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { msgsAPI } from '../../api/data'
import socket from '../../app/socket/socket'
import { chatsStore } from '../../app/store/chatsStore/chats'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'
import type { IChatProps, IMsgProps } from '../../shared/types/types'

 function Chat({
	
		ava,
		username,  
		roomID,
		latestMsg
		
}:IChatProps	) {

	const [latestMsgState, setLatestMsg] = useState('')

	useEffect(() => {
		const handleNewMsg = (msg:IMsgProps) => {
			
			if(msg.roomID === roomID){
				setLatestMsg('')
				setLatestMsg(msg.text)
			}

		}

		socket.on('new-msg', handleNewMsg)

		return () => {
			socket.off('new-msg', handleNewMsg)
		}
	}, [])

	const handleClick = () => {
		
		const isFound = chatsStore.chats.find(u => u.username === username)

		if(isFound){
			currentChatDataStore.setLoading(true)
			
			currentChatDataStore.setIsFound(true)
			currentChatDataStore.setData(ava, username, roomID)
			msgsAPI(isFound.roomID)
 
		} else {
		
			currentChatDataStore.setIsFound(false);
			currentChatDataStore.setData(ava, username, roomID);
		}

		currentChatDataStore.setSelectedCurrentChat(true)
		currentChatDataStore.setLoading(false)

	}
 

	return (
		  
		<div className="bg-white/3 w-[100%] mx-auto ttb-jump
		h-[50px] my-2 rounded-2xl flex items-center pl-2
		hover:bg-white/10 active:bg-white/10"
		onClick={handleClick}>
				
			{/* AVA */}
		<div className='ava border rounded-[50%] 
		w-[46px] h-[46px] flex items-center 
		
		justify-center border-[#464545]'>
			<img src={ava} alt="img" 
			className='' />
		</div>
		
		<div className='pl-4'>
			<h5>
				{username || 'не удалось получить имя'}
			</h5>

			<h5>{latestMsg || ''}</h5>
		</div> 
		
		</div>
	);
}

export default observer(Chat)