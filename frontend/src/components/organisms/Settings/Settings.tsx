import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { configStore } from '../../../app/store/app/configStore'
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
			className={clsx(
				'fixed top-0 left-0  w-[100%] h-[100%] flex justify-center items-center z-10 bg-blur3'
			)}
		>
			<div
				className={clsx(
					`w-[100%] h-[100%] md:w-[550px] md:h-[450px]
				md:rounded-2xl || fn-3 $`,
					configStore.currentTheme == 'dark' ? 'bbd' : 'bbl'
				)}
			>
				<HeaderSettings />

				<div
					onClick={handleClickBgCC}
					className='bg-white/5 w-[50%] mx-auto flex justify-center p-2 rounded-2xl cp tr-6 my-10 borderP'
				>
					<h2>фон для чата </h2>
				</div>

				{isOpenBgCurrentChat && <BgCurrentChat />}
			</div>
		</div>
	)
}

export default observer(Settings)
