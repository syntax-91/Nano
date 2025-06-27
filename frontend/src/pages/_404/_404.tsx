import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { configStore } from '../../app/store/app/configStore'

export default function NotFound() {
	const n = useNavigate()

	const clsMC =
		'w-[100%] h-[100vh] flex justify-center items-center font-bold flex-col'

	return (
		<div
			className={clsx(
				clsMC,
				configStore.currentTheme == 'dark' ? 'dark' : 'light'
			)}
		>
			<h2 className='text-2xl'>Not Found Page</h2>

			<p>
				go to{' '}
				<span className='cp' onClick={() => n('/')}>
					Home
				</span>
			</p>
		</div>
	)
}
