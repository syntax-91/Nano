import Cookies from 'js-cookie'
import { makeAutoObservable } from 'mobx'

class sharedStoreClass {
	
	currentTheme = Cookies.get('currentTheme')||'dark'


	constructor() {
		makeAutoObservable(this)	
	}

	toggleTheme(){
		if(this.currentTheme == 'light'){
			this.currentTheme = 'dark'
		} else {
			this.currentTheme = 'light'
		}
	}


}

export const sharedStore = new sharedStoreClass()