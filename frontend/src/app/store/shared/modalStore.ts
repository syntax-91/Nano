import { makeAutoObservable, reaction } from 'mobx'

class ModalStore {
	isOpen = false
	//	title = ''
	msg = 'Добро пожаловать'
	delay = 3000
	success = false

	constructor() {
		makeAutoObservable(this)

		reaction(
			() => this.isOpen,
			() => {
				setTimeout(() => {
					this.closeModal()
					console.info('изменение modalStore > ')
				}, this.delay)
			}
		)
	}

	closeModal() {
		this.isOpen = false
	}

	run(msg: string, success: boolean, delay: number) {
		;(this.isOpen = true), //
			(this.msg = msg || '')
		this.success = success || false
		this.delay = delay
	}
}

export const modalStore = new ModalStore()
