import { useNavigate, useParams } from 'react-router-dom'
import { currentChatDataStore } from '../../../app/store/chatStore/currentChatDataStore'
import { Button } from '../../atoms/Button'
import Ava from '../../atoms/ava'

export default function UserProfile() {
	const { username } = useParams<string>()
	const n = useNavigate()

	const handleClickBtn = () => {
		n(`/chat/${currentChatDataStore.roomID}`)
	}

	return (
		<div className='w-[100vw] h-[100vh]  mx-auto flex justify-center items-center ltr-jump_ot'>
			<div className='borderMG rounded-2xl'>
				{/* arrow */}
				<p className='mx-8 my-4 cp' onClick={() => n(-1)}>
					назад
				</p>

				{/* username */}
				<h2 className='text-center my-7 text-2xl font-black'>{username}</h2>

				{/* AVA */}
				<div className='w-[130px] h-[130px] mx-auto hover:bg-gray-800 rounded-full'>
					<Ava ava='-' />
				</div>

				{/* description */}
				<div className='w-[70%] h-10 mx-auto mt-10 mb-10'>
					<h3>описание:</h3>
					<h2 className='text-center'>{/*userData.description ||*/ 'пусто'}</h2>
				</div>

				<div className='my-8'>
					{currentChatDataStore.username === username && (
						<Button
							isBlock={true}
							location='center'
							label='написать'
							onClick={handleClickBtn}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
