import { hash } from 'bcryptjs'
import { UserModel } from '../models/UserModel.js'

export async function addUserService(data){
	try {

		const res = await UserModel.findOne({
			username: data.username
		})

		console.log('RES > ', res)

		if(res?.username === data.username){
			console.log('уже существует')
			return {
				success: false,
				msg: 'уже существует'
			}
		}

		const HashPsw = await hash(data.password, 10)

		const add = await UserModel.insertOne({
			username: data.username,
			password: HashPsw
		})

		console.log('пенис')
		return {
			success: true,
			msg: 'успех'
		}

	} catch(err){
		console.log('ERROR > ', err)
	}

}