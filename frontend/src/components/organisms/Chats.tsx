import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import socket from '../../app/socket/socket'
import { chatsStore } from '../../app/store/chatsStore/chats'
import { userDataStore } from '../../app/store/userData'
import type { IChatProps } from '../../shared/types/types'
import Chat from '../molecules/chat'

 function Chats(){
 
	useEffect(() => {
		chatsStore.fetchChats()

		const handleNewChat = (data:IChatProps) => {
			console.log('сообщник ПиДидди')
			chatsStore.updateChats(data)
		}
 
		socket.on('new-chat', handleNewChat)

		socket.emit('join', userDataStore.userName)

		return () => {
			socket.off('new-chat', handleNewChat)
		}
	}, [])

	
  
	return (
		<div className=''>
			 
			{chatsStore.chats && 
			chatsStore.chats.map((chat:IChatProps, idx) => (
					<div key={idx}>
						<Chat
						ava={chat.ava}
						username={chat.username}
						roomID={chat.roomID}
						 />
					</div>
			)) }

			{chatsStore.chats.length === 0 && (
				<div className='text-center mt-5'>
					у вас пока что нету чатов
				</div>)
			}


		</div>
	)
}

export default observer(Chats)