import { makeAutoObservable } from 'mobx'

class sharedStoreClass {
	
	isOpen = false;

	constructor() {
		makeAutoObservable(this)	
	}

	setIsOpen(value: boolean){
		this.isOpen = value
	}

}

export const sharedStore = new sharedStoreClass()