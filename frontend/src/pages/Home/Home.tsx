import { observer } from 'mobx-react-lite'
import { useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Outlet, useNavigate } from 'react-router-dom'
import { userDataStore } from '../../app/store/app/userData'

import { modalStore } from '../../app/store'
import { configStore } from '../../app/store/app/configStore'
import { isOpenStore } from '../../app/store/isOpen/isOpenSettingsStore'
import Modal from '../../components/molecules/modal'
import Block1 from '../../components/organisms/Block1/Block1'
import Settings from './../../components/organisms/Settings/Settings'

function Home() {
	const nav = useNavigate()

	const isMobile = useMediaQuery({ maxWidth: 700 })

	useLayoutEffect(() => {
		if (!userDataStore.isAuth) {
			nav('/login')
		}
	}, [])

	return (
		<div
			className={`w-full flex fixed
		 ${configStore.currentTheme} gap-0 items-center`}
		>
			{/* modalWindow */}
			{modalStore.isOpen === true && <Modal />}

			{/* Block 1 */}
			<div className='w-[100%] md:w-[410px] sm:mx-2  shrink-0'>
				<Block1 />
			</div>

			{/* settings */}
			{isOpenStore.isOpenMap.settings && <Settings />}

			{/* currentChat для Desktop'а */}
			{!isMobile && (
				<div className='w-full bg-green-90'>
					{/*<CurrentChat typeDevice='desktop' */}
					<Outlet />
				</div>
			)}

			{/* currentChat mobile */}
			{isMobile && <Outlet />}
		</div>
	)
}

export default observer(Home)
