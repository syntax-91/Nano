import { observer } from 'mobx-react-lite'
import { isOpenMenuDesktop } from '../../../app/store/isOpenMenu/isOpenMenuDesktop'

 function MenuDesktop(){

	const handleClick = () => {
		isOpenMenuDesktop.close()
	}

	return (
		<div className='absolute top-20
		w-[200px] h-[220px] bg-black/80
		rounded-2xl z-10 ttb-jump'
		onClick={ handleClick }>

		</div>
	)
}

export default observer(MenuDesktop)