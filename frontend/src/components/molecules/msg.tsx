import { observer } from 'mobx-react-lite'
import type { IMsgProps } from '../../shared/types/types'

 function MsgCurrentChat(msgData: IMsgProps){

	 
	return (
		<div className='flex items-center gap-3 max-w-[80%] m-4 '>
			 
			{/* AVA */}
			<div className='bg-white/30 flex justify-center items-center p-3 rounded-[50%] '>
				<img src={msgData.ava} alt="img" />
			</div>

			{/* msg */}
			<div className='  bg-[#1d1d1d] border
		rounded-3xl border-[#444] flex justify-center items-center w-[25%]
		mt-3 py-3 pt-10  relative'>

			<p className='absolute top-2
			left-3 text-emerald-600'>
				{msgData.who}</p>
			
			<p>{msgData.text}</p>
		</div>

		</div>
	) 
}

export default observer(MsgCurrentChat)