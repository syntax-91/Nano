import axios from 'axios'
import Cookies from 'js-cookie'
import { makeAutoObservable, reaction } from 'mobx'
import type { IConfigProps } from '../../../shared/types/types'
import { modalStore } from '../shared/modalStore'
import { userDataStore } from './userData'

class ConfigStoreClass {
	config: IConfigProps = {
		theme: localStorage.getItem('currentTheme') || 'light',
	}

	currentTheme = this.config.theme

	bgCurrentChat = localStorage.getItem('bgCurrentChatURL') || 'not'

	bgBlurCurrentChat = false

	constructor() {
		makeAutoObservable(this)
		reaction(
			() => this.bgCurrentChat,
			() => console.info('bgCurrentChat > ', this.bgCurrentChat)
		)
	}

	setBgCurrentChat(value: string) {
		this.bgCurrentChat = value
		localStorage.setItem('bgCurrentChatURL', value)
	}

	toggleBlurCurrentChat = () => {
		console.log('***')
		if (this.bgBlurCurrentChat === true) {
			this.bgBlurCurrentChat = false
		} else {
			this.bgBlurCurrentChat = true
		}
	}

	toggleTheme() {
		if (this.currentTheme == 'dark') {
			this.currentTheme = 'light'
			Cookies.set('currentTheme', 'light')
		} else {
			this.currentTheme = 'dark'
			Cookies.set('currentTheme', 'dark')
		}
	}

	async FetchConfig() {
		try {
			const res = await axios.get('http://192.168.100.58:3000/config', {
				headers: { username: userDataStore.userName },
			})

			if (res.status !== 200 || !res.data.config) {
				modalStore.run('что-то пошло не так!', false, 3000)
			}

			console.info('config > ', res.data)

			this.setConfig(res.data.config)
		} catch (err) {
			console.error('ERR > ', err)
		}
	}

	setConfig(data: IConfigProps) {
		this.config = data
	}
}

export const configStore = new ConfigStoreClass()
