import type React from 'react'

interface ITextAreaProps {
	value: string,
	
	setState: 
	(e: React.ChangeEvent<HTMLTextAreaElement>) => void,

	handleInput?: () => void,
	handleKeyDown?: 
	(e:React.KeyboardEvent<HTMLTextAreaElement>) => void

	resize: 'none'|'block'|'horizontal'|'inline',
	overflowY: 'auto'|'hidden',
	lineHeight: number,

	padding: number
}

export function TextArea(
	{
		value,
		setState,
		resize = 'none',
		overflowY = 'auto',
		lineHeight = 18,
		padding = 8,
		...rest
	}:ITextAreaProps
){

	const MAX_ROWS = 5;

	return (
		<textarea 
		value={value}
		onChange={ setState }
		
		onInput={rest.handleInput && rest.handleInput}
		
		onKeyDown={rest.handleKeyDown && 
			rest.handleKeyDown
		}
		
		style={{
			width: '100%',
			resize: resize,
			overflowY: overflowY,
			lineHeight: `${lineHeight}px`,
			padding: `${padding}px`,
			maxHeight: `${lineHeight * MAX_ROWS}`
		}}>
		

		</textarea>
	)
}