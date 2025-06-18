import { ScreenLoaderMsg } from './ScreenLoaderMsg'

export function ScreenLoaderMsgs(){

	return (
	<div className='w-[100%] h-[100%] bg-black flex items-end pb-10'>

		<div className='w-[95%] mx-auto'>
			<ScreenLoaderMsg location='left' 
				w={270} />
		
		<ScreenLoaderMsg location='left' 
				w={100} />

		<ScreenLoaderMsg location='right' 
				w={250} />

		<ScreenLoaderMsg location='left' 
				w={220} />
		
		<ScreenLoaderMsg location='left' 
				w={240} />

		<ScreenLoaderMsg location='right' 
				w={200} />
								
		</div>

	</div>
	)
}