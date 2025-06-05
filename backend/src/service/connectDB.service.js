import mongoose from 'mongoose'

export async function connectDB() {
	const URI = process.env.URI

	try {
		await mongoose.connect(URI)
		console.log('Успех! (вроде)')
	} catch (err) {
		console.error('ERROR > ', err)
	}
}
