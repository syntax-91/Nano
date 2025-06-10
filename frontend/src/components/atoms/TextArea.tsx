import type React from 'react'

interface ITextAreaProps {
	value?: string,
	
	setState?: 
	(e: React.ChangeEvent<HTMLTextAreaElement>) => void,

	handleInput?: () => void,
	handleKeyDown?: 
	(e:React.KeyboardEvent<HTMLTextAreaElement>) => void

	resize?: 'none'|'block'|'inline'|'vertical',
	
	overflow?: 'auto'|'hidden'|'vertical'|'horizontal',

	lineHeight?: number,
	placeholder?: string
	padding?: number,

	onChange: (
		e:React.ChangeEvent<HTMLTextAreaElement>
	) => void
}

export function TextArea(
	{
		value,
		setState, 
		resize = 'none',
		overflow = 'auto',
		lineHeight = 18,
		padding = 8,
		placeholder = 'Enter text...',
		...rest
	}:ITextAreaProps
){

	const MAX_ROWS = 5;

	return (
		<textarea 
		value={value}
		onChange={ rest.onChange }

		placeholder={placeholder}

		
		onInput={rest.handleInput && rest.handleInput}
		
		onKeyDown={rest.handleKeyDown && 
			rest.handleKeyDown
		}
		
		style={{
			width: '100%',
			resize: resize,
			overflow: overflow,
			lineHeight: `${lineHeight}px`,
			padding: `${padding}px`,
			maxHeight: `${lineHeight * MAX_ROWS}`
		}}
		
		className='border border-[#283369] rounded-2xl outline-0'
		>
		

		</textarea>
	)
}