import { SaveMsgDB } from '../data/saveMsgDB.service.js'

export function setupSocket(io) {
	io.on('connection', socket => {
		console.log('socket')

		socket.on('joinRoom', roomID => {
			socket.join(roomID)
			console.log(`Client joined room: ${roomID}`)
		})

		socket.on('join', username => {
			socket.join(username)
		})

		socket.on('sendMessage', data => {
			console.log('/sendMSG > ', data)

			io.to(data.roomID).emit('msg', data.msg)
			SaveMsgDB(data)
		})

		socket.on('change-status', data => {
			console.log('change event > ', data)

			io.emit('change-status', {
				username: data.username,
				status: data.status,
			})
		})

		socket.on('disconnect', () => {
			console.log('Client disconnected')
		})
	})
}
