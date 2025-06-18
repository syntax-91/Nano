import mongoose from 'mongoose'
import { msgSchema } from './msgSchema.js'

  export const roomSchema = mongoose.Schema({
		roomID: String,
		//roomType
		msgs: [msgSchema],
		createAt: String
	})