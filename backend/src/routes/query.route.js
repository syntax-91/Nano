import { Router } from 'express'
import { QueryService } from '../service/query.service.js'

export const QueryRouter = Router();

// /query
QueryRouter.get('/', (req, res) => {
	const query = req.headers['x-query'];

	console.log('query: ', query)

	QueryService(query)
	.then(e => {
		res.json({
			success: e.success,
			res: e.res
		})
	})

})