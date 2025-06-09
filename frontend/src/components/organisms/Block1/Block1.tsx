import { observer } from 'mobx-react-lite'
import { searchQueryStore } from '../../../app/store/HeaderSearchQuery'
import { isOpenMenuDesktop } from '../../../app/store/isOpenMenu/isOpenMenuDesktop'
import { isOpenMenuMobile } from '../../../app/store/isOpenMenu/isOpenMenuMobile'
import Chats from '../Chats'
import HeaderB1 from '../HeaderB1'
import QueryResult from '../QueryResult'
import MenuDesktop from '../menu/menuDesktop'
import MenuMobile from '../menu/menuMobile'

// chats
 function Block1(){

	return (
		<div className=' w-[100%] md:_border h-[99vh] border-[#5c5b5b] px-5 m-2 rounded-2xl '>  
			
			<HeaderB1 />

			{isOpenMenuMobile.isOpenMenuMobile &&
			<MenuMobile />}	
										 			
			{isOpenMenuDesktop.isOpenMenuDesktop && 
			<MenuDesktop />}
								
			{searchQueryStore.query && 
			<QueryResult />}
			
			<Chats />

			
		</div>
	)
}
 
export default observer(Block1)