import { observer } from 'mobx-react-lite'
import { CgProfile } from 'react-icons/cg'
import { CiLogout } from 'react-icons/ci'
import { FcAbout } from 'react-icons/fc'
import { IoMdSettings } from 'react-icons/io'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { configStore } from '../../../../app/store/app/configStore.ts'
import { isOpenStore } from '../../../../app/store/isOpen/isOpenSettingsStore'
import {
	handleLogOut,
	handleSettings,
} from '../../../../shared/utils/handlers/uiHandlers.ts'
import Ava from '../../../atoms/ava'
import { BackgroundProfile } from '../../../atoms/backgroundProfile'

function MenuMobile() {
	const handleClick = () => {
		isOpenStore.setIsOpen('menuMobile', false)
	}

	const toggleTheme = () => {
		configStore.toggleTheme()
	}

	const clsMC =
		'fixed top-0 left-0 w-[80%] h-[100vh] bg-black/95 z-1 border border-white/10 fn-3  sm:w-[70%]'

	return (
		<div className={clsMC} onClick={handleClick}>
			<BackgroundProfile h={100} />

			<div className='w-25 h-25 mx-auto relative bottom-15 p-1 bg-black rounded-full'>
				<Ava ava='sss' />
			</div>

			<div className='bg-white/5 w-[90%] h-15 rounded-2xl mx-auto flex items-center px-5 text-[15px] gap-2 mb-1'>
				<CgProfile size={25} />
				<h2>profile</h2>
			</div>

			<div
				onClick={handleSettings}
				className='bg-white/5 w-[90%] h-15 rounded-2xl mx-auto flex items-center px-5 text-[15px] gap-2'
			>
				<IoMdSettings size={25} />
				<h2>settings</h2>
			</div>

			<div
				onClick={toggleTheme}
				className='bg-white/5 w-[90%] h-15 rounded-2xl mx-auto flex items-center px-5 text-[15px] gap-2 my-1'
			>
				{configStore.currentTheme == 'dark' && <MdDarkMode size={25} />}

				{configStore.currentTheme == 'light' && <MdLightMode size={25} />}

				<h2>{configStore.currentTheme}</h2>
			</div>

			<div className='bg-white/5 w-[90%] h-15 rounded-2xl mx-auto flex items-center px-5 text-[15px] gap-2 my-1'>
				<FcAbout size={25} />
				<h2>about</h2>
			</div>

			<div
				className='bg-white/5 w-[90%] h-15 rounded-2xl mx-auto flex items-center px-5 text-[15px] mt-1 active:bg-white/10 gap-2'
				onClick={handleLogOut}
			>
				<CiLogout size={25} />
				<h2>LogOut</h2>
			</div>
		</div>
	)
}

export default observer(MenuMobile)
