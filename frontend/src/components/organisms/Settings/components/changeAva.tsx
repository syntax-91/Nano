import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import socket from '../../../../app/socket/socket'
import { configStore } from '../../../../app/store/app/configStore'
import { userDataStore } from '../../../../app/store/app/userData'
import Ava from '../../../atoms/ava'
import { Button } from '../../../atoms/Button'
import { Input } from '../../../atoms/Input'

function ChangeAva() {
	const clsMC = 'fn-3 mx-auto flex justify-center items-center'

	const [url, setUrl] = useState('')

	const handleChangeAva = () => {
		console.info('change-ava..')

		userDataStore.setUserData('ava', url)

		socket.emit('change', {
			type: 'ava',
			url: url,
			username: userDataStore.userName,
		})
	}

	return (
		<div className={clsMC}>
			{/* container */}
			<div className='borderP w-[50%] rounded-2xl p-2'>
				{/* AVA */}
				<div className='w-20 h-20 mx-auto my-8  rounded-full'>
					<Ava ava={userDataStore.dataMap.ava} />
				</div>

				<Input
					rhf={false}
					placeholder='Enter url (base64)'
					value={url}
					onChange={e => setUrl(e.target.value)}
					theme={configStore.currentTheme == 'dark' ? 'dark' : 'light'}
					style='full'
				/>

				<Button
					disabled={!url}
					label='submit'
					w={400}
					max_w={100}
					onClick={handleChangeAva}
				/>
			</div>
		</div>
	)
}

export default observer(ChangeAva)
