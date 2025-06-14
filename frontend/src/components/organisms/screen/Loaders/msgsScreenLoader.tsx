import { ScreenLoaderMsg } from './ScreenLoaderMsg'

export function ScreenLoaderMsgs(){

	return (
	<div className='w-[100%] h-[100%] bg-black  left-0 top-0 flex justify-center mt-auto items-end pb-10'>

		<div
		className='w-[95%]'
		>
			{Array.from({ length: 3 })
			.map((_, idx) => (
			<div key={idx}>
				<ScreenLoaderMsg location='left' />
				<ScreenLoaderMsg location='right' />
			</div>
		))}
		</div>

	</div>
	)
}