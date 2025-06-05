import { SaveMsgDB } from './saveMsgDB.service.js'

 
export function setupSocket(io){
	
	io.on('connection', (socket) => {
		
		console.log('socket')

		socket.on('joinRoom', (roomID) => {
			socket.join(roomID);
			console.log(`Client joined room: ${roomID}`);
		});

		socket.on('join', (username) => {
			socket.join(username)
		})
 
		socket.on('sendMessage', (data) => {
			
			const { roomID, msg } = data;
			console.log('/sendMSG > ', roomID, data)

			io.to(roomID).emit('msg', msg);
			SaveMsgDB(data, roomID); 
			
		});
 
		socket.on('disconnect', () => {
			console.log('Client disconnected');
		});
	});

}