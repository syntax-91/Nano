import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { FaArrowLeft } from 'react-icons/fa6'
import { statusFriendsStore } from '../../app/store/app/statusUsers'
import { currentChatDataStore } from '../../app/store/chatStore/currentChatDataStore'
import { handleCloseCurrentChat } from '../../shared/utils/handlers/uiHandlers'
import Ava from '../atoms/ava'

function HeaderCurrentChat() {
	const friendsJSON = toJS(statusFriendsStore)
	const dataJSON = toJS(currentChatDataStore)

	const isFriend = friendsJSON.chats.find(
		friend => friend.username === dataJSON.username
	)

	return (
		<div
			className='w-[100%] h-[75px] 
		flex items-center px-[3px] md:border border-gray-800 rounded-full headerCurrentChat'
		>
			<div
				className='hidden_el cursor-pointer'
				onClick={handleCloseCurrentChat}
			>
				<FaArrowLeft color='#fff' size={16} />
			</div>

			{/* AVA */}
			<div className='w-[50px] h-[50px] _bg-white/30 rounded-[50%] ml-2 mr-3 flex justify-center items-center border-[#333]'>
				<Ava
					ava={currentChatDataStore.ava}
					username={currentChatDataStore.username}
				/>
			</div>

			<div className='ml-3'>
				<p>{currentChatDataStore.username}</p>

				<div className='flex items-center'>
					<p>{isFriend?.status || 'offline'}</p>
				</div>
			</div>
		</div>
	)
}

export default observer(HeaderCurrentChat)
