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
			
			const { msg, roomID } = data;
			console.log('/sendMSG > ', msg, roomID)

			io.to(data.roomID).emit('msg', msg);
			SaveMsgDB(data); 
			
		});
 
		socket.on('disconnect', () => {
			console.log('Client disconnected');
		});
	});

}