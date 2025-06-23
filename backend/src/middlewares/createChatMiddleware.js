import { UserModel } from '../models/UserModel.js'

export const mweCreateChat = async (req, res, next) => {
	const data = req.body

	console.log('запросик на генерация чата!')
	console.log('d > ', data)

	const uA = await UserModel.findOne({
		chats: {
			username: data.userB,
		},
	})

	const uB = await UserModel.findOne({
		chats: {
			username: data.userA,
		},
	})

	if (!uA || uA === null || !uB || uB === null) {
		console.log('дальше')
		next()
	} else {
		console.log('уже сгенерировано..')
		res.json({
			success: false,
			msg: 'попробуйте перезагрузить страницу!',
		})
	}
}
