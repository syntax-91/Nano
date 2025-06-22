import { Router } from 'express'
import { QueryService } from '../service/data/query.service.js'

export const QueryRouter = Router()

// /query
QueryRouter.get('/', (req, res) => {
	const query = req.headers['x-query']
	const username = req.headers['username']

	console.log('query: ', query, username)

	QueryService(query, username).then(e => {
		res.json({
			success: e.success,
			res: e.res,
		})
	})
})
