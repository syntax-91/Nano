import { observer } from 'mobx-react-lite'
import { modalStore } from '../../app/store'


 function Modal() {

	const mCls = 'fixed top-0 left-10 w-[100vw] flex  mt-10 ltr-jump_ot z-10';

	const cls = 'bg-[#000] shw px-20 py-5 rounded-2xl'

	return (
	<div className={mCls}>
			
		<div className={cls}>
			<p>{modalStore.msg || 'text not found' }</p> 	
		</div>
		 
	</div>
	)
}

export default observer(Modal)