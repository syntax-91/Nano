import { AiOutlineDown } from 'react-icons/ai'

interface IProps {
	ref:React.RefObject<HTMLDivElement | null>
}

export function ScrollBtn(
	{
		ref
	}:IProps
){

	const handleClick = () => {
		ref.current?.scrollIntoView({
			behavior: 'smooth'
		})
	}

	return (
	<div className='bg-[#1b1a1a] w-14 h-14 flex justify-center items-center rounded-full'>

		<AiOutlineDown 
		onClick={handleClick}
		size={50} 
		/>
	</div>
	)
}