import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { QueryAPI } from '../../api/data'
import { configStore } from '../../app/store/app/configStore'
import { searchQueryStore } from '../../app/store/fetch/HeaderQuery'
import Chat from '../molecules/chat'

function QueryResult() {
	useEffect(() => {
		QueryAPI()
	}, [searchQueryStore.query])

	const clsC =
		'w-[100%] fn mx-auto mt-[20px] text-center px-3 py-1 rounded-2xl overflow-y-auto  border ltr-jump_ot'

	return (
		<div
			className={clsx(
				clsC,
				configStore.currentTheme == 'dark'
					? 'bbd border-gray-900'
					: 'border-gray-200 bbl'
			)}
		>
			{!searchQueryStore.queryRes.length && (
				<div className='py-10'>
					<p className='inline p-2 px-5 rounded-2xl'>ничего не найдено</p>
				</div>
			)}

			{searchQueryStore.queryRes.length > 0 &&
				searchQueryStore.queryRes.map((e, idx) => (
					<div key={idx}>
						<Chat username={e.username} roomID={e.roomID} ava='x' />
					</div>
				))}
		</div>
	)
}

export default observer(QueryResult)
