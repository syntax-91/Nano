import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { currentChatDataStore } from '../../app/store/chatStore/currentChatDataStore'
import Msg from '../molecules/msg'

export interface IMsgsCurrentChatProps {
	roomID:string,
	endRef: React.RefObject<HTMLDivElement | null>
}
 
 function MsgsCurrentChat(
	{ roomID, endRef }:IMsgsCurrentChatProps
 ){


	useEffect(() => {
		if(!currentChatDataStore.loading){
			endRef.current?.scrollIntoView({ behavior: 'smooth' })
		}
	}, [currentChatDataStore.loading])

 
	return (
		<div className='p-5 w-[100%] h-[100%]    rounded-2xl relative'>
			{!currentChatDataStore.isFound && 
			<div className='w-[100%] h-[100%] flex justify-center items-center'>
				пусто
			</div>
			}

			{currentChatDataStore.loading == true &&
			<div className='w-[100px] h-[100px] '>
				Loading...	
			</div>}

				<div 
			className='relative top-0 left-0 bg-white/20 w-[90%] h-[100%] '/>

			
			{currentChatDataStore.isFound && 
			currentChatDataStore.msgs.map((msg, idx) => (
				
				<div key={idx} className='p-1'>
					<Msg 
					text={msg.text}
					msgID={msg.msgID}
					ava={msg.ava}
					who={msg.who}
					createAt={msg.createAt}
					/> 
				
				</div> 
			))} 

				
			<div ref={endRef} />
		</div>
		
	)
}

export default observer(MsgsCurrentChat)