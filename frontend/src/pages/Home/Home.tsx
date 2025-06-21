import { observer } from 'mobx-react-lite'
import { useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import { userDataStore } from '../../app/store/app/userData'

import { currentChatDataStore } from '../../app/store/chatStore/currentChatDataStore'
import { isOpenStore } from '../../app/store/isOpen/isOpenSettingsStore'
import { sharedStore } from '../../app/store/shared/sharedStore'
import Block1 from '../../components/organisms/Block1/Block1'
import CurrentChat from '../../components/organisms/currentChat/currentChat'
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
			className={`w-[100%]  h-[100vh] flex fixed
		 ${sharedStore.currentTheme} gap-0 items-center`}
		>
			{/* Block 1 */}
			<div className='w-[100%] md:w-[400px] sm:mx-2  shrink-0'>
				<Block1 />
			</div>

			{/* settings */}
			{isOpenStore.isOpenMap.settings && <Settings />}

			{/* currentChat для Desktop'а */}
			{!isMobile && (
				<div className=' w-full bg-green-90'>
					<CurrentChat typeDevice='desktop' />
				</div>
			)}

			{/* currentChat mobile */}
			{isMobile && currentChatDataStore.selectedCurrentChat && (
				<div className=''>
					<CurrentChat typeDevice='mobile' />
				</div>
			)}
		</div>
	)
}

export default observer(Home)
