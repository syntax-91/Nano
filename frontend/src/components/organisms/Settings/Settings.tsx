import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { configStore } from '../../../app/store/app/configStore'
import HeaderSettings from './../../molecules/HeaderSettings'
import BgCurrentChat from './components/bgCurrentChat'
import ChangeAva from './components/changeAva'

function Settings() {
	const [isOpenBgCurrentChat, setIsOpenBgCurrentChat] = useState(false)

	const [isOpenChangeAva, setIsOpenChangeAva] = useState(false)

	const handleClickBgCC = () => {
		if (isOpenBgCurrentChat == true) {
			setIsOpenBgCurrentChat(false)
		} else {
			setIsOpenBgCurrentChat(true)
		}
	}

	const handleChangeAva = () => {
		if (isOpenChangeAva) {
			setIsOpenChangeAva(false)
		} else {
			setIsOpenChangeAva(true)
		}
	}

	const clsBlock =
		'bg-white/5 w-[50%] mx-auto flex justify-center p-2 rounded-2xl cp tr-6 my-5 borderP'

	return (
		<div
			className={clsx(
				'fixed top-0 left-0  w-[100%] h-[100%] flex justify-center items-center z-10 bg-black/80'
			)}
		>
			<div
				className={clsx(
					`w-[100%] h-[100%] md:w-[550px] md:h-[450px]
				md:rounded-2xl || fn-3`,
					configStore.currentTheme == 'dark' ? 'bbd' : 'bbl'
				)}
			>
				<HeaderSettings />

				<div onClick={handleClickBgCC} className={clsBlock}>
					<h2>фон для чата </h2>
				</div>

				<div
					onClick={handleChangeAva} //
					className={clsBlock}
				>
					<h2>автарка..</h2>
				</div>

				{isOpenBgCurrentChat && <BgCurrentChat />}

				{isOpenChangeAva && <ChangeAva />}
			</div>
		</div>
	)
}

export default observer(Settings)
