import { makeAutoObservable } from 'mobx'

class LoadingStore {

	loading: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

	setLoading(value: boolean){
		this.loading = value
	}
}

export const loadingStore = new LoadingStore();