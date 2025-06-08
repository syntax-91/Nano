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
		className={`md:w-[90%] w-[100%]  h-[100vh] flex 
			justify-center md:mx-auto items-center ${themeStore.currentTheme} gap-8`}
		>
 
		<div className='w-[95%]  md:w-[400px] md:ml-10 '>
			<Block1 />
		</div>

		{/* currentChat для Desktop'а */}
		{!isMobile && 
		<div className='relative w-full justify-center items-center'> 
			<CurrentChat 
			typeDevice='desktop' />
		</div>
		}

		{isMobile && 
		currentChatDataStore.selectedCurrentChat && 
		<div className='bg-red-900'>
			<CurrentChat 
			typeDevice='mobile'
			/>
		</div> }
 
		</div>  
	)
}

export default observer(Home);