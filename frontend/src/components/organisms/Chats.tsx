import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import socket from '../../app/socket/socket'
import { userDataStore } from '../../app/store/app/userData'
import { chatsStore } from '../../app/store/chatStore/chats'
import type { IChatProps, INewChatProps, TMembers } from '../../shared/types/types'
import Chat from '../molecules/chat'

 function Chats(){
 
	useEffect(() => {
		chatsStore.fetchChats()

		const handleNewChat = (data:INewChatProps) => {
			
			const members:TMembers = data.members;

			const newChat = members.userA === userDataStore.userName;
			//console.info('new-chat', data)

			if(newChat){
				 chatsStore.updateChats({
					ava: 'sss',
					roomID: data.roomID,
					username: data.members.userB
				 })
			} 
			else {
			chatsStore.updateChats({ 
				ava: 'sss',
				roomID: data.roomID,
				username: data.members.userA
				})
			}

		} 
 
		socket.on('new-chat', handleNewChat)
		socket.emit('join', userDataStore.userName)

		return () => {
			socket.off('new-chat', handleNewChat)
		}
	}, [])
  
	return (
		<div className='chats mt-3 w-[100%] 
		bg-[#040404]/[0.5] p-2 rounded-2xl'>
			 
			{chatsStore.chats.length > 0 && 
			chatsStore.chats.map(
				(chat:IChatProps) => (
					<div key={chat.username}>
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