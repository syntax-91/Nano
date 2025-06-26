import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { configStore } from '../../app/store/app/configStore'
import { currentChatDataStore } from '../../app/store/chatStore/currentChatDataStore'
import { ScrollBtn } from '../atoms/scrollButton'
import Msg from '../molecules/msg'

export interface IMsgsCurrentChatProps {
	roomID: string
	endRef: React.RefObject<HTMLDivElement | null>
}

function MsgsCurrentChat({ endRef }: IMsgsCurrentChatProps) {
	//
	useEffect(() => {
		if (!currentChatDataStore.loading == true) {
			endRef.current?.scrollIntoView({ behavior: 'auto' })
		}
	}, [currentChatDataStore.loading])

	return (
		<div
			className={clsx(
				'p-5 w-[100%] h-[100%]  rounded-2xl relative overflow-y-auto z-5',
				configStore.bgBlurCurrentChat && 'backdrop-blur',
				configStore.bgCurrentChat == 'not'
					? 'bbd'
					: `bg-[url('${configStore.bgCurrentChat}')]`
			)}
		>
			{!currentChatDataStore.isFound && (
				<div className='w-[100%] h-[100%] flex justify-center items-center'>
					пусто
				</div>
			)}

			{currentChatDataStore.isFound &&
				currentChatDataStore.msgs.map((msg, idx) => (
					<div key={idx} className='p-1'>
						<Msg
							_id={msg._id}
							text={msg.text}
							msgID={msg.msgID}
							time={msg.time}
							ava={msg.ava}
							who={msg.who}
							createAt={msg.createAt}
						/>
					</div>
				))}

			{/* Scroll Btn */}
			{endRef.current?.scrollHeight == 10 && (
				<div className='fixed right-10 bottom-30'>
					<ScrollBtn ref={endRef} />
				</div>
			)}

			<div ref={endRef} />
		</div>
	)
}

export default observer(MsgsCurrentChat)
