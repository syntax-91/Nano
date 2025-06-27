import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import HeaderSettings from './../../molecules/HeaderSettings'
import BgCurrentChat from './components/bgCurrentChat'

function Settings() {
	const [isOpenBgCurrentChat, setIsOpenBgCurrentChat] = useState(false)

	const handleClickBgCC = () => {
		if (isOpenBgCurrentChat == true) {
			setIsOpenBgCurrentChat(false)
		} else {
			setIsOpenBgCurrentChat(true)
		}
	}

	return (
		<div
			className='fixed top-0 left-0  w-[100%] 
	h-[100%] flex justify-center items-center z-10 bg-blur3'
		>
			<div
				className='w-[100%] h-[100%] md:w-[550px] md:h-[450px] bbd
				md:rounded-2xl || fn-3'
			>
				<HeaderSettings />

				<div
					onClick={handleClickBgCC}
					className='bg-white/5 w-[50%] mx-auto flex justify-center p-2 rounded-2xl cp tr-6 my-10'
				>
					<h2>фон для чата </h2>
				</div>

				{isOpenBgCurrentChat && <BgCurrentChat />}
			</div>
		</div>
	)
}

export default observer(Settings)
