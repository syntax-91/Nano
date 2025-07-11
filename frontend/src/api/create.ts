import axios from 'axios'
import { modalStore } from '../app/store'
import { currentChatDataStore } from '../app/store/chatStore/currentChatDataStore'
import type { ICreateChatProps } from '../shared/types/types'

export async function CreateChatAPI({
	userA,
	userB,
	firstMsg,
}: ICreateChatProps) {
	try {
		const data = { userA: userA, userB: userB, firstMsg: firstMsg }

		const res = await axios.post('http://192.168.100.58:3000/createChat', data)

		console.info('ответ от сервера create (create) > ', res.data)

		if (res.data.success) {
			currentChatDataStore.setIsFound(true)
		}

		modalStore.run(res.data.msg, res.data.success, 3000)
	} catch (err) {
		console.error('ERROR > ', err)
	}
}
