import { makeAutoObservable } from 'mobx'

class IsOpenStore {
	isOpenMap = {
		settings: false,
		menuDesktop: false,
		menuMobile: false,
		test: false,
	}

	constructor() {
		makeAutoObservable(this)
	}

	// typeof - берёт все поля isOpenMap и превращает в тип
	// keyof - берёт называние и превращает в onion строку

	setIsOpen(type: keyof typeof this.isOpenMap, value: boolean) {
		this.isOpenMap[type] = value
	}
}

export const isOpenStore = new IsOpenStore()
