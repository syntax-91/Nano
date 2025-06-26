import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { configStore } from '../../../app/store/app/configStore'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import HeaderSettings from './../../molecules/HeaderSettings'

function Settings() {
	const [url, setUrl] = useState('')

	const saveSettingsBgCurrentChat = () => {
		configStore.setBgCurrentChat(url)
	}

	return (
		<div
			className='fixed top-0 left-0  w-[100%] 
	h-[100%] flex justify-center items-center z-10 bg-blur3'
		>
			<div
				className='w-[100%] h-[100%] md:w-[550px] md:h-[450px] bbd md_borderP
		md:rounded-2xl || fn-3'
			>
				<HeaderSettings />

				<h2 className='text-center my-8 text-2xl'>фон для чата</h2>

				<div className='w-[70%] mx-auto'>
					<Input
						rhf={false}
						value={url}
						onChange={e => setUrl(e.target.value)}
						style='full'
						placeholder='введите URL на изображение..'
					/>
				</div>

				<Button
					location='center'
					label='сохранить..'
					w={520}
					max_w={70}
					onClick={saveSettingsBgCurrentChat}
				/>
			</div>
		</div>
	)
}

export default observer(Settings)
