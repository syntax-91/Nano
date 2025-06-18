import mongoose from 'mongoose'

 export const msgSchema = mongoose.Schema({
		who: String,
		text: String,
		createAt: String,
		time: String
}, {_id: true})