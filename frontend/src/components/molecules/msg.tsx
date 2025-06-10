import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { userDataStore } from '../../app/store/app/userData'
import { isOpenStore } from '../../app/store/isOpen/isOpenSettingsStore'
import type { IMsgProps } from '../../shared/types/types'
import Ava from '../atoms/ava'

 function MsgCurrentChat(msgData: IMsgProps){

	const n = useNavigate()

	const clsMsg = 'gap-3 pl-[10px]  pr-[10px] rounded-2xl flex items-center my-2'

	const clsMsgMe = 'gap-3  py-[5px] pl-[10px] pr-[10px] rounded-2xl max-w-[85%] flex  justify-end ml-auto'

	const msgMe = msgData.who == userDataStore.userName;
	
	const handleClickProfile = () => {
		
		if(msgData.who === userDataStore.userName){
			isOpenStore.setIsOpen('settings',true)
		} else {
			n(`/u/${msgData.who}`)
		}

	}

	return (
	<div className={clsx(
		msgMe ? clsMsgMe : clsMsg, 
	)}>
			 
		{/* AVA */}		 
		{
		!msgMe && 
			<div className='w-15 h-15 rounded-full  flex cursor-pointer
			justify-center items-center resize-none'>
				
				<Ava ava={msgData.ava} />
				
		</div>
		}

		{/* MSG */}
	<div 
	className={clsx(
		msgMe ? 
		'border border-[#233157]  max-w-[100%] block rounded-2xl px-8 bg-[#040404] rounded-br-[4px] relative bottom-10'  
		
		:'border border-[#444] max-w-[100%] block  py-2 px-8 bg-[#040404] || rounded-bl-[5px] rounded-2xl relative bottom-3 left-[-3px]'
	)}>

		<h4 
		className='text-[#a7a3a3] cursor-pointer hover:text-[#d7d5d5]'
		onClick={handleClickProfile}
		>{msgData.who || 'null'}</h4>
		
		<p className='break-words 
		whitespace-pre-wrap pt-2 '>
			{msgData.text} 
		</p>

			{/* Date */}
		<p className='w-5 h-5 float-right'>{msgData.createAt}</p>
			
	</div>

	{/* AVA */}
		{msgMe && 
			<div className='w-15 h-15 rounded-full  flex cursor-pointer
			justify-center items-center resize-none'>
				
				<Ava ava={msgData.ava} />
				
		</div>}

	</div> 
	) 
}

export default observer(MsgCurrentChat)