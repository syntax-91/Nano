import { prisma } from '../prisma'

export async function ConfigService(username) {
	try {
		const res = await prisma.user.findFirst({
			where: {
				username: username,
			},
		})

		const config = res.config

		if (!res || res === null) {
			return {
				success: false,
				msg: 'не удалось получить настройки!',
			}
		}

		return {
			success: true,
			msg: 'синхронизация прошло успешно!',
			config: config,
		}
	} catch (err) {
		console.log('ERR > ', err)
	}
}
