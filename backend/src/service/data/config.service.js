import { UserModel } from '../../models/UserModel.js'

export async function ConfigService(username) {
	try {
		const res = UserModel.findOne({
			username: username,
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
