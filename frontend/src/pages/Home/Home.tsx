import { observer } from 'mobx-react-lite'
import { lazy, Suspense, useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import { userDataStore } from '../../app/store/app/userData'

import { currentChatDataStore } from '../../app/store/chatStore/currentChatDataStore'
import { isOpenStore } from '../../app/store/isOpen/isOpenSettingsStore'
import { sharedStore } from '../../app/store/shared/sharedStore'
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
		className={`w-[100%]  h-[100vh] flex fixed_
		 ${sharedStore.currentTheme} gap-0 items-center`}
		>

			{/* Block 1 */}
		<div className='w-[100%] sm:w-[400px] '>
			<Block1 />
		</div>

			{/* settings */}
		{isOpenStore.isOpenMap.settings && 
		<Suspense fallback={<GlobalLoader />}>
			<SettingsLazy />
		</Suspense> }
 
		{/* currentChat для Desktop'а */}
		{!isMobile && 
		<div className='relative w-full justify-center items-center bg-red-00'> 
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