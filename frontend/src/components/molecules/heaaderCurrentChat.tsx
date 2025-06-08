import { observer } from 'mobx-react-lite'
import { FaArrowLeft } from 'react-icons/fa6'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'

 function HeaderCurrentChat(){

	const handleClose = () => {
		currentChatDataStore.setSelectedCurrentChat(false)
	}

	return (
		<div className='w-[100%] h-[80px] 
		flex items-center px-[5px] py-[4px] md:border border-[#535252] rounded-full headerCurrentChat'>

		<div 
		className='hidden_el cursor-pointer'
		onClick={handleClose}>
			<FaArrowLeft color='#fff' size={16} />
		</div>
				
				{/* AVA */}
				<div className='w-[50px] h-[48px] _bg-white/30 rounded-[50%] ml-2 mr-3 flex justify-center  border items-center border-[#333]'>
					<img src={currentChatDataStore.ava} alt="img" />
				</div>

				<div className=''>
					<p>{currentChatDataStore.username}</p>
					
				<div className='flex items-center gap-2'>
					<div className='online' />
					<p>online</p>
				</div>

				</div>


		</div>
	)
}

export default observer(HeaderCurrentChat)