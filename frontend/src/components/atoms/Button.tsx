import type { IBtnProps } from '../../shared/types/types'
import s from './../../shared/styles/btnStyles.module.css'

export function Button({
	label = 'text',
	type = 'button',
	style = 'default',
	location = 'start',
	theme = 'dark',
	isBlock = true,
	max_w = 80,
	w = 300,
	...rest
}: IBtnProps) {
	//

	return (
		<div
			className={`${isBlock ? `flex w-[100%]` : 'inline-flex'}

			/*----------*/

			ltr-jump

			${location === 'start' && 'justify-start'}
			${location === 'center' && 'justify-center'}
			${location === 'end' && 'justify-end'}
	  	`}
		>
			<button
				style={{ width: w, maxWidth: `${max_w}%` }} //
				className={` ${s[style]} ${s[theme]} 
				${rest.disabled && s.disabled} }`}
				onClick={rest.onClick}
				disabled={rest.disabled}
			>
				{label}
			</button>
		</div>
	)
}
