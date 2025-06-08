import { observer } from 'mobx-react-lite'
import { searchQueryStore } from '../../../app/store/HeaderSearchQuery'
import { isOpenMenuDesktop } from '../../../app/store/isOpenMenu/isOpenMenuDesktop'
import { isOpenMenuMobile } from '../../../app/store/isOpenMenu/isOpenMenuMobile'
import Chats from '../Chats'
import HeaderB1 from '../HeaderB1'
import HeaderSearchRes from '../HeaderSearchRes'
import MenuDesktop from '../menu/menuDesktop'
import MenuMobile from '../menu/menuMobile'

// chats
 function Block1(){

	return (
		<div className=' w-[100%] md:border h-[90vh] border-[#5c5b5b] px-5 m-2 rounded-2xl '>  
			
			<HeaderB1 />

			{isOpenMenuMobile.isOpenMenuMobile &&
			<MenuMobile />}	
										 			
			{isOpenMenuDesktop.isOpenMenuDesktop && 
			<MenuDesktop />}
								
			{searchQueryStore.query && <HeaderSearchRes />}
			
			<Chats />

			
		</div>
	)
}
 
export default observer(Block1)