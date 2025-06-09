import { observer } from 'mobx-react-lite'
import { lazy, Suspense, useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import { userDataStore } from '../../app/store/userData'

import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'
import { sharedStore } from '../../app/store/sharedStore'
import { themeStore } from '../../app/store/theme'
import GlobalLoader from '../../components/atoms/globalLoader'
import Block1 from '../../components/organisms/Block1/Block1'
import CurrentChat from '../../components/organisms/currentChat/currentChat'

function Home(){

	const nav = useNavigate();
	
	const isMobile = useMediaQuery({maxWidth: 700})

	const SettingsLazy = 
	lazy(() => import('./../../components/organisms/Settings/Settings') )

	useLayoutEffect(() => {
			if(!userDataStore.isAuth){
				nav('/login');
			}
	}, [])

 
	return (
		<div 
		className={` w-[100%]  h-[100vh] flex fixed
		 ${themeStore.currentTheme} gap-1`}
		>

			{/* Block 1 */}
		<div className='w-[95%] sm:w-[400px] '>
			<Block1 />
		</div>

			{/* settings */}
		{sharedStore.isOpen && 
		<Suspense fallback={<GlobalLoader />}>
			<SettingsLazy />
		</Suspense> }
 
		{/* currentChat для Desktop'а */}
		{!isMobile && 
		<div className='relative w-full justify-center items-center bg-red-90'> 
			<CurrentChat 
			typeDevice='desktop' />
		</div>
		}

		{/* currentChat mobile */}
		{isMobile && 
		currentChatDataStore.selectedCurrentChat && 
			<div className=''>
				<CurrentChat 
				typeDevice='mobile'
			/>
		</div> }
 
		</div>  
	)
}

export default observer(Home);