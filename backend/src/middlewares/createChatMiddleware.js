import { prisma } from '../service/prisma.js'

export const mweCreateChat = async (req, res, next) => {
	const data = req.body

	console.log('запросик на генерация чата!')
	console.log('createChatMWL > ', data)

	const uA = await prisma.chat.findFirst({
		where: {
			owner: {
				is: { username: data.userA.username },
			},
		},
	})

	const uB = await prisma.chat.findFirst({
		where: {
			owner: {
				is: { username: data.userB.username },
			},
		},
	})

	if (uA && uB) {
		console.log('уже сгенерировано..')
		res.json({
			success: false,
			msg: 'попробуйте перезагрузить страницу!',
		})
	} else {
		next()
		console.log('чат не найден, пропускаем..')
	}
}
