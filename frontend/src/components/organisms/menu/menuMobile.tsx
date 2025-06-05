import { observer } from 'mobx-react-lite'
import { isOpenMenuMobile } from '../../../app/store/isOpenMenu/isOpenMenuMobile'

 function MenuMobile(){

	const handleClick = () => {
		isOpenMenuMobile.close() 
	}
 
	return (
		<div className='fixed top-0 left-0
		w-[300px] h-[100vh] bg-white/20 ltr'
		onClick={ handleClick }>

		</div>
	)
}

export default observer(MenuMobile)