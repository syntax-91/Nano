import clsx from 'clsx'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { configStore } from '../../app/store/app/configStore'
import { statusFriendsStore } from '../../app/store/app/statusUsers'
import { currentChatDataStore } from '../../app/store/chatStore/currentChatDataStore'
import {
	handleClickProfile,
	handleCloseCurrentChat,
} from '../../shared/utils/handlers/uiHandlers'
import Ava from '../atoms/ava'

function HeaderCurrentChat() {
	const n = useNavigate()

	const friendsJSON = toJS(statusFriendsStore)
	const dataJSON = toJS(currentChatDataStore)

	const isFriend = friendsJSON.chats.find(
		friend => friend.username === dataJSON.username
	)

	const handleClose = () => {
		handleCloseCurrentChat()
		n('/')
	}

	const handleClickProfile_ = () => {
		handleClickProfile(currentChatDataStore.username, n)
	}

	return (
		<div
			className={clsx(
				'w-[100%] h-[75px] flex items-center px-[3px] md:border rounded-full headerCurrentChat',
				configStore.currentTheme == 'dark' ? 'BAD' : 'BAL'
			)}
		>
			<div className='hidden_el cursor-pointer' onClick={handleClose}>
				<FaArrowLeft color='#fff' size={16} />
			</div>

			{/* AVA */}
			<div
				onClick={handleClickProfile_}
				className='w-[50px] h-[50px] _bg-white/30 rounded-[50%] ml-1.5 mr-3 flex justify-center items-center border-[#333] cp'
			>
				<Ava
					ava={currentChatDataStore.ava}
					username={currentChatDataStore.username}
				/>
			</div>

			<div onClick={handleClickProfile_} className='ml-3 cp'>
				<p>{currentChatDataStore.username || 'ошибка, попробуйте ещё раз'}</p>

				<div className='flex items-center'>
					<p>{isFriend?.status || 'offline'}</p>
				</div>
			</div>
		</div>
	)
}

export default observer(HeaderCurrentChat)
