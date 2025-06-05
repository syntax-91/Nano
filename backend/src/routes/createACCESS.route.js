import { Router } from 'express'
import { createAccessService } from '../service/TOKEN/createAccess.service.js'
import { getUsernameFromRefreshToken } from '../service/TOKEN/getUsernameFromREFRESH.service.js'

export const createAccessRouter = Router()
 
// /createACCESS
createAccessRouter.post('/', (req, res) => {
	const refresh_token = req.body;

	if(!refresh_token){
		res.json({success: false, msg: 'токен отсутствует'})
	}
	const username = getUsernameFromRefreshToken(refresh_token);

	if(!username){
		return res.json({msg: 'что-то пошло не так'})
	}

	createAccessService(username)
	.then(e => {
		res.json({ data: e })
	})

})