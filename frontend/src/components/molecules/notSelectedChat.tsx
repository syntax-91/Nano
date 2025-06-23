import clsx from 'clsx'
import { configStore } from '../../app/store/app/configStore'

export function NotSelectedChat() {
	const cls = 'px-5 py-3 rounded-2xl relative z-9 text-[14px]'

	return (
		<div>
			<div
				className={clsx(
					cls,
					'font-normal',
					configStore.currentTheme === 'dark' && 'bg-white/5',
					configStore.currentTheme === 'light' && 'bg-white/15 text-[#000]'
				)}
			>
				для начала общение нажмите на чат!
			</div>
		</div>
	)
}
