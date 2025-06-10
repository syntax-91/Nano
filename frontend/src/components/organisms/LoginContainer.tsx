import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginFetch } from '../../api/authAPI'
import { passwordSchema, usernameSchema } from '../../shared/schema/schema'
import type { TUser } from '../../shared/types/types'
import { Button } from '../atoms/Button'

export function LoginContainer() {

	const nav = useNavigate();
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange' })

	const submit = (data: TUser) => {
		LoginFetch(data)
		.then(e => { 
			if(e === true){ 
				nav('/')
			 } 
		})
	}

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className='w-[90%] sm:w-[400px] h-[350px] 
			 fn'
		>
			<h2 className='text-center py-[25px] text-4xl'>Login</h2>

			{/* UserName */}
			<div className='flex justify-center'>
				<input
					type='text'
					placeholder='Enter username'
					className='border border-[#444] w-[75%] py-5 px-9
					rounded-4xl outline-0 text-[13px] focus:border-[#848383]'
					{...register('username', usernameSchema)}
				/>
			</div>
			<p className='text-center  mt-2 text-red-600'>
				{errors?.username?.message}
			</p>

			{/* Password */}

			<div className='flex justify-center'>
				<input
					type='text'
					placeholder='Enter username'
					className='border border-[#444] w-[75%] py-5 px-9
					rounded-4xl outline-0 text-[13px] focus:border-[#848383]'
					{...register('password', passwordSchema)}
				/>
			</div>
			<p className='text-center  mt-2 text-red-600'>
				{errors?.password?.message}
			</p>

			{/* Btn */}
			<Button isBlock={true} location='center' label='submit' />
		</form>
	) 
}