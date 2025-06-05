import s from './../../shared/styles/inputStyles.module.css'
import { InputProps } from './../../shared/types/types'

export function Input({
	type = 'text',
	placeholder = 'Enter text...',
	value = '',
	style = 'default',
	required = false,
	rhf = false,
	...rest
}: InputProps) {
	return (
		rhf ? (
			<input
			required={required}
			placeholder={placeholder}
			className={`${s[style]} ${s.default}`}
			type={type} 
			{...rest} 
		/>
		):(
			<input
			required={required}
			className={`${s[style]} ${s.default}`}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={rest.onChange}
		/>
		)
	)
}
