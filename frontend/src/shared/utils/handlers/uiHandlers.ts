import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { CreateChatAPI } from '../../../api/create'
import socket from '../../../app/socket/socket'
import { modalStore } from '../../../app/store'
import { userDataStore } from '../../../app/store/app/userData'
import { currentChatDataStore } from '../../../app/store/chatStore/currentChatDataStore'
import { isOpenStore } from '../../../app/store/isOpen/isOpenSettingsStore'
import type { IMsgProps, ISendMsgProps } from '../../types/types'
import { logOutU } from '../LogOut'

export const handleClickProfile = (
	username: string,
	navigate: ReturnType<typeof useNavigate>
) => {
	if (username === userDataStore.userName) {
		isOpenStore.setIsOpen('settings', true)
	} else {
		navigate(`/u/${username}`)
	}
}

export const handleKeyDownCurrentChat = (e: KeyboardEvent) => {
	if (
		e.ctrlKey === true &&
		e.key === 'Escape' &&
		currentChatDataStore.selectedCurrentChat
	) {
		currentChatDataStore.reset()
	}
}

export const handleNewMsg = (msg: IMsgProps) => {
	console.info('new-msg > ', msg)
	//			notification.play()
	currentChatDataStore.setMsg(msg)
}

const now = new Date()
const hours = now.getHours()

const minutes = now.getMinutes()
const createAt = now.toISOString()

export const sendMsg = ({ endRef, roomID, text, setText }: ISendMsgProps) => {
	endRef.current?.scrollIntoView({ behavior: 'smooth' })

	if (currentChatDataStore.isFound) {
		console.warn('roomID: ', currentChatDataStore.roomID)

		socket.emit('sendMessage', {
			roomID: roomID,

			msg: {
				msgID: v4(),
				text: text,
				ava: '',
				who: userDataStore.userName,
				time: `${hours}:${minutes}`,
				createAt: createAt,
			},
		})
	} else if (
		!currentChatDataStore.isFound ||
		currentChatDataStore.isFound === null
	) {
		CreateChatAPI({
			userA: userDataStore.userName || '',
			userB: currentChatDataStore.username,
			firstMsg: text,
		})
	}

	setText('')
}

export const handleCloseCurrentChat = () => {
	currentChatDataStore.reset()
}

export const handleSettings = () => {
	isOpenStore.setIsOpen('settings', true)
}

export const handleLogOut = () => {
	logOutU()
}

export const handleCloseModal = () => {
	modalStore.closeModal()
}
