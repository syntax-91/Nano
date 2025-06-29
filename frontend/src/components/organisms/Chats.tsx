import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import socket from '../../app/socket/socket'
import { configStore } from '../../app/store/app/configStore'
import { userDataStore } from '../../app/store/app/userData'
import { chatsStore } from '../../app/store/chatStore/chats'
import type {
	IChatProps,
	INewChatProps,
	TMembers,
} from '../../shared/types/types'
import Chat from '../molecules/chat'

function Chats() {
	const n = useNavigate()

	useEffect(() => {
		chatsStore.fetchChats()

		const handleNewChat = (data: INewChatProps) => {
			const members: TMembers = data.members

			console.info('new-chat', data)

			const newChat = members.userA === userDataStore.userName

			if (newChat) {
				chatsStore.updateChats({
					ava: 'sss',
					roomID: data.roomID,
					username: data.members.userB,
				})
			} else {
				chatsStore.updateChats({
					ava: 'sss',
					roomID: data.roomID,
					username: data.members.userA,
				})
			}

			n(`/chat/${data.roomID}`)
		}

		socket.on('new-chat', handleNewChat)
		socket.emit('join', userDataStore.userName)

		return () => {
			socket.off('new-chat', handleNewChat)
		}
	}, [])

	return (
		<div
			className={clsx(
				'chats my-3 w-[100%] p-2 rounded-2xl md_borderP tr-6 up',
				configStore.currentTheme == 'light' ? 'bbl BAL' : 'bbd'
			)}
		>
			{chatsStore.chats.length > 0 &&
				chatsStore.chats.map((chat: IChatProps) => (
					<div key={chat.username}>
						<Chat
							ava={chat.ava}
							username={chat.username || 'error'}
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
