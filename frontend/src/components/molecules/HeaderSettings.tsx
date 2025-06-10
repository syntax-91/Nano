import { observer } from 'mobx-react-lite'
import { IoMdClose } from 'react-icons/io'
import { isOpenStore } from '../../app/store/isOpen/isOpenSettingsStore'

 function HeaderSettings() {
	
	const handleClose = () => {
		isOpenStore.setIsOpen('settings',false)
	}

	return (
		<div className='flex justify-center items-center relative'>
			<h2 className='text-center mt-7 font-bold text-2xl'>Settings</h2>

		<IoMdClose
		color='#fff' 
		className='absolute right-10 top-5 cursor-pointer' 
		onClick={handleClose}
		size={20}/>
		</div>
	)
}

export default observer(HeaderSettings)