import clsx from 'clsx'
import { modalStore } from '../../../app/store'
import { configStore } from '../../../app/store/app/configStore'
import { isOpenStore } from '../../../app/store/isOpen/isOpenSettingsStore'

export default function Test() {
	const handleClose = () => {
		isOpenStore.setIsOpen('test', false)
	}

	const clsMC =
		'MC fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center    bg-black/20 z-10'

	const clsC = 'C md:w-[600px] md:h-[300px] borderP rounded-2xl ltr flex'

	const handleModal = () => {
		modalStore.run('test', true, 5000)
	}

	return (
		<div onClick={handleClose} className={clsMC}>
			<div
				className={clsx(
					clsC,
					configStore.currentTheme == 'dark' ? 'bbd' : 'bbl'
				)}
			>
				{/* modal */}
				<div
					onClick={handleModal}
					className='h-10 borderP  flex justify-center items-center p-5 rounded-2xl mx-auto my-10 hover:bg-white/5 cp'
				>
					<h2 className=''>openModal</h2>
				</div>
			</div>
		</div>
	)
}
