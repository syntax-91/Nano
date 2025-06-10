import mongoose from 'mongoose'

 export const msgSchema = mongoose.Schema({
		roomID: String,
		who: String,
		text: String,
		createAt: String
 })