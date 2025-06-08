import { observer } from 'mobx-react-lite'
import { IoMdClose } from 'react-icons/io'
import { sharedStore } from '../../app/store/sharedStore'

 function HeaderSettings() {
	
	const handleClose = () => {
		sharedStore.setIsOpen(false)
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