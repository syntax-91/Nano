import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { isOpenStore } from '../../../../app/store/isOpen/isOpenSettingsStore'
import { sharedStore } from '../../../../app/store/shared/sharedStore'
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
		sharedStore.toggleTheme()
	}

	const handleLogOut = () => {
		logOutU()
	}

	const ltr_jump = LTR_anim()

	const clsC =
		'absolute top-25 w-[200px] bg-[#050505] rounded-2xl z-10 ltr-jump_of_ cursor-pointer  shw'

	return (
		<div
			ref={ltr_jump}
			className={clsx(clsC, `menuDesktop_${sharedStore.currentTheme}`)}
			onClick={handleClick}
		>
			<div
				className='flex justify-center 
 		py-3  hover:bg-white/5 rounded-2xl font-light text-2xl'
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
				<h3>{sharedStore.currentTheme} mode</h3>
			</div>

			<div
				className='flex justify-center 
 			py-3  hover:bg-white/5 rounded-2xl font-light text-2xl'
				onClick={handleLogOut}
			>
				<h3>logOut</h3>
			</div>
		</div>
	)
}

export default observer(MenuDesktop)
