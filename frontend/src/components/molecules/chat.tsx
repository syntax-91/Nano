import clsx from 'clsx'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { msgsAPI } from '../../api/data'
import { chatsStore } from '../../app/store/chatStore/chats'
import { currentChatDataStore } from '../../app/store/chatStore/currentChatDataStore'
import type { IChatProps } from '../../shared/types/types'
import Ava from '../atoms/ava'

 function Chat({
	
		ava,
		username,  
		roomID,
		latestMsg
		
}:IChatProps	) {

	const currentChatDataJSON = toJS(currentChatDataStore)

	const handleClick = () => {
		const isFound = chatsStore.chats.find(u => u.username === username)

		if(currentChatDataJSON.username === username) {
			currentChatDataStore.reset()	
			return;
		}

		if(isFound){
			currentChatDataStore.setLoading(true)
			
			currentChatDataStore.setIsFound(true)
			currentChatDataStore.setData(ava, username, roomID)
			msgsAPI(isFound.roomID)
 
		}
		 else {
			currentChatDataStore.setIsFound(false);
			currentChatDataStore.setData(ava, username, roomID);
		}

		currentChatDataStore.setSelectedCurrentChat(true)
		currentChatDataStore.setLoading(true)
	}
 
	const cls = "w-[100%] mx-auto h-[59px]      my-[2px] rounded-2xl flex items-center hover:bg-white/10 active:bg-white/10 cp gradient-b-to from-red-900 to-red-200 || ltr-jump_ot"

	return (
		<div className={clsx(
			cls, 
			`${currentChatDataStore.username 
				=== username ? 'bg-[#98989a]/20' : 'bg-gradient-to-r from-white/1  to-white/3' } 
				`,
			``
		)}
		onClick={handleClick}>
				
			{/* AVA */}
		<div className='w-[49px] h-[85%]'>
			<Ava w={30} h={15} ava={ava} username={username} />
		</div>
		
		<div className='pl-4'>
			<h5>
				{username || 'не удалось получить имя'}
			</h5>

			<h5>{latestMsg || ''}</h5>
		</div> 
		
		</div>
	);
}

export default observer(Chat)