import { makeAutoObservable, reaction } from 'mobx'

class ModalStore {
	isOpen = false
//	title = ''
	msg = ''
	success = false

	constructor() {
		makeAutoObservable(this)

		reaction(
			() => this.isOpen,
			() => {
				setTimeout(() => {
					this.closeModal()
				}, 3000)
			}
		)
	}

	closeModal() {
		this.isOpen = false
	}

	run(msg: string, success: boolean) {
		;(this.isOpen = true), //
			(this.msg = msg || ''),
			(this.success = success || false)
	}
}

export const modalStore = new ModalStore()
