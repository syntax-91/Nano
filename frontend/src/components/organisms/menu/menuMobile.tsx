import { observer } from 'mobx-react-lite'
import { isOpenStore } from '../../../app/store/isOpen/isOpenSettingsStore'


 function MenuMobile(){

	const handleClick = () => {
		isOpenStore.setIsOpen('menuMobile', false)
	}
 
	return (
		<div className='fixed top-0 left-0
		w-[300px] h-[100vh] bg-black/80 ltr z-10'
		onClick={ handleClick }>

		</div>
	)
}

export default observer(MenuMobile)