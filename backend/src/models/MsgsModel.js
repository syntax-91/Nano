import mongoose from 'mongoose'
import { MsgsSchema } from '../schema/MsgsSchema.js'

export const MsgsModel = mongoose.model('msgs', MsgsSchema)