import clsx from 'clsx'

interface props {
	on: boolean
	toggle?: () => void
}

export function Switch({ on, toggle }: props) {
	const clsMC = 'flex items-center w-15 h-8 bgA rounded-2xl cp tr3'

	const clsC = 'bgP h-8 w-8 rounded-full'
	const clsOn = 'ml-auto'
	const clsOff = 'mr-auto'

	return (
		<div onClick={toggle} className={clsMC}>
			<div className={clsx(on == true ? clsOn : clsOff, clsC)} />
		</div>
	)
}
