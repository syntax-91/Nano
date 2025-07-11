import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { sendMsg } from '../../shared/utils/handlers/uiHandlers'
import { TextArea } from '../atoms/TextArea'

interface ISendMsgProps {
	roomID: string
	endRef: React.RefObject<HTMLDivElement | null>
}

function SendMsg({ roomID, endRef }: ISendMsgProps) {
	const [text, setText] = useState('')

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.ctrlKey && e.key === 'Enter' && text.length > 0) {
			sendMsg({
				endRef,
				roomID,
				text,
				setText,
			})
		}
	}

	const send = () => {
		sendMsg({
			endRef,
			roomID,
			text,
			setText,
		})
	}

	return (
		<div
			className='w-[100%] h-17
	flex gap-2 delay-1000 items-center  rounded-[5px] relative_ tr3'
		>
			<TextArea
				value={text}
				onChange={e => setText(e.target.value)}
				resize='vertical'
				handleKeyDown={handleKeyDown}
			/>

			{text.length > 0 && (
				<div
					className={clsx(
						text.trim().length > 0 ? 'inline-block' : 'hidden',
						' ab_solute right-0 top-0'
					)}
				>
					<IoMdSend
						color='#cfcbcb'
						size={40}
						onClick={send}
						className='hover:rotate-x-[-30deg] 
			text-[#cfcbcb]'
					/>
				</div>
			)}
		</div>
	)
}

export default observer(SendMsg)
