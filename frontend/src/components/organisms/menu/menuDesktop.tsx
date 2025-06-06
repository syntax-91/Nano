import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { routesConfig } from '../../../app/config/routesConfig'
import { isOpenMenuDesktop } from '../../../app/store/isOpenMenu/isOpenMenuDesktop'
import { themeStore } from '../../../app/store/theme'

 function MenuDesktop(){

	const n = useNavigate();

	const handleSettings = () => {
		n(routesConfig.settings.path)
	}

	const handleClick = () => {
		isOpenMenuDesktop.close()
	}

	const toggleTheme = () => {
		themeStore.toggleTheme()
	}

	const cls = 'absolute top-20 w-[200px] bg-black/80 rounded-2xl z-10 ttb-jump'

	return (
	<div className={clsx(cls, `menuDesktop_${themeStore.currentTheme}` )}
	onClick={ handleClick }>

		<div className='flex justify-center 
 		py-4  hover:bg-white/10 rounded-t-2xl'>
			<h3>profile</h3>
		</div>

		<div className='flex justify-center  bg-white/1
 		py-4  hover:bg-white/10'
		onClick={handleSettings}>
			<h3>settings</h3>
		</div>

		<div className='flex justify-center bg-white/1
 		py-4  hover:bg-white/10'>
			<h3>about</h3>
		</div>

		<div className='flex justify-center  bg-white/1
 		py-4  hover:bg-white/10' 
		onClick={toggleTheme}>
			<h3>{themeStore.currentTheme} mode</h3>
		</div>

		<div className='flex justify-center  bg-white/1
 		py-4  hover:bg-white/10'>
			<h3>logOut</h3>
		</div>



	</div>
	)
}

export default observer(MenuDesktop)