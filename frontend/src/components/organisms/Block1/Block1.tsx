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
		<div className='w-[100%] md:_border  
		h-[99vh] border-[#5c5b5b] px-3.5 rounded-2xl mt-10 mx-auto bg-red-90'>  
			
			<HeaderB1 />

			{isOpenStore.isOpenMap.menuMobile &&
			<MenuMobile />}	
										 			
			{isOpenStore.isOpenMap.menuDesktop && 
			<MenuDesktop />}
								
			{searchQueryStore.query && 
			<QueryResult />}
			
			<Chats />

			
		</div>
	)
}
 
export default observer(Block1)