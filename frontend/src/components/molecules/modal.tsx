import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { IoCloseOutline } from 'react-icons/io5'
import { modalStore } from '../../app/store'
import { handleCloseModal } from '../../shared/utils/handlers/uiHandlers'

function Modal() {
	const mCls = 'fixed top-0 left-8 w-[100vw] flex  mt-10 ltr-jump_ot z-10'

	const cls =
		'bg-[#000] shw_ px-20 py-5 rounded-2xl font-normal text-[14px] flex justify-between'

	return (
		<div className={mCls}>
			<div className={clsx(cls)}>
				<p>{modalStore.msg || 'text not found'}</p>

				<IoCloseOutline
					size={20}
					className='ml-auto cp h_rltr'
					onClick={handleCloseModal}
				/>
			</div>
		</div>
	)
}

export default observer(Modal)
