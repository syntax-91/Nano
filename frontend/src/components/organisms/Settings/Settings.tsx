import { observer } from 'mobx-react-lite'
import HeaderSettings from './../../molecules/HeaderSettings'

function Settings() {
	return (
		<div
			className='fixed top-0 left-0  w-[100%] 
	h-[100%] flex justify-center items-center z-10 bg-blur3'
		>
			<div
				className='w-[100%] h-[100%] md:w-[550px] md:h-[450px] bbd borderP
		md:rounded-2xl || fn-3'
			>
				<HeaderSettings />
			</div>
		</div>
	)
}

export default observer(Settings)
