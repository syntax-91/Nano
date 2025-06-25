import clsx from 'clsx'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { statusFriendsStore } from '../../app/store/app/statusUsers'

interface IAva {
	ava: string
	w?: number
	h?: number
	username?: string
}

function Ava({ ava, w = 15, h = 15, ...rest }: IAva) {
	const clsAVA = `ava  rounded-[50%]           w-[100%] h-[100%] flex items-center relative justify-center border-[#464545] shrink-0 grow-0`

	const friendsJSON = toJS(statusFriendsStore)

	const isFriend = friendsJSON.chats.find(
		friend => rest.username === friend.username
	)

	return (
		<div
			className={clsx(
				clsAVA,
				`bg-gradient-to-r flex shrink-0
		 from-white/5 to-white/15`
			)}
		>
			{ava.length > 0 && <img src={ava} alt='' />}

			<div
				className={clsx(
					'w-[10px] h-[10px] absolute right-1 bottom-[3px]',
					isFriend?.status
				)}
			/>
		</div>
	)
}

export default observer(Ava)
