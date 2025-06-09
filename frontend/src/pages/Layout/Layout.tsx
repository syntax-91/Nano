import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { modalStore } from '../../app/store'
import { statusFriendsStore } from '../../app/store/app/statusUsers'
import { chatsStore } from '../../app/store/chatsStore/chats'
import Modal from '../../components/molecules/modal'
import socket from './../../app/socket/socket'

interface IStatusChangeProps {
	username: string,
	status:'offline'|'online'
}

 function Layout(){

	useEffect(() => {

		socket.on('change-status', (data:IStatusChangeProps[]) => {
			
			const statusFriends = 
			
			chatsStore.chats.forEach (f =>
				data.some(user => user.username === f.username)
			)

			statusFriendsStore.setChats(statusFriends)
		})

	}, [])

	return (
		<div> 
 
			{modalStore.isOpen === true && 
			<Modal />}

			<div>
				<Outlet /> 
			</div>

		</div>
	)
}

export default observer(Layout)