import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateMsgs } from '../../api/data'
import { userDataStore } from '../../app/store/app/userData'
import { currentChatDataStore } from '../../app/store/chatStore/currentChatDataStore'
import type { IMsgProps } from '../../shared/types/types'
import { handleClickProfile } from '../../shared/utils/handlers/uiHandlers'

function MsgCurrentChat(msgData: IMsgProps) {
	const clsMsgCompanion =
		'gap-3 rounded-2xl flex items-center my-1 lg:max-w-[70%] ltr'

	const clsMsgMe =
		'gap-2  rounded-2xl max-w-[85%] flex my-1 justify-end ml-auto lg:max-w-[70%] rtl'

	//default
	const clsD = 'bgP py-7 px-10 rounded-2xl relative max-w-[100%] text-[#cccbcb]'

	// проверка наше ли это сообщение
	const isMsgMe = msgData.who == userDataStore.userName

	// навигация
	const n = useNavigate()

	////

	const firstMsgRef = useRef<IntersectionObserver | null>(null)

	const observeFirstMsg = useCallback((n: HTMLDivElement | null) => {
		if (firstMsgRef.current) {
			firstMsgRef.current.disconnect()
		}

		if (n) {
			const ob = new IntersectionObserver(
				// коллбэк при прокрутке
				([e]) => {
					if (e.isIntersecting) {
						updateMsgs()
					}
				},

				// настройки
				{
					root: null,
					threshold: 0.9, // сработать когда 90%
				}
			)

			ob.observe(n)
			firstMsgRef.current = ob
		}
	}, [])

	return (
		<div
			ref={
				msgData._id === currentChatDataStore.firstMsgId ? observeFirstMsg : null
			}
			className={clsx(isMsgMe ? clsMsgMe : clsMsgCompanion)}
		>
			{/* AVA */}
			{/*
		!msgMe && 
			<div className='w-15 h-15 rounded-full  flex cursor-pointer
			justify-center items-center resize-none'
			>
				<Ava ava={msgData.ava} />
		</div>
		*/}

			{/* MSG */}
			<div
				className={clsx(isMsgMe ? 'rounded-br-[4px]' : 'rounded-[20px]', clsD)}
			>
				{/* username */}
				<p
					onClick={() => handleClickProfile(msgData.who, n)}
					className='absolute top-2 left-4 
					text-[10px] hover:text-[#5e5d5d] cursor-pointer font-bold'
				>
					{msgData.who}
				</p>

				{/* Text */}
				<p className='break-words oa'>{msgData.text}</p>

				{/* createAtTime */}
				<span
					className='absolute bottom-1 right-3
					text-[10px] font-sans'
				>
					{msgData.time || '00:00'}
				</span>
			</div>

			{/* meAVA */}
			{/*msgMe && 
			<div className='w-15 h-15 rounded-full  flex cursor-pointer shrink-0
			justify-center items-center resize-none'>
				
				<Ava ava={msgData.ava} />
				
		</div>*/}
		</div>
	)
}

export default observer(MsgCurrentChat)
