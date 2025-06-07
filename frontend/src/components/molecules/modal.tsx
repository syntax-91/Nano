import type { IModalProps } from '../../shared/types/types'

export function Modal({ msg = 'message', success = false }: IModalProps) {

	const mCls = 'fixed top-0 left-10 w-[100vw] flex  mt-10 ltr-jump';

	const cls = 'bg-[#000] px-20 py-5 rounded-2xl'

	return (
	<div className={mCls}>
			
		<div className={cls}>
			<p>{msg || 'text not found' }</p> 	
		</div>
		 
	</div>
	)
}
