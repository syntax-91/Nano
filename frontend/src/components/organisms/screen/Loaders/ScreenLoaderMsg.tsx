import clsx from 'clsx'

interface props {
	location: 'left'|'right'
} 

export function ScreenLoaderMsg(
	{ location }:props
){

	return (
	<div className={clsx(
		location === 'left' && 'justify-start',
		location === 'right' && 'justify-end',
		'w-[99%] mx-auto flex'
	)}>

		<div 
		className='bg-white/5 w-[290px] h-12 my-2
		rounded-full relative flex items-center justify-cent_er animate-pulse max-w-[80%]'
		>
						
		<div className='w-[100%] rounded-4xl flex items-center bg-white/30 ws h-[90%]'>
			<h5 className='text-[#c3c3c3] p-2'/>
		</div> 		
		
		</div>
	</div>
	)
}
