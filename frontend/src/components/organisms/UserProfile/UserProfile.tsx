import { useParams } from 'react-router-dom'
import { Button } from '../../atoms/Button'



export default function UserProfile(){

	const { username } = useParams<string>()


	const handleClickBtn = () => {

	}

	return (
<div className='w-[100vw] h-[100vh]  mx-auto flex justify-center items-center'>

	<div className=' shw rounded-2xl'>
		
		{/* username */}
		<h2
		className='text-center my-10 text-2xl'
		>{username}</h2>

		{/* AVA */}
		<div className='w-[100px] h-[100px] 
			bg-white/5 mx-auto mt-5 rounded-full 			
				flex justify-center items-center text-2xl'>
			<img src='s' alt="img" />
		</div>

		{/* description */}
		<div className='w-[70%] h-10 mx-auto mt-10 mb-10'>
			<h3>описание:</h3>
			<h2
			className='text-center'
			>{/*userData.description ||*/ 'пусто'}</h2>
		</div>

		<div className='my-20'>
			<Button 
			isBlock={true}
			location='center'	
			label='написать'
			onClick={handleClickBtn}
			/>
		</div>

	</div>

</div>
	)

}