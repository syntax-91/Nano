import type { IModalProps } from '../../shared/types/types'
import s from './../../shared/styles/modalStyless.module.css'

export function Modal({ msg = 'message', success = false }: IModalProps) {
	return (
		<div
			className={`w-[200px] h-[50px] fixed 
			top-[20px] left-[20px] border rounded-2xl 
			border-[#828282] ltr || flex justify-center items-center ${
				s[success ? 'info' : 'error']
			}`}
		>
			<p>{msg}</p>
		</div>
	)
}
