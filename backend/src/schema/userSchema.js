import mongoose from 'mongoose'

export const UserSchema = mongoose.Schema({
	username: String,
	password: String,

	chats: [
		{username: String, roomID: String, ava: String}
	]
})
