import { UserModel } from '../models/UserModel.js'

export async function QueryService(query, username){
	try {
		
		const res = await UserModel.find({
			username: { $regex: query, $options: 'i', $ne:username }
		})

		const currentUser = await UserModel.findOne({username})

		console.log('cr chat > ', currentUser.chats)

		const isFound = res.map(user => {
			
			const found = currentUser.chats.find(chat => 
				chat.username === user.username
			)

			return {
				username: user.username,
				isFound: Boolean(found)
			}
		});

		console.log('isFound > ', isFound)

		return {
			success: true,
			res: isFound.map(data => ({
				username: data.username,
				isFound: data.isFound
			}))
		}

	} catch(err){
		console.log('ERROR > ', err)
	}
}