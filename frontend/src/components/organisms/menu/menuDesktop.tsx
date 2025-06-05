import { observer } from 'mobx-react-lite'
import { isOpenMenuDesktop } from '../../../app/store/isOpenMenu/isOpenMenuDesktop'

 function MenuDesktop(){

	const handleClick = () => {
		isOpenMenuDesktop.close()
	}

	return (
		<div className='absolute top-20
		w-[300px] h-[100px] bg-white/30'
		onClick={ handleClick }>

		</div>
	)
}

export default observer(MenuDesktop)