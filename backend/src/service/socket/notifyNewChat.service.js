import { connectSocket } from './connectSocket.service.js'

export function NotifyNewChatService(users, chatData) {
	const io = connectSocket()

	if (!io) {
		console.log('socket не иницализирован ')
	}

	console.log('рассылка')
	users.forEach(username => {
		io.to(username).emit('new-chat', chatData)
	})
}
