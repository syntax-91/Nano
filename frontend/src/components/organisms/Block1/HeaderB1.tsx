import { observer } from 'mobx-react-lite'
import { IoIosMenu } from 'react-icons/io'
import { useMediaQuery } from 'react-responsive'
import { isOpenStore } from '../../../app/store/isOpen/isOpenSettingsStore'
import { SearchMenu } from '../../molecules/SearchHeader'

 function HeaderB1(){
 

	const isMobile = useMediaQuery({ maxWidth: 700 })

	const handleClickMobileMenuIcon = () => {
		if(!isOpenStore.isOpenMap.menuMobile){
			isOpenStore.setIsOpen('menuMobile', true)
		} else {
			isOpenStore.setIsOpen('menuMobile', false)
		}
	}

	const handleClickDesktopMenuIcon = () => {
		if(!isOpenStore.isOpenMap.menuDesktop){
			isOpenStore.setIsOpen('menuDesktop', true)
		} else {
			isOpenStore.setIsOpen('menuDesktop', false)
		}
	}

	return (
		<div className='flex items-center mt-5 justify-between w-[100%] ttb-jump'>
			 			{/* mobile - MenuIcon */}
			 {isMobile &&
			 <div 
			 className={`
				${isOpenStore.isOpenMap.menuMobile ? 'rotate-180' : 'rotate-0'} cursor-pointer relative tr2 inline-flex`}
 
			 	onClick={ handleClickMobileMenuIcon }>
					<IoIosMenu color='#fff' size={30} />
			 </div>
			 }

			 			{/* desktop - MenuIcon */}
			{!isMobile && 
			 <div 
			 className={`
				${isOpenStore.isOpenMap.menuDesktop ? 'rotate-180' : 'rotate-0'} cursor-pointer relative inline-flex tr2
				`}

			 	onClick={ handleClickDesktopMenuIcon }>
					<IoIosMenu color='#fff' size={30} />
			 </div>}

			 <SearchMenu />


		</div>
	)
}

export default observer(HeaderB1)