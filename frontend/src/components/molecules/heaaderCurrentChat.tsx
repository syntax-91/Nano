import { observer } from 'mobx-react-lite'
import { BiArrowBack } from 'react-icons/bi'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'

 function HeaderCurrentChat(){

	const handleClose = () => {
		currentChatDataStore.setSelectedCurrentChat(false)
	}

	return (
		<div className='w-[100%] h-[50px] _fixed top-0 
		flex items-center px-[10px] bg-white/5
		rounded-b-2xl'>
				
				<div
				onClick={handleClose}>
					<BiArrowBack color='#fff' size={25} />
				</div>

				<div className='w-[35px] h-[35px] bg-white/30 rounded-[50%] mx-5 flex justify-center items-center'>
					<img src={currentChatDataStore.ava} alt="img" />
				</div>

				<div>
					<p>{currentChatDataStore.username}</p>
				</div>


		</div>
	)
}

export default observer(HeaderCurrentChat)