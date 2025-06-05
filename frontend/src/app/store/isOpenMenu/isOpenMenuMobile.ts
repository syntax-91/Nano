import { makeAutoObservable } from 'mobx'

class isOpen {
	
	isOpenMenuMobile = false

	constructor() {
		makeAutoObservable(this)	
	}

	open(){
		this.isOpenMenuMobile = true;
	}

	close(){ 
		this.isOpenMenuMobile = false;
	}
}

export const isOpenMenuMobile = new isOpen();