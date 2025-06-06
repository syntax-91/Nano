import { observer } from 'mobx-react-lite'
import { useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import { userDataStore } from '../../app/store/userData'

import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'
import { themeStore } from '../../app/store/theme'
import Block1 from '../../components/organisms/Block1/Block1'
import CurrentChat from '../../components/organisms/currentChat/currentChat'

function Home(){

	const nav = useNavigate();
	const isMobile = useMediaQuery({maxWidth: 700})

	useLayoutEffect(() => {
			if(!userDataStore.isAuth){
				nav('/login');
			}
	}, [])

 
	return (
		<div 
		className={`w-[100%] h-[100vh] flex cursor-pointer fn-5 bg-red-00 fixed ${themeStore.currentTheme}`}
		>
 
		<div className='w-[90%] mx-auto md:w-[300px] md:ml-10'>
			<Block1 />
		</div>

		{/* currentChat для Desktop'а */}
		{!isMobile && 
		<div className='relative w-full'> 
			<CurrentChat 
			typeDevice='desktop' />
		</div>
		}

		{isMobile && currentChatDataStore.selectedCurrentChat && 
		<CurrentChat 
		typeDevice='mobile' />}
 
		</div>  
	)
}

export default observer(Home);