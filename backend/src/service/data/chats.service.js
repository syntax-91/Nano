import { prisma } from '../prisma.js'

export async function ChatsService(username) {
	try {
		const userData = await prisma.user.findFirst({
			where: {
				username: username,
			},
		})

		const chats = await prisma.chat.findMany({
			where: {
				ownerId: userData.id,
			},
			include: {
				owner: {
					select: {
						username: true,
						ava: true,
					},
				},
			},
		}) //

		console.log('chats > ', chats)

		if (!chats || chats === null) {
			return {
				success: false,
				msg: 'пока что нету чатов..',
				chats: [],
			}
		}

		return {
			success: true,
			msg: 'на',
			chats: chats,
		}
	} catch (err) {
		console.error('ERROR > ', err)
		return
	}
}
