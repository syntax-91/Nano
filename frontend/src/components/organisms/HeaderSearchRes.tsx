import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { QueryAPI } from '../../api/data'
import { searchQueryStore } from '../../app/store/HeaderSearchQuery'
import Chat from '../molecules/chat'

 function HeaderSearchRes(){

	const queryResJSON = toJS(searchQueryStore.queryRes)
	console.log('Res: ', queryResJSON)

	useEffect(() => {
		QueryAPI()
	}, [searchQueryStore.query]) 

	console.info('queryRES: ', queryResJSON);


	return (
		<div className='w-[100%] h-[100px]
		fn mx-auto mt-[20px] text-center
		border px-3 py-2 rounded-2xl border-[#444]  overflow-y-auto '>
			
			{searchQueryStore.queryRes.length === 0 && 
			<div className='pt-10'>
				ничего не найдено
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
			)) 
		}


		</div>
	)
}

export default observer(HeaderSearchRes)