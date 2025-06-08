import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { sharedStore } from '../../app/store/sharedStore'
import { userDataStore } from '../../app/store/userData'
import type { IMsgProps } from '../../shared/types/types'

 function MsgCurrentChat(msgData: IMsgProps){

	const n = useNavigate()

	const clsMsg = 'gap-3  py-[10px] pl-[10px] pr-[10px] rounded-2xl border-[#444] my-2 max-w-[80%] flex'

	const clsMsgMe = 'gap-3  py-[10px] pl-[10px] pr-[10px] rounded-2xl border-[#444] my-2  flex justify-end'

	const msgMe = msgData.who == userDataStore.userName;
	
	const handleClickProfile = () => {
		
		if(msgData.who === userDataStore.userName){
			sharedStore.setIsOpen(true)
		} else {
			n(`/u/${msgData.who}`)
		}

	}

	return (
	<div className={clsx(
		msgMe ?clsMsgMe : clsMsg, 
	)}>
			 
		{/* AVA */}		 
		{!msgMe && 
			<div className='border w-15 h-15 rounded-full border-[#444] flex justify-center items-center'>
				<img src={msgData.ava} alt="img" />
		</div>}

		{/* MSG */}
	<div 
	className='border border-[#444] max-w-[100%] block rounded-2xl p-4 bg-[#040404]'>

		<h4 
		className='text-[#a7a3a3] cursor-pointer hover:text-[#d7d5d5]'
		onClick={handleClickProfile}
		>{msgData.who || 'null'}</h4>
		
		<p className='break-words whitespace-pre-wrap pt-2 '>
			{msgData.text} 
		</p>

	</div>

		{msgMe && 
			<div className='border w-15 h-15 rounded-full border-[#444] flex justify-center items-center'>
				<img src={msgData.ava} alt="img" />
		</div>}

			
	</div> 
	) 
}

export default observer(MsgCurrentChat)