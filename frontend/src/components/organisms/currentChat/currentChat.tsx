import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import socket from '../../../app/socket/socket'
import { currentChatDataStore } from '../../../app/store/CurrentChat/currentChatDataStore'
import { themeStore } from '../../../app/store/theme'
import type { IMsgProps } from '../../../shared/types/types'
import { Loader } from '../../atoms/Loader'
import HeaderCurrentChat from '../../molecules/heaaderCurrentChat'
import SendMsg from '../sendMsg'
import MsgsCurrentChat from './../msgs'

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
	'w-[100%] h-[90vh] px-5 m-2 rounded-2xl flex justify-center items-center'

	const currentChat_stylesMobile = 'w-[100%] h-[100%] ltr fixed top-0 left-0 bg-black/95 flex justify-center delay-1000 overflow-y-auto rel'
 
	const endRef = useRef<HTMLDivElement | null>(null)
 
	useEffect(() => {

		console.log('useEffect сработал!')

		socket.on('connect', () => {
			console.log('connected socket')
		}) 

		const handleMsg = (msg: IMsgProps) => {
			currentChatDataStore.setMsg(msg)
		}
 
		socket.on('msg', handleMsg)
		socket.emit('joinRoom', currentChatDataStore.roomID)
		
		
		return () => {
			console.log('unmount useEffect currentChat')
			socket.off('msg', handleMsg)
		}
	}, [currentChatDataStore.roomID]
)

	console.info('loading: ', currentChatDataStore.loading)
 
	const cls = 'px-5 py-3 rounded-2xl'

	return (
		<div>
		<div className={`
			${typeDevice == 'desktop' &&currentChat_stylesDesktop} 
			
			${typeDevice == 'mobile' && currentChat_stylesMobile } 
		 `}>

		{!currentChatDataStore.selectedCurrentChat && 
		<div className={clsx(cls, 
			themeStore.currentTheme === 'dark' && 'bg-white/5',
			themeStore.currentTheme === 'light' && 'bg-black/80 text-[#fbf4f4]'
		)}

		>для начала общение нажмите чат!</div>}

		{currentChatDataStore.loading == true && 
			<div 
			className='w-[100%] h-[100vh] absolute left-0 top-0 z-10 flex justify-center items-center bg-[#111]'
			>
				<Loader />
			</div>
		}
	
	
		{currentChatDataStore.selectedCurrentChat && 
		<div className='w-[90%] md:w-[100%] relative h-[100%] flex justify-center items-center flex-col mt-[25px] md:mt-0'>
			<HeaderCurrentChat />
			 
			<div className='w-[100%] h-[100%] md:border 
			border-[#5846ab]  rounded-2xl mx-auto my-4 overflow-y-auto'>
				<div className='pb-20'>
					<MsgsCurrentChat
					roomID={currentChatDataStore.roomID} 
					endRef={endRef}/> 
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