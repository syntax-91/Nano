import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { CgProfile } from 'react-icons/cg'
import { CiLogout } from 'react-icons/ci'
import { FcAbout } from 'react-icons/fc'
import { MdDarkMode, MdLightMode, MdSettings } from 'react-icons/md'
import { configStore } from '../../../../app/store/app/configStore'
import { isOpenStore } from '../../../../app/store/isOpen/isOpenSettingsStore'
import { handleSettings } from '../../../../shared/utils/handlers/uiHandlers'
import { logOutU } from '../../../../shared/utils/LogOut'
import { LTR_anim } from '../../../animations/lr'

function MenuDesktop() {
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
		'absolute top-25 px-10 rounded-2xl z-10 ltr-jump_of_ cursor-pointer shw bbd'

	return (
		<div
			ref={ltr_}
			className={clsx(clsC, `menuDesktop_${configStore.currentTheme}_2`)}
			onClick={handleClick}
		>
			<div
				className='flex justify-center px-5
 				py-3 hover:bg-white/5 rounded-2xl font-light text-2xl items-center gap-2'
			>
				<CgProfile size={20} />
				<h3>profile</h3>
			</div>

			<div
				className='flex justify-center 
 				py-3  hover:bg-white/5 rounded-2xl font-light text-2xl items-center gap-1'
				onClick={handleSettings}
			>
				<MdSettings size={20} />
				<h3>settings</h3>
			</div>

			<div
				className='flex justify-center
 				py-3  hover:bg-white/5 rounded-2xl font-light text-2xl items-center gap-1'
			>
				<FcAbout size={20} />
				<h3>about</h3>
			</div>

			<div
				className='flex justify-center
 				py-3  hover:bg-white/5 rounded-2xl font-light text-2xl items-center gap-1'
				onClick={toggleTheme}
			>
				{configStore.currentTheme == 'dark' && <MdDarkMode size={20} />}

				{configStore.currentTheme == 'light' && <MdLightMode size={20} />}

				<h2>{configStore.currentTheme}</h2>
			</div>

			<div
				className='flex 
 				py-4  hover:bg-white/5 rounded-2xl justify-center font-light text-2xl items-center gap-1'
				onClick={handleLogOut}
			>
				<CiLogout size={20} />
				<h3>logOut</h3>
			</div>
		</div>
	)
}

export default observer(MenuDesktop)
