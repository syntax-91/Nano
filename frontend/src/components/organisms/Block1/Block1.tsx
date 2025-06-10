import { observer } from 'mobx-react-lite'
import { searchQueryStore } from '../../../app/store/fetch/HeaderQuery'
import { isOpenStore } from '../../../app/store/isOpen/isOpenSettingsStore'
import Chats from '../Chats'
import HeaderB1 from '../HeaderB1'
import QueryResult from '../QueryResult'
import MenuDesktop from '../menu/menuDesktop'
import MenuMobile from '../menu/menuMobile'

// chats
 function Block1(){

	return (
	<div className='w-[100%]  
		h-[99vh]  rounded-2xl flex '>  
			
	<div className='w-[95%] mx-auto'>
		<HeaderB1 />

			{isOpenStore.isOpenMap.menuMobile &&
			<MenuMobile />}	
										 			
			{isOpenStore.isOpenMap.menuDesktop && 
			<MenuDesktop />}
								
			{searchQueryStore.query && 
			<QueryResult />}
			
			<Chats />

	</div>
			
	</div>
	)
}
 
export default observer(Block1)