import { useEffect, useState } from 'react'
import { searchQueryStore } from '../../app/store/HeaderSearchQuery'
import { useDebounce } from '../../shared/hooks/useDebounce'
import { Input } from '../atoms/Input'

export function SearchMenu() {

	const [query, setQuery] = useState('')
	const debouncedQuery = useDebounce(query, 400)

	useEffect(() => {
			searchQueryStore.setQuery(query)
	}, [debouncedQuery])

	return (
		<div className='flex-1/2 ml-[15px]'>
			<Input
			rhf={false}
			 value={query}
			 onChange={e => setQuery(e.target.value)} 
			 style='full'
			 placeholder='Enter search...'/>
		</div>
	)
}