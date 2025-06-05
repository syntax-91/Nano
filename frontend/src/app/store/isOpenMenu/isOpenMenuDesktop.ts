import { makeAutoObservable } from 'mobx'

class isOpen {
	
	isOpenMenuDesktop = false

	constructor() {
		makeAutoObservable(this)	
	}

	open(){
		this.isOpenMenuDesktop = true;
	}

	close(){
		this.isOpenMenuDesktop = false;
	}
}

export const isOpenMenuDesktop = new isOpen();