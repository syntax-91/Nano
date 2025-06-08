import { observer } from 'mobx-react-lite'
import { Outlet } from 'react-router-dom'
import { modalStore } from '../../app/store'
import Modal from '../../components/molecules/modal'

 function Layout(){

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