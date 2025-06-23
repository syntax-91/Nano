import clsx from 'clsx'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { configStore } from '../../app/store/app/configStore'
import { currentChatDataStore } from '../../app/store/chatStore/currentChatDataStore'
import type { IChatProps } from '../../shared/types/types'
import Ava from '../atoms/ava'

function Chat({ ava, username, roomID, latestMsg }: IChatProps) {
	const n = useNavigate()

	const currentChatDataJSON = toJS(currentChatDataStore)

	const handleClick = () => {
		if (currentChatDataJSON.username === username) {
			n('/')
			currentChatDataStore.reset()
			return
		}

		currentChatDataStore.setData(ava, username, roomID)
		n(`chat/${roomID}`)
	}

	const clsDark =
		'w-[100%] mx-auto h-[60px] my-[2px] rounded-2xl flex items-center hover:bg-white/20 active:bg-white/5 cp || ltr-jump_ot pl-1 tr'

	const clsLight =
		'w-[100%] mx-auto h-[60px] my-[2px] rounded-2xl flex items-center cp || ltr-jump_ot pl-1 tr  o7'

	const selectedChatLight = 'bg-black/10'

	const selectedChatDark = 'bg-white/5'

	return (
		<div
			className={clsx(
				configStore.currentTheme == 'dark' ? clsDark : clsLight,
				`${
					currentChatDataStore.username === username
						? configStore.currentTheme == 'dark'
							? selectedChatDark
							: selectedChatLight
						: ''
				}
				`,
				``
			)}
			onClick={handleClick}
		>
			{/* AVA */}
			<div className='w-[49px] h-[85%]'>
				<Ava w={30} h={15} ava={ava} username={username} />
			</div>

			<div className='pl-4'>
				<h5>{username || 'не удалось получить имя'}</h5>

				<h5>{latestMsg || ''}</h5>
			</div>
		</div>
	)
}

export default observer(Chat)
