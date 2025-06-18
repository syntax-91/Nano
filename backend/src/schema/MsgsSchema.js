import mongoose from 'mongoose'

export const MsgsSchema = mongoose.Schema({
	roomID: String,
	
	who: String,
	text: String,
	createAt: String,
	time: String
}, {_id: true} )