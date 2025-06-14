import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { QueryAPI } from '../../api/data'
import { searchQueryStore } from '../../app/store/fetch/HeaderQuery'
import Chat from '../molecules/chat'

 function QueryResult(){

	useEffect(() => {
		QueryAPI()
	}, [searchQueryStore.query]) 

	const clsC = 'w-[100%] fn mx-auto mt-[20px] text-center px-3 py-1 rounded-2xl overflow-y-auto bg-[#060606]/[0.3] border ltr-jump_ot border-b-[#212020] border-[#000]'

	return (
	<div className={clsC}>
			
	{!searchQueryStore.queryRes.length &&
	<div className='py-10'>
		<p className='bg-[#333]/[0.1] inline p-2 px-5 rounded-2xl'>ничего не найдено</p>
	</div>}
			
	{searchQueryStore.queryRes.length > 0 && 
	searchQueryStore.queryRes.map((e, idx) => (
		<div key={idx}>
			<Chat 
			username={e.username}
			roomID={e.roomID}
			ava='x'
			/>
		</div>
	))}
	
	</div>
	)
}

export default observer(QueryResult)