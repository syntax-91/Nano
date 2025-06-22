import { useEffect, useRef, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { configStore } from '../../app/store/app/configStore'
import { searchQueryStore } from '../../app/store/fetch/HeaderQuery'
import { useDebounce } from '../../shared/hooks/useDebounce'
import { Input } from '../atoms/Input'

export function SearchMenu() {
	const [query, setQuery] = useState('')
	const debouncedQuery = useDebounce(query, 300)
	const inputRef = useRef<HTMLInputElement>(null)

	const [isFocusInput, setIsFocusInput] = useState(false)

	useEffect(() => {
		searchQueryStore.setQuery(query)
	}, [debouncedQuery])

	useEffect(() => {
		if (query.length > 0) {
			setIsFocusInput(true)
		} else {
			setIsFocusInput(false)
		}
	}, [query])

	const handleClear = () => {
		setQuery('')
	}

	return (
		<div className='flex-1/2 flex ml-[15px] items-center h-[100%]'>
			<Input
				ref={inputRef}
				rhf={false}
				value={query}
				onChange={e => setQuery(e.target.value)}
				style='full'
				placeholder='поиск...'
				theme={configStore.currentTheme == 'dark' ? 'dark' : 'light'}
			/>

			{isFocusInput && (
				<div
					className='rltr fixed right-8 cursor-pointer'
					onClick={handleClear}
				>
					<IoMdClose size={25} color='#c8c4c4' />
				</div>
			)}
		</div>
	)
}
