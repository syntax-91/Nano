import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import socket from '../../../app/socket/socket'
import { currentChatDataStore } from '../../../app/store/CurrentChat/currentChatDataStore'
import type { IMsgProps } from '../../../shared/types/types'
import HeaderCurrentChat from '../../molecules/heaaderCurrentChat'
import MsgsCurrentChat from '../msgs'
import SendMsg from '../sendMsg'

type TMsg = {
	text: string,
	who: string,
	roomID: string,
}

interface ICurrentChatsProps {
	typeDevice: 'mobile'|'desktop'
}

 function CurrentChat({typeDevice}:ICurrentChatsProps) {

	const currentChat_stylesDesktop = 
	'w-[100%] h-[100vh] fn flex justify-center items-center '

	const currentChat_stylesMobile = 'w-[100%] h-[100%] ltr fixed top-0 left-0 bg-black/95 flex justify-center delay-1000 overflow-y-auto'
 

 
	useEffect(() => {

		console.log('useEffect сработал!')

		socket.on('connect', () => {
			console.log('Connected HUIIII socket zaibal')
		}) 

		const handleMsg = (msg: IMsgProps) => {
			console.log('привет новое сообщение: ', msg)
			currentChatDataStore.setMsg(msg)
		}

		socket.on('msg', handleMsg)
		socket.emit('joinRoom', currentChatDataStore.roomID)

     
		return () => {
			console.log('unmount useEffect currentChat')
			socket.off('msg', handleMsg)
		}
	}, [currentChatDataStore.roomID])


	return (
		<div>
		<div className={`
			${typeDevice == 'desktop' &&currentChat_stylesDesktop} 
			
			${typeDevice == 'mobile' && currentChat_stylesMobile } 
		 `}>

		{!currentChatDataStore.selectedCurrentChat && 
		<div className='bg-white/8 px-5 py-3 rounded-2xl'
		>для начала общение нажмите чат!</div>}

		{currentChatDataStore.selectedCurrentChat && 
		<div className='w-[100%] relative h-full flex flex-col'>
			<HeaderCurrentChat />
			
			<div className='max-h-full  flex-1 overflow-y-auto'>
				<div className='pb-20'>
					<MsgsCurrentChat  
					roomID={currentChatDataStore.roomID} /> 
				</div>
			</div>

			<div className='w-[100%] h-20
			absolute bottom-[-10px] '>
				<SendMsg roomID={currentChatDataStore.roomID} />
			</div>

		</div>}


		</div>

		

		</div>
	)
}

export default observer(CurrentChat)