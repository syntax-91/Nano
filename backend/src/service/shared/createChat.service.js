import { v4 } from 'uuid'
import { NotifyNewChatService } from '../../service/socket/notifyNewChat.service.js'
import { prisma } from '../prisma.js'

export async function createChatService(data) {
	try {
		const roomID = v4()

		// создание room
		await prisma.room.create({
			data: {
				roomID: roomID,
			},
		})

		//создание чата! дял обоих юзеров
		await prisma.chat.createMany({
			data: [
				{
					roomID,
					ownerId: data.userA.id,
					ava: data.userA.id || '',
				},
				{
					roomID,
					ownerId: data.userB.id,
					ava: data.userB.id || '',
				},
			],
		})

		// добавляем 1'ое сообщение от userA
		await prisma.msg.create({
			data: {
				roomID,
				text: data.firstMsg,
				whoId: data.userA.id,
			},
		})

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
		console.log('ERROR createChat > ', err)
		return {
			success: false,
			msg: '500 - ошибка на сервере',
		}
	}
}
