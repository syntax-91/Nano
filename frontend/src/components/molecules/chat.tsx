import { observer } from 'mobx-react-lite'
import { msgsAPI } from '../../api/data'
import { chatsStore } from '../../app/store/chatsStore/chats'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'
import type { IChatProps } from '../../shared/types/types'

 function Chat({
	
		ava,
		username,  
		roomID
	
}:IChatProps	) {

	const handleClick = () => {
		
		const isFound = chatsStore.chats.find(u => u.username === username)

		if(isFound){
			
			console.log('isFound > true')
			currentChatDataStore.setIsFound(true)
			currentChatDataStore.setData(ava, username, roomID)
			msgsAPI(isFound.roomID)

		} else {
			console.log('isFound > false')
			currentChatDataStore.setIsFound(false);currentChatDataStore.setLoading(false)
		}

		currentChatDataStore.setSelectedCurrentChat(true)

	}
 
	return (
		  
		<div className="bg-white/5 w-[100%] mx-auto ttb-jump
		h-[45px] my-2 rounded-2xl flex items-center pl-2
		hover:bg-white/10 active:bg-white/10"
		onClick={handleClick}>
				
		<div className='ava border rounded-[50%] w-[35px] h-[35px] flex items-center justify-center border-[#686464]'>
			<img src={ava} alt="img" />
		</div>
		
		<div className='pl-4'>
			<h5>{username}</h5>
		</div> 
		
		</div>
	);
}

export default observer(Chat)