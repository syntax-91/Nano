import { hash } from 'bcryptjs'
import { prisma } from '../prisma.js'

export async function addUserService(data) {
	try {
		const res = await prisma.user.findFirst({
			where: { username: data.username },
		})

		console.log('RES > ', res)

		if (res?.username === data.username) {
			console.log('уже существует')
			return {
				success: false,
				msg: 'уже существует',
			}
		}

		const HashPsw = await hash(data.password, 10)

		const add = await prisma.user.create({
			data: {
				username: data.username,
				password: HashPsw,
			},
		})

		console.log('createUser > ', add)

		return {
			success: true,
			id: add.id,
			msg: 'успех',
		}
	} catch (err) {
		console.log('ERROR > ', err)
	}
}
