import { useState } from 'react'
import { configStore } from '../../../../app/store/app/configStore'
import { Button } from '../../../atoms/Button'
import { Input } from '../../../atoms/Input'
import { Switch } from '../../../atoms/Switch'

export function BgCurrentChat() {
	const [url, setUrl] = useState('')

	const saveSettingsBgCurrentChat = () => {
		configStore.setBgCurrentChat(url)
	}

	return (
		<div className='bbd borderP rounded-2xl my-5 p-5 w-[70%] mx-auto ltr-jump_ot'>
			<h2 className='text-center mb-10 text-2xl '>фон для чата</h2>

			<div className='mx-auto'>
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
				max_w={100}
				onClick={saveSettingsBgCurrentChat}
			/>

			<div className='flex items-center justify-center gap-2'>
				<h2 className='text-center my-4 text-2xl '>блюр: </h2>
				<Switch
					on={configStore.bgBlurCurrentChat}
					toggle={configStore.toggleBlurCurrentChat}
				/>
			</div>
			<p className='text-red-700 text-center  text-[13px]'>
				* осторожно с блюром так как устройство может лагать!
			</p>
		</div>
	)
}
