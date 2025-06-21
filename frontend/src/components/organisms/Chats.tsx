import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import socket from '../../app/socket/socket'
import { userDataStore } from '../../app/store/app/userData'
import { chatsStore } from '../../app/store/chatStore/chats'
import type {
	IChatProps,
	INewChatProps,
	TMembers,
} from '../../shared/types/types'
import Chat from '../molecules/chat'

function Chats() {
	useEffect(() => {
		chatsStore.fetchChats()

		const handleNewChat = (data: INewChatProps) => {
			const members: TMembers = data.members

			console.info('new-chat', data)

			const newChat = members.userA.username === userDataStore.userName

			if (newChat) {
				chatsStore.updateChats({
					ava: 'sss',
					roomID: data.roomID,
					username: data.members.userB.username,
				})
			} else {
				chatsStore.updateChats({
					ava: 'sss',
					roomID: data.roomID,
					username: data.members.userA.username,
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
		<div
			className='chats my-3 w-[100%] 
		bg-[#050505] p-2 rounded-2xl'
		>
			{chatsStore.chats.length > 0 &&
				chatsStore.chats.map((chat: IChatProps) => (
					<div key={chat.username}>
						<Chat
							ava={chat.ava}
							username={chat.username}
							roomID={chat.roomID}
						/>
					</div>
				))}

			{chatsStore.chats.length === 0 && (
				<div className='text-center my-5'>у вас пока что нету чатов</div>
			)}
		</div>
	)
}

export default observer(Chats)
