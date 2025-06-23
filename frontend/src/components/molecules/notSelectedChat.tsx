import clsx from 'clsx'
import { configStore } from '../../app/store/app/configStore'

export function NotSelectedChat() {
	const cls =
		'px-5 py-3 rounded-2xl relative z-9 text-[14px] w-full h-[100vh] flex justify-center items-center'

	return (
		<div className={cls}>
			<div
				className={clsx(
					'font-normal px-8 py-3 rounded-2xl',
					configStore.currentTheme === 'dark' && 'bg-white/5',
					configStore.currentTheme === 'light' && 'bg-white/15 text-[#000]'
				)}
			>
				для начала общение нажмите на чат!
			</div>
		</div>
	)
}
