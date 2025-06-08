import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import socket from '../../app/socket/socket'
import { chatsStore } from '../../app/store/chatsStore/chats'
import { userDataStore } from '../../app/store/userData'
import type { IChatProps, INewChatProps } from '../../shared/types/types'
import Chat from '../molecules/chat'

 function Chats(){
 
	useEffect(() => {
		chatsStore.fetchChats()
 
				///////////////////////////

		const handleNewChat = (data:INewChatProps) => {
			const newChat = data.userA === userDataStore.userName;
					console.info('new-chat')


			if(!newChat){
				 chatsStore.updateChats({
					ava: 'sss',
					roomID: data.roomID,
					username: data.userB
				 })
			}
			else {
				chatsStore.updateChats({ 
					ava: 'sss',
					roomID: data.roomID,
					username: data.userA
				 })
			}

		} 

		///////////////////////////
 
		socket.on('new-chat', handleNewChat)
		socket.emit('join', userDataStore.userName)

		return () => {
			socket.off('new-chat', handleNewChat)
		}
	}, [])

	
  
	return (
		<div className=''>
			 
			{chatsStore.chats.length && 
			chatsStore.chats.map((chat:IChatProps, idx) => (
					<div key={idx}>
						<Chat
						ava='HI'
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