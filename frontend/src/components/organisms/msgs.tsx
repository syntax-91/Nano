import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'
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
		<div className='p-5 w-[100%] h-[100%]  mt-3  rounded-2xl'>
			{!currentChatDataStore.isFound && 
			<div>
				пусто
			</div>
			}
			
			{currentChatDataStore.isFound && 
			currentChatDataStore.msgs.map((msg, idx) => (
				
				<div key={idx} className=''>
					<Msg 
					text={msg.text}
					msgID={msg.msgID}
					ava={msg.ava}
					who={msg.who}
					/> 
				
				</div> 
			))} 

				
			<div ref={endRef} />
		</div>
		
	)
}

export default observer(MsgsCurrentChat)