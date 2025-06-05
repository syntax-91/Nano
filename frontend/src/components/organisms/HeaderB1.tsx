import { observer } from 'mobx-react-lite'
import { IoIosMenu } from 'react-icons/io'
import { useMediaQuery } from 'react-responsive'
import { isOpenMenuDesktop } from '../../app/store/isOpenMenu/isOpenMenuDesktop'
import { isOpenMenuMobile } from '../../app/store/isOpenMenu/isOpenMenuMobile'
import { SearchMenu } from '../molecules/SearchHeader'

 function HeaderB1(){
 

	const isMobile = useMediaQuery({ maxWidth: 700 })

	const handleClickMobileMenuIcon = () => {
		if(!isOpenMenuMobile.isOpenMenuMobile){
			isOpenMenuMobile.open()
		} else {
			isOpenMenuMobile.close()
		}
	}

	const handleClickDesktopMenuIcon = () => {
		if(!isOpenMenuDesktop.isOpenMenuDesktop){
			isOpenMenuDesktop.open()			
		} else {
			isOpenMenuDesktop.close()
		}
	}

	return (
		<div className='flex  items-center mt-5 justify-between w-[100%] ttb-jump'>
			 			{/* mobile - MenuIcon */}
			 {isMobile &&
			 <div 
			 className={`
				${isOpenMenuMobile.isOpenMenuMobile ? 'rotate-180' : 'rotate-0'} cursor-pointer relative inline-flex`}
 
			 	onClick={ handleClickMobileMenuIcon }>
					<IoIosMenu color='#fff' size={30} />
			 </div>
			 }

			 			{/* desktop - MenuIcon */}
			{!isMobile && 
			 <div 
			 className={`
				${isOpenMenuDesktop.isOpenMenuDesktop ? 'rotate-180' : 'rotate-0'} cursor-pointer relative inline-flex
				`}

			 	onClick={ handleClickDesktopMenuIcon }>
					<IoIosMenu color='#fff' size={30} />
			 </div>}

			 <SearchMenu />


		</div>
	)
}

export default observer(HeaderB1)