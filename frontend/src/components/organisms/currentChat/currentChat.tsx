import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import socket from '../../../app/socket/socket'
import { currentChatDataStore } from '../../../app/store/chatStore/currentChatDataStore'
import { handleKeyDownCurrentChat, handleNewMsg } from '../../../shared/utils/handlers/uiHandlers'
import HeaderCurrentChat from '../../molecules/heaaderCurrentChat'
import { NotSelectedChat } from '../../molecules/notSelectedChat'
import { ScreenLoaderMsgs } from '../screen/Loaders/msgsScreenLoader'
import SendMsg from '../sendMsg'
import s from './../../../shared/styles/currentChatStyles.module.css'
import MsgsCurrentChat from './../msgs'
import { clsCurrentChat, clsMsgsC } from './cls'

interface ICurrentChatsProps {
	typeDevice: 'mobile'|'desktop'
}

 function CurrentChat({typeDevice}:ICurrentChatsProps) {

//	const notification = new Audio('./../../../assets/notification.mp3')

	

	
 
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
 

	return ( 
	<div className={`
			${typeDevice == 'desktop' && s.desktop} 
			
			${typeDevice == 'mobile' && s.mobile } 
		 `}>

		{!currentChatDataStore.selectedCurrentChat && 
		<NotSelectedChat />} 
	
		{currentChatDataStore.selectedCurrentChat === true && 

		<div className={clsCurrentChat}>
			<HeaderCurrentChat />
			 
			<div className={clsMsgsC}>
				{!currentChatDataStore.loading &&
					<MsgsCurrentChat
					roomID={currentChatDataStore.roomID} 
					endRef={endRef}/> 	
				}

				{currentChatDataStore.loading &&
					currentChatDataStore.isFound &&
					<div className='w-[100%] h-[100%]  absolute top-0'>
						<ScreenLoaderMsgs />
					</div>}
			</div>

			<div className='w-[100%]'>
				<SendMsg 
				roomID={currentChatDataStore.roomID} 
				endRef={endRef} />
			</div>
		</div>}

	</div>
	)
}

export default observer(CurrentChat)