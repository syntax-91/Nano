import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import socket from '../../../app/socket/socket'
import { currentChatDataStore } from '../../../app/store/chatStore/currentChatDataStore'
import { sharedStore } from '../../../app/store/shared/sharedStore'
import { handleKeyDownCurrentChat, handleNewMsg } from '../../../shared/utils/handlers/uiHandlers'
import HeaderCurrentChat from '../../molecules/heaaderCurrentChat'
import { ScreenLoaderMsgs } from '../screen/Loaders/msgsScreenLoader'
import SendMsg from '../sendMsg'
import MsgsCurrentChat from './../msgs'


interface ICurrentChatsProps {
	typeDevice: 'mobile'|'desktop'
}

 function CurrentChat({typeDevice}:ICurrentChatsProps) {

//	const notification = new Audio('./../../../assets/notification.mp3')

	const currentChat_stylesDesktop = 
	' h-[99vh] px-3.5 rounded-2xl flex justify-center items-center tr6'  

	const currentChat_stylesMobile = 'w-[100%] h-[100%] ltr fixed top-0 left-0 bg-black/95 flex justify-center delay-1000 overflow-y-auto rel'
 
	const endRef = useRef<HTMLDivElement | null>(null) 

 
	useEffect(() => {

		socket.on('connect', () => {
			console.log('connected socket')
		}) 
 
		socket.on('msg', handleNewMsg)
		
		socket.emit('joinRoom', currentChatDataStore.roomID)
		
		return () => {
			socket.off('msg', handleNewMsg)
		}
	}, [currentChatDataStore.roomID]
)

	useEffect(() => {
		document.addEventListener(
			'keydown', 
			handleKeyDownCurrentChat
		)

		return () => {
			document.removeEventListener(
				'keydown',
				handleKeyDownCurrentChat
			)
		}
	}, [])
 
	const cls = 'px-5 py-3 rounded-2xl relative z-9'

	return ( 
		<div>
		<div className={`
			${typeDevice == 'desktop' &&currentChat_stylesDesktop} 
			
			${typeDevice == 'mobile' && currentChat_stylesMobile } 
		 `}>

		{!currentChatDataStore.selectedCurrentChat && 
		<div className={clsx(cls, 
			sharedStore.currentTheme === 'dark' && 'bg-white/5',
			sharedStore.currentTheme === 'light' && 'bg-black/80 text-[#fbf4f4]'
		)}

		>для начала общение нажмите чат!</div>}
	
	
		{currentChatDataStore.selectedCurrentChat === true && 

		<div className='h-[99%] flex justify-center items-center flex-col mt-[25px] md:mt-0 ltr w-[100%] '>
			<HeaderCurrentChat />
			 
			<div className={`w-[100%] h-[100%] md:border 
			border-[#2a3367]  rounded-2xl mx-auto my-3 overflow-y-auto relative`}>
				<div className=''>

			{!currentChatDataStore.loading &&
				<MsgsCurrentChat
				roomID={currentChatDataStore.roomID} 
				endRef={endRef}/> 	
			}

				{currentChatDataStore.loading &&
				 currentChatDataStore.isFound &&
				<div
					className='w-[100%] h-[100%]  absolute top-0'>
				
					<ScreenLoaderMsgs />
						
				</div>}			

				</div>
			</div>



			<div className='w-[100%] h-20'>
				<SendMsg 
				roomID={currentChatDataStore.roomID} 
				endRef={endRef} />
			</div>

		</div>}

		</div>

		</div>
	)
}

export default observer(CurrentChat)