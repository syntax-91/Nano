import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { configStore } from '../../../../app/store/app/configStore'
import { isOpenStore } from '../../../../app/store/isOpen/isOpenSettingsStore'
import { logOutU } from '../../../../shared/utils/LogOut'
import { LTR_anim } from '../../../animations/lr'

function MenuDesktop() {
	const handleSettings = () => {
		isOpenStore.setIsOpen('settings', true)
	}

	const handleClick = () => {
		isOpenStore.setIsOpen('menuDesktop', false)
	}

	const toggleTheme = () => {
		configStore.toggleTheme()
	}

	const handleLogOut = () => {
		logOutU()
	}

	const ltr_ = LTR_anim()

	const clsC =
		'absolute top-25 px-15 rounded-2xl z-10 ltr-jump_of_ cursor-pointer shw bg-blur5'

	return (
		<div
			ref={ltr_}
			className={clsx(clsC, `menuDesktop_${configStore.currentTheme}_2`)}
			onClick={handleClick}
		>
			<div
				className='flex justify-center 
 		py-4 px-6 hover:bg-white/5 rounded-2xl font-light text-2xl'
			>
				<h3>profile</h3>
			</div>

			<div
				className='flex justify-center 
 		py-3  hover:bg-white/5 rounded-2xl font-light text-2xl'
				onClick={handleSettings}
			>
				<h3>settings</h3>
			</div>

			<div
				className='flex justify-center 
 		py-3  hover:bg-white/5 rounded-2xl font-light text-2xl'
			>
				<h3>about</h3>
			</div>

			<div
				className='flex justify-center 
 		py-3  hover:bg-white/5 rounded-2xl font-light text-2xl'
				onClick={toggleTheme}
			>
				<h3>{configStore.currentTheme} mode</h3>
			</div>

			<div
				className='flex justify-center 
 			py-4  hover:bg-white/5 rounded-2xl font-light text-2xl'
				onClick={handleLogOut}
			>
				<h3>logOut</h3>
			</div>
		</div>
	)
}

export default observer(MenuDesktop)
