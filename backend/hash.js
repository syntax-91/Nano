import { hash } from 'bcryptjs'

const psw = '123123'
const hashPSW = await hash(psw, 10)

console.log(hashPSW)