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
		console.log('HUI')
	}, [searchQueryStore.query]) 

	console.info('queryRES: ', queryResJSON)

	return (
		<div className='w-[100%] h-[100px]
		fn mx-auto mt-[20px] text-center
		border p-4 rounded-2xl border-[#444] ltr-jump overflow-y-auto fixed top-0 left-0'>
			
			{searchQueryStore.queryRes.length === 0 && 
			<div>
				ничего не найдено
			</div>}
			
		{searchQueryStore.queryRes.length > 0 && 
			queryResJSON.map((e, idx) => (
				<div key={idx}>
					<Chat 
					username={e.username}
					roomID={e.roomID}
					ava=''
					/>
				</div>
			)) 
		}


		</div>
	)
}

export default observer(HeaderSearchRes)