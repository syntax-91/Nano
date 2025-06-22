import { ScreenBlock } from './ScreenBlock'

export function ScreenMsgs() {
	return (
		<div className='w-[100%] h-[100%] flex items-end pb-10'>
			<div className='w-[95%] mx-auto'>
				<ScreenBlock location='left' w={270} />

				<ScreenBlock location='left' w={100} />

				<ScreenBlock location='right' w={250} />

				<ScreenBlock location='left' w={220} />

				<ScreenBlock location='left' w={240} />

				<ScreenBlock location='right' w={200} />
			</div>
		</div>
	)
}
