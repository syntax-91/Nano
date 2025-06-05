import Cookies from 'js-cookie'
import { makeAutoObservable } from 'mobx'

class userDataStoreClass {
	
	userName = Cookies.get('userName_nano')
	isAuth = Cookies.get('isAuth_nano')||false


	constructor() {
		makeAutoObservable(this)
	}
}

export const userDataStore = new userDataStoreClass()