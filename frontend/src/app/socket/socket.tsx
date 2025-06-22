import { io } from 'socket.io-client'

const socket = io('http://192.168.100.58:3000/')
export default socket
