import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { isOpenMenuDesktop } from '../../../app/store/isOpenMenu/isOpenMenuDesktop'
import { sharedStore } from '../../../app/store/sharedStore'
import { themeStore } from '../../../app/store/theme'
import { logOutU } from '../../../shared/utils/LogOut'

 function MenuDesktop(){

	const n = useNavigate();

	const handleSettings = () => {
		sharedStore.setIsOpen(true)
	}

	const handleClick = () => {
		isOpenMenuDesktop.close() 
	} 
 
	const toggleTheme = () => {
		themeStore.toggleTheme()
	}

	const handleLogOut = () => {
		logOutU()
	}

	const cls = 'absolute top-20 w-[200px]      bg-[#050505] shw rounded-2xl z-10 ttb-jump cursor-pointer'

	return (
	<div className={clsx(cls, `menuDesktop_${themeStore.currentTheme}` )}
	onClick={ handleClick }>

		<div className='flex justify-center 
 		py-5  hover:bg-white/5 rounded-t-2xl font-light text-2xl'>
			<h3>profile</h3>
		</div>

		<div className='flex justify-center 
 		py-5  hover:bg-white/5 rounded-t-2xl font-light text-2xl'
		onClick={handleSettings}>
			<h3>settings</h3>
		</div>

		<div className='flex justify-center 
 		py-5  hover:bg-white/5 rounded-t-2xl font-light text-2xl'>
			<h3>about</h3>
		</div>

		<div className='flex justify-center 
 		py-5  hover:bg-white/5 rounded-t-2xl font-light text-2xl'
		onClick={toggleTheme}>
			<h3>{themeStore.currentTheme} mode</h3>
		</div>

		<div className='flex justify-center 
 		py-5  hover:bg-white/5 rounded-t-2xl font-light text-2xl'
		onClick={handleLogOut}>
			<h3>logOut</h3>
		</div>



	</div>
	)
}

export default observer(MenuDesktop)