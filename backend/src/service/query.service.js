import { UserModel } from '../models/UserModel.js'

export async function QueryService(query){
	try {
		
		const res = await UserModel.find({
			username: { $regex: query, $options: 'i' }
				})

		if(res == null || !res){
			return {
				success: false,
				res: []
			}
		}

		const dataJSON = JSON.parse(JSON.stringify(res))

		dataJSON.map(d => (
			console.log('res: ', d.username)
		))

		return {
			success: true,
			res: dataJSON.map(data => ({
				username: data.username
			}))
		}

	} catch(err){
		console.log('ERROR > ', err)
	}
}