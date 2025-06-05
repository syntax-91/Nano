import { connectIO } from './connectsIo.service.js'

export function NotifyNewChatService(users, chatData) {

	const io = connectIO();

	if(!io){
		console.log('socket не иницализирован ')	
	}

	console.log('рассылка')
	users.forEach(username => {
		io.to(username).emit('new-chat', chatData)
	});

}