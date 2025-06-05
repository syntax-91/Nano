import { makeAutoObservable } from 'mobx'
import type { IChatProps } from '../../shared/types/types'

class SearchQuery {
	
	query = '' 
	queryRes:IChatProps[] = []

	constructor() {
		makeAutoObservable(this)
	}

	setQuery(text: string){
		this.query = text
	}

	setQueryRes(data:IChatProps[]){
		this.queryRes = data
	}

}

export const searchQueryStore = new SearchQuery();