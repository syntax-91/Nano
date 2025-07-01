import { prisma } from '../prisma.js'

export async function QueryService(query, username) {
	try {
		const res = await prisma.user.findFirst({
			where: {
				name: {
					contains: query,
					mode: 'insensitive', // без учёта регистра
				},
			},
		})

		const currentUser = await prisma.user.findFirst({
			data: {
				username: username,
			},
		})

		console.log('cr chat > ', currentUser.chats)

		const isFound = res.map(user => {
			const found = currentUser.chats.find(
				chat => chat.username === user.username
			)

			return {
				username: user.username,
				isFound: Boolean(found),
				ava: user.ava,
			}
		})

		console.log('isFound > ', isFound)

		return {
			success: true,
			res: isFound.map(data => ({
				username: data.username,
				ava: data.ava,
				isFound: data.isFound,
			})),
		}
	} catch (err) {
		console.log('ERROR > ', err)
	}
}
