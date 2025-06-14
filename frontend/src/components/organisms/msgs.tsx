import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { currentChatDataStore } from '../../app/store/chatStore/currentChatDataStore'
import { ScrollBtn } from '../atoms/scrollButton'
import Msg from '../molecules/msg'

export interface IMsgsCurrentChatProps {
	roomID:string,
	endRef: React.RefObject<HTMLDivElement | null>
}
 
 function MsgsCurrentChat(
	{ endRef }:IMsgsCurrentChatProps
 ){


	useEffect(() => {
		if(!currentChatDataStore.loading == true){
			endRef.current?.scrollIntoView({ behavior: 'smooth' })
		}
	}, [currentChatDataStore.loading])

	if(!currentChatDataStore.loading){
		console.info('HUI loading > ',
			currentChatDataStore.loading
		)

	}
 
	return (
		<div className='p-5 w-[100%] h-[100%]    rounded-2xl relative'>
			{!currentChatDataStore.isFound && 
			<div className='w-[100%] h-[100%] flex justify-center items-center'>
				пусто
			</div>
			}

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

				{/* Scroll Btn */}
					{endRef.current?.scrollHeight == 10 && 
					<div className='fixed right-10 bottom-30'>
						<ScrollBtn ref={endRef} />
					</div>}

				
			<div ref={endRef} />
		</div>
		
	)
}

export default observer(MsgsCurrentChat)