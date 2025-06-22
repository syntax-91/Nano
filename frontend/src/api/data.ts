import axios from 'axios'
import { modalStore } from '../app/store'
import { configStore } from '../app/store/app/configStore'
import { userDataStore } from '../app/store/app/userData'
import { currentChatDataStore } from '../app/store/chatStore/currentChatDataStore'
import { searchQueryStore } from '../app/store/fetch/HeaderQuery'
import type { IChatProps, IUserData } from '../shared/types/types'

//

export async function msgsAPI(roomID: string) {
	try {
		const res = await axios.get('http://192.168.100.58:3000/historyChat', {
			headers: { Authorization: `${roomID}` },
		})

		currentChatDataStore.setMsgs(res.data.msgs)
		currentChatDataStore.setFirstMsgId(res.data.msgs[0]._id)
	} catch (err) {
		console.error('ERROR > ', err)
	} finally {
		currentChatDataStore.setLoading(false)
	}
}

export async function QueryAPI() {
	try {
		const res = await axios.get('http://192.168.100.58:3000/query', {
			headers: {
				'x-query': searchQueryStore.query,
				username: userDataStore.userName,
			},
		})

		const data: IChatProps[] = res.data.res

		if (res.data) {
			searchQueryStore.setQueryRes(data)
		}
	} catch (err) {
		console.error('ERROR > ', err)
	}
}

export async function userDataAPI(username: string) {
	try {
		const res = await axios.get('http://192.168.100.58:3000/userInfo', {
			headers: { username: username },
		})

		const data: IUserData = res.data

		return data
	} catch (err) {
		console.error('ERROR userDateAPI > ', err)
	}
}

export async function updateMsgs() {
	try {
		if (currentChatDataStore.msgs.length < 20) return

		const res = await axios.get('http://192.168.100.58:3000/paginationMsgs', {
			headers: {
				firstMsgId: currentChatDataStore.firstMsgId,
				roomID: currentChatDataStore.roomID,
			},
		})

		console.info('всего сообщений > ', res.data.msgs.length)

		if (res.data.msgs.length > 0) {
			currentChatDataStore.setNewMsgs(res.data.msgs)

			currentChatDataStore.setFirstMsgId(res.data.msgs[0]._id)
		}
	} catch (err) {
		console.error('ERROR > ', err)
	}
}

export async function configAPI() {
	try {
		const res = await axios.get('http://192.168.100.58:3000/config', {
			headers: { username: userDataStore.userName },
		})

		if (res.status !== 200 || !res.data.config) {
			modalStore.run('что-то пошло не так!', false, 3000)
		}

		console.info('config > ', res.data)

		configStore.setConfig(res.data.config)
	} catch (err) {
		console.error('ERR > ', err)
	}
}
