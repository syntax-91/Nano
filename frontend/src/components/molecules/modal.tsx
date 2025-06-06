import type { IModalProps } from '../../shared/types/types'

export function Modal({ msg = 'message', success = false }: IModalProps) {

	const mcls = 'fixed top-0 left-0 w-[100vw] flex justify-center mt-10 ttb';


	return (
	<div className={mcls}>
			
		<p>{msg || 'text not found' }</p> 	
		
	</div>
	)
}
