import { observer } from 'mobx-react-lite'
import type { IMsgProps } from '../../shared/types/types'

 function MsgCurrentChat(msgData: IMsgProps){

	 
	return (
	<div className='gap-3  py-[10px] pl-[10px] pr-[10px] rounded-2xl border-[#444]
	my-2 max-w-[80%] flex '>
			 
		{/* AVA */}		 
	<div className='ava w-10 h-10 bg-white/35 rounded-full flex justify-center items-center flex-shrink-0'>
		<img src={msgData.ava} alt="img" />	
	</div>

		{/* MSG */}
	<div 
	className='border border-[#444] max-w-[100%] block p-1 rounded-2xl p-2'>

		<h4>{msgData.who}</h4>
		<p className='break-words whitespace-pre-wrap'>
			{msgData.text}
		</p>
	</div>

			
	</div>
	) 
}

export default observer(MsgCurrentChat)