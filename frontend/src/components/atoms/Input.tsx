import clsx from 'clsx'
import s from './../../shared/styles/inputStyles.module.css'
import type { InputProps } from './../../shared/types/types'

export function Input({
	type = 'text',
	placeholder = 'Enter text...',
	value = '',
	style = 'default',
	required = false,
	rhf = false,
	theme = 'dark',
	className,
	...rest
}: InputProps) {
	return rhf ? (
		<input
			required={required}
			placeholder={placeholder}
			className={`${s[style]} ${s.default} ${s[theme]}`}
			type={type}
			{...rest}
		/>
	) : (
		<input
			required={required}
			ref={rest.ref && rest.ref}
			style={{
				background: `${rest.bg && rest.bg}`,
				borderRadius: `${rest.rounded && rest.rounded}px`,
			}}
			className={clsx(s.default, s[style], s[theme], className)}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={rest.onChange}
		/>
	)
}
