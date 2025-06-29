import cs from 'js-cookie'
import { makeAutoObservable } from 'mobx'

class userDataStoreClass {
	userName = cs.get('userName_nano')
	isAuth = cs.get('isAuth_nano') || false

	dataMap = {
		ava: cs.get('ava_nano') || '',
	}

	constructor() {
		makeAutoObservable(this)
	}

	setUserData(type: keyof typeof this.dataMap, value: string) {
		this.dataMap[type] = value
		cs.set(`${type}_nano`, value)
	}
}

export const userDataStore = new userDataStoreClass()
