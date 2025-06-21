import clsx from 'clsx'
import { sharedStore } from '../../app/store/shared/sharedStore'

export function NotSelectedChat() {
	const cls = 'px-5 py-3 rounded-2xl relative z-9 text-[14px]'

	return (
		<div>
			<div
				className={clsx(
					cls,
					'font-normal',
					sharedStore.currentTheme === 'dark' && 'bg-white/5',
					sharedStore.currentTheme === 'light' && 'bg-black/80 text-[#fbf4f4]'
				)}
			>
				для начала общение нажмите на чат!
			</div>
		</div>
	)
}
