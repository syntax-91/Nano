import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginFetch } from '../../../api/authAPI'
import { modalStore } from '../../../app/store'
import { loadingStore } from '../../../app/store/app/loadingStore'
import { userDataStore } from '../../../app/store/app/userData'
import { Button } from '../../../components/atoms/Button'
import { Input } from '../../../components/atoms/Input'
import Modal from '../../../components/molecules/modal'
import { passwordSchema, usernameSchema } from '../../../shared/schema/schema'
import type { IUserDataSubmit } from '../../../shared/types/types'

function Login(){

	const navigate = useNavigate()
	

	const { register, handleSubmit, formState: { errors } } = useForm({'mode': 'onChange'});

	const handleReg = () => {
		navigate('/register')
	}

	const submit = (data: IUserDataSubmit) => {
		LoginFetch(data)
		loadingStore.setLoading(true);
	}

	useEffect(() => {
		if(userDataStore.isAuth){
			modalStore.run('Вы уже авторизованы!', true, 3000)
			setTimeout(() => {
				window.location.href = '/'
			}, 1000)
		}
	}, []) 

	return (
	<form 
	onSubmit={handleSubmit(submit)} 
	className='flex items-center justify-center w-[100%] h-[100vh] relative'>

		
	{modalStore.isOpen === true && 
		<Modal 
			msg={modalStore.msg}
			success={modalStore.success} /> }
			
		<div className='w-[80%] md:w-[300px]'>
			<h2 className='text-center text-3xl py-5'>Login</h2>
			
			{/* username */}
			<div className='mb-2 mx-auto w-[80%]'>
				
				<Input rhf={true} 
				placeholder='Enter username' 
				{	...register("username", usernameSchema) }
				/> 

				{errors?.username?.message && 
				<p className='text-red-500 text-center text-md font-stretch-50% '>
				{errors.username.message.toString()}
				</p>}

			</div>

					{/* PSW */}
		<div className='mb-2 mx-auto w-[80%]'>
			
			<Input rhf={true} 
			placeholder='Enter password'
			{...register("password", passwordSchema) } />
			
				{errors?.password?.message && 
				<p className='text-red-500 text-center text-md font-stretch-50% '>
				{errors.password.message.toString()}
				</p>}

		</div>

					{/* Link to Register */}
		<div className='my-3 hover:opacity-[0.5] w-[70%] mx-auto cursor-pointer' onClick={handleReg}> 
			<p>Register</p>
		</div>

					{/* data submit */}
		<div className='mb-2 mx-auto w-[80%]'>
			<Button isBlock={false} max_w={80} w={315} 
			disabled={loadingStore.loading} />
		</div>

		</div>
		</form>
	)
}

export default observer(Login);