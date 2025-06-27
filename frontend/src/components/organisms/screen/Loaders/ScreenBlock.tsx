import clsx from 'clsx'
import { configStore } from '../../../../app/store/app/configStore'

interface props {
	location: 'left' | 'right'
	w: number
}

export function ScreenBlock({ location, w = 290 }: props) {
	return (
		<div
			className={clsx(
				location === 'left' && 'justify-start',
				location === 'right' && 'justify-end',
				'w-[99%] mx-auto flex animate-pulse'
			)}
		>
			<div
				style={{ width: w }}
				className={clsx(
					' h-12 my-5 rounded-full relative flex items-center justify-cent_er animate-pulse max-w-[80%]',
					configStore.currentTheme == 'dark' ? 'bg-white/10' : 'bg-black/10'
				)}
			>
				<div
					className='w-[100%] rounded-4xl flex items-center bg-whit/20 ws 
		 h-[90%] _bg-[#737272]'
				></div>
			</div>
		</div>
	)
}
