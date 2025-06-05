import { useEffect, useState } from 'react'

export function useDebounce<T>(inputValue: T, delay: number){
	const [value, setValue] = useState<T>()

	useEffect(() => {
		const t = setTimeout(() => {
			setValue(inputValue)
		}, delay)

		return () => clearTimeout(t)
	}, [inputValue])

	return value
}