import { v4 } from 'uuid'
import { UserModel } from '../../models/UserModel.js'
import { NotifyNewChatService } from '../../service/socket/notifyNewChat.service.js'
import { prisma } from '../prisma.js'

export async function createChatService(data) {
	try {
		const roomID = v4()

		const res = await prisma.room.create({
			data: {
				roomID: roomID,
				members: [data.userA, data.userB],
			},
		})

		const addMsg = await prisma.msg.create({
			data: {
				roomID: roomID,

				text: data.firstMsg,
				createdAt: new Date(),
				username: data.userA,
			},
		})

		const UserAData = {
			username: data.userA,
			ava: '',
			roomID: roomID,
		}

		const UserBData = {
			username: data.userB,
			ava: '',
			roomID: roomID,
		}

		const addChatUserA = await UserModel.updateOne(
			{ username: data.userA },
			{ $push: { chats: UserBData } },
			{ upsert: true }
		)

		const addChatUserB = await UserModel.updateOne(
			{ username: data.userB },
			{ $push: { chats: UserAData } },
			{ upsert: true }
		)

		if (
			!res ||
			res === null ||
			!addChatUserA ||
			addChatUserA === null ||
			!addChatUserB ||
			addChatUserB === null
		) {
			return {
				success: false,
				msg: 'что-то пошло не так!',
			}
		}

		const chatData = {
			roomID: roomID,
			members: { userA: UserAData.username, userB: UserBData.username },
		}

		NotifyNewChatService([data.userA, data.userB], chatData)

		return {
			success: true,
			msg: 'сгенерировано!',
		}
	} catch (err) {
		console.log('ERROR > ', err)
		return {
			success: false,
			msg: '500 - ошибка на сервере',
		}
	}
}
