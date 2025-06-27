import { Loader } from './Loader'

export function FullDisplayLoader() {
	return (
		<div className='fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-100'>
			<Loader />
		</div>
	)
}
