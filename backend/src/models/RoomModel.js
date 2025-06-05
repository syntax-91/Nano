import mongoose from 'mongoose'
import { roomSchema } from '../schema/roomSchema.js'

export const RoomModel = mongoose.models.rooms || mongoose.model('rooms', roomSchema)