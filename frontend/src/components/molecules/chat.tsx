import clsx from 'clsx'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { msgsAPI } from '../../api/data'
import { statusFriendsStore } from '../../app/store/app/statusUsers'
import { chatsStore } from '../../app/store/chatsStore/chats'
import { currentChatDataStore } from '../../app/store/CurrentChat/currentChatDataStore'
import type { IChatProps } from '../../shared/types/types'

 function Chat({
	
		ava,
		username,  
		roomID,
		latestMsg
		
}:IChatProps	) {

	
	const currentChatDataJSON = toJS(currentChatDataStore)

	const handleClick = () => {
		
		const isFound = chatsStore.chats.find(u => u.username === username)

		if(
			currentChatDataJSON.username === username
		) {
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
		currentChatDataStore.setLoading(false)

	}
 
	const cls = " w-[100%] mx-auto h-[53px] my-3 rounded-2xl flex items-center pl-2 hover:bg-white/10 active:bg-white/10"

	const friendsJSON = toJS(statusFriendsStore)

	const isFriend = friendsJSON.chats.find(
		friend => username === friend.username
	) 

	console.info('friend > ', isFriend)

	return (
		<div className={clsx(
			cls, 
			`${currentChatDataStore.username === username ? 'bg-[#2c3982]/20' : 'bg-white/5' }`
		)}
		onClick={handleClick}>
				
			{/* AVA */}
		<div className='ava border rounded-[50%] 
		w-[45px] h-[90%] flex items-center relative
		justify-center border-[#464545]'>
			<img src={ava} alt="img" 
			className='' />

		<div 
		className={clsx(
			'w-[10px] h-[10px] absolute right-1 bottom-[3px]',
			 isFriend?.status
		)}
		/>

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