import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { AuthRouter } from './routes/auth.route.js'

import { ChatsRouter } from './routes/chats.route.js'
import { configRoute } from './routes/config.route.js'
import { createChatRouter } from './routes/createChat.route.js'
import { historyChatRouter } from './routes/historyChat.route.js'
import { PgMsgsRoute } from './routes/paginationMsgs.route.js'
import { QueryRouter } from './routes/query.route.js'
import { setupSocket } from './service/socket/socket.service.js'

const app = express()
app.use(express.json())

app.use(
	cors({
		origin: '*',
		credentials: true,
	})
)

const PORT = 3000
config()

// 1488

// socket.io
const server = createServer(app)
const io = new Server(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
})

//auth
app.use('/auth', AuthRouter)

//chats
app.use('/chats', ChatsRouter)

// /historyChat
app.use('/historyChat', historyChatRouter)

// /query
app.use('/query', QueryRouter)

// pagination
app.use('/paginationMsgs', PgMsgsRoute)

// /createChat
app.use('/createChat', createChatRouter)

// config
app.use('/config', configRoute)

//404
app.use((req, res) => {
	res.status(404).json({ msg: 'Not Found' })
})

const run = async () => {
	setupSocket(io)

	await server.listen(PORT, (req, res) => {
		console.log(`Server running as http://localhost:${PORT}`)
	})
}

run()
