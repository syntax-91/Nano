import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { configStore } from '../../app/store/app/configStore'
import { isOpenStore } from '../../app/store/isOpen/isOpenSettingsStore'

function HeaderSettings() {
	const handleClose = () => {
		isOpenStore.setIsOpen('settings', false)
	}

	return (
		<div
			className={clsx(
				'flex justify-center items-center relative rounded-2xl',
				configStore.currentTheme == 'dark' ? 'bbd' : 'bbl'
			)}
		>
			<p onClick={handleClose} className='absolute left-10  cp'>
				назад
			</p>

			<h2 className='text-center mt-7 font-bold text-2xl'>Settings</h2>

			{/* <IoMdClose
			color='#fff' 
			className='absolute right-10 cursor-pointer rltr' 
			onClick={handleClose}
			size={20}
		/>*/}
		</div>
	)
}

export default observer(HeaderSettings)
