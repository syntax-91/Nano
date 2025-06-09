import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { modalStore } from '../../app/store'
import { statusFriendsStore } from '../../app/store/app/statusUsers'
import { userDataStore } from '../../app/store/userData'
import Modal from '../../components/molecules/modal'
import socket from './../../app/socket/socket'

export interface IStatusChangeProps {
	username: string,
	status:'offline'|'online'
}

 function Layout(){

	useEffect(() => {

		socket.emit('change-status', {
				username: userDataStore.userName,
				status: 'online'
			}
		)

		socket.on('change-status', (data:IStatusChangeProps) => {

		const dataArr = [data];

			console.info('changeStatus >  ', dataArr)

			statusFriendsStore.setChats(dataArr)
			

			//statusFriendsStore.setChats(statusFriends)
		})


		window.addEventListener('beforeunload', ()=>{
			socket.emit('change-status', {
				username: userDataStore.userName,
				status: 'offline'
			})

		})
		

		return () => {
			socket.off('change-status')
		}

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