import { Router } from 'express'
import { ConfigService } from '../service/data/config.service.js'

export const configRoute = Router()

configRoute.get('/', (req, res) => {
	const username = req.headers['username']

	console.log('usName config > ', username)
	ConfigService(username).then(e =>
		res.json({
			success: e.success,
			msg: e.msg,
			config: e.config,
		})
	)
})
