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
	'w-[100%] h-[88%] fn flex justify-center items-center'

	const currentChat_stylesMobile = 'w-[100%] h-[100%] ltr fixed top-0 left-0 bg-black/99'
 

 
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
		<div className={`
			${typeDevice == 'desktop' &&currentChat_stylesDesktop} 
			
			${typeDevice == 'mobile' && currentChat_stylesMobile } 
		 `}>

		{!currentChatDataStore.selectedCurrentChat && 
		<div className='bg-white/8 px-5 py-3 rounded-2xl'
		>для начала общение нажмите чат!</div>}

		{currentChatDataStore.selectedCurrentChat && 
		<div className='w-[95%] h-[100%] rounded-2xl'>
			<HeaderCurrentChat />
			
			<div className='h-[100%] overflow-y-auto'>
				<MsgsCurrentChat  
				roomID={currentChatDataStore.roomID} /> 
			</div>

			<SendMsg roomID={currentChatDataStore.roomID} />

		</div>}
  
		</div>
	)
}

export default observer(CurrentChat)