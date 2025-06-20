import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { modalStore } from '../../app/store'
import { statusFriendsStore } from '../../app/store/app/statusUsers'
import { userDataStore } from '../../app/store/app/userData'
import Modal from '../../components/molecules/modal'
import socket from './../../app/socket/socket'

export interface IStatusChangeProps {
	username: string
	status: 'offline' | 'online'
}

function Layout() {
	useEffect(() => {
		const handleStatus = (data: IStatusChangeProps) => {
			const dataArr = [data]
			console.info('changeStatus >  ', dataArr)
			statusFriendsStore.setChats(dataArr)
		}

		const handleBeforeunLoad = () => {
			socket.emit('change-status', {
				username: userDataStore.userName,
				status: 'offline',
			})
		}

		socket.on('change-status', handleStatus)

		window.addEventListener('beforeunload', handleBeforeunLoad)

		return () => {
			socket.off('change-status', handleStatus)

			window.removeEventListener('beforeunload', handleBeforeunLoad)
		}
	}, [])

	return (
		<div>
			{modalStore.isOpen === true && <Modal />}

			<div>
				<Outlet />
			</div>
		</div>
	)
}

export default observer(Layout)
