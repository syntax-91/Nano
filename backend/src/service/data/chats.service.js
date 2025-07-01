import { prisma } from '../prisma.js'

export async function ChatsService(username) {
	try {
		const res = await prisma.user.findFirst({
			where: {
				username: username,
			},
		}) //

		if (!res || res === null) {
			return {
				success: false,
				msg: 'пока что нету чатов..',
				chats: [],
			}
		}

		return {
			success: true,
			msg: 'на',
			chats: res.chats,
		}
	} catch (err) {
		console.error('ERROR > ', err)
		return
	}
}
