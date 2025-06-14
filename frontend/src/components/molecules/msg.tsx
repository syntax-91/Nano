import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { userDataStore } from '../../app/store/app/userData'
import type { IMsgProps } from '../../shared/types/types'
import { handleClickProfile } from '../../shared/utils/handlers/uiHandlers'

 function MsgCurrentChat(msgData: IMsgProps){

	const clsMsgC = 'gap-3 rounded-2xl flex items-center my-1 lg:max-w-[70%] ltr'

	const clsMsgMe = 'gap-2  rounded-2xl max-w-[85%] flex  justify-end ml-auto lg:max-w-[70%]ltr my-1'

	const clsM = 'bg-[#fff]/5 py-7 px-8 rounded-2xl relative max-w-[100%]'

	const isMsgMe = msgData.who == userDataStore.userName;

	const n = useNavigate();

	return (
	<div className={clsx(
		isMsgMe ? clsMsgMe : clsMsgC, 
	)}>
			 
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
	className={clsx(
		isMsgMe ? 
		'rounded-br-[6px]'  
		:'rounded-bl-[6px]',
		clsM
	)}>

		{/* username */}
		<p
		onClick={()=> 
			handleClickProfile(msgData.who, n)
		}
		className='absolute top-2 left-4 
		text-[10px] text-[#cccbcb] hover:text-[#5e5d5d] cursor-pointer'
		>{msgData.who}</p>
		
		{/* Text */}
		<p
		className='break-words oa'
		>{msgData.text}</p>

		{/* createAt */}
		<span
		className='absolute bottom-1 right-3 
		text-[8px]'
		>{msgData.createAt}</span>
			
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