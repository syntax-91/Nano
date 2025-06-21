import { observer } from 'mobx-react-lite'
import { isOpenStore } from '../../../../app/store/isOpen/isOpenSettingsStore'
import Ava from '../../../atoms/ava'
import { BackgroundProfile } from '../../../atoms/backgroundProfile'
import { Block } from '../../../atoms/block'

function MenuMobile() {
	const handleClick = () => {
		isOpenStore.setIsOpen('menuMobile', false)
	}

	const clsMC = 'fixed top-0 left-0 w-[80%] h-[100vh] bg-black/95 z-1 border border-white/10 fn-3  sm:w-[70%]'

	return (
	<div className={clsMC} onClick={handleClick}>
		<BackgroundProfile h={100} />

		<div className='w-25 h-25 mx-auto relative bottom-15 p-1 bg-black rounded-full'>
			<Ava ava='sss' />
		</div>

		<div className='bg-white/5 w-[80%] h-15 rounded-2xl mx-auto flex items-center px-5 text-[15px]'>
			<h2>settings</h2>
		</div>


	</div>
	)
}

export default observer(MenuMobile)
