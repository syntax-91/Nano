import mongoose from 'mongoose'

  export const roomSchema = mongoose.Schema({
		roomID: String,
		//roomType
		msgs: Array
	})