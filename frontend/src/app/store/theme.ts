import Cookies from 'js-cookie'
import { makeAutoObservable, reaction } from 'mobx'


class theme {
	
	currentTheme = Cookies.get('currentTheme')||'dark'

	constructor() {
		makeAutoObservable(this)	

		reaction(
			() => this.currentTheme,
			() => Cookies.set('currentTheme', this.currentTheme)
		)
	}

	toggleTheme(){
		if(this.currentTheme == 'light'){
			this.currentTheme = 'dark'
		} else {
			this.currentTheme = 'light'
		}
	}

}

export const themeStore = new theme()