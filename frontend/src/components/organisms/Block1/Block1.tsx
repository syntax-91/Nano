import { observer } from 'mobx-react-lite'
import { useMediaQuery } from 'react-responsive'
import { searchQueryStore } from '../../../app/store/fetch/HeaderQuery'
import { isOpenStore } from '../../../app/store/isOpen/isOpenSettingsStore'
import Chats from '../Chats'
import MenuDesktop from '../menu/Desktop/menuDesktop'
import MenuMobile from '../menu/Mobile/menuMobile'
import QueryResult from '../QueryResult'
import HeaderB1 from './HeaderB1'

function Block1() {
	const isMobile = useMediaQuery({
		maxWidth: 700,
	})

	return (
		<div className='w-[100%] h-[100vh] rounded-2xl flex'>
			<div className='mx-auto w-[90%]'>
				<HeaderB1 />

				{isOpenStore.isOpenMap.menuMobile && isMobile && <MenuMobile />}

				{isOpenStore.isOpenMap.menuDesktop && !isMobile && <MenuDesktop />}

				{searchQueryStore.query && <QueryResult />}

				<Chats />
			</div>
		</div>
	)
}

export default observer(Block1)
