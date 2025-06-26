import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginFetch } from '../../../api/authAPI'
import { modalStore } from '../../../app/store'
import { configStore } from '../../../app/store/app/configStore'
import { loadingStore } from '../../../app/store/app/loadingStore'
import { userDataStore } from '../../../app/store/app/userData'
import { Button } from '../../../components/atoms/Button'
import { Input } from '../../../components/atoms/Input'
import Modal from '../../../components/molecules/modal'
import { passwordSchema, usernameSchema } from '../../../shared/schema/schema'
import type { IUserDataSubmit } from '../../../shared/types/types'

function Login() {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserDataSubmit>({ mode: 'onChange' })

	const handleReg = () => {
		navigate('/register')
	}

	const submit = (data: IUserDataSubmit) => {
		LoginFetch(data)
		loadingStore.setLoading(true)
	}

	useEffect(() => {
		if (userDataStore.isAuth) {
			modalStore.run('Вы уже авторизованы!', true, 3000)
			setTimeout(() => {
				window.location.href = '/'
			}, 1000)
		}
	}, [])

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className='flex items-center justify-center w-[100%] h-[100vh] fixed || ltr-jump_ot'
		>
			{modalStore.isOpen === true && <Modal />}

			<div className=' w-[85%] sm:w-[320px]'>
				<h2 className='text-center text-3xl py-5 font-black text-[#fff]/80'>
					Вход
				</h2>

				{/* username */}
				<div className='my-2 mx-auto w-[80%] '>
					<Input
						rhf={true}
						style='full'
						placeholder='имя пользователя'
						{...register('username', usernameSchema)}
						theme={configStore.currentTheme == 'dark' ? 'dark' : 'light'}
					/>

					{errors?.username?.message && (
						<p className='text-red-500 text-center text-md font-stretch-50% '>
							{errors.username.message.toString()}
						</p>
					)}
				</div>

				{/* PSW */}
				<div className='mb-2 mx-auto w-[80%]'>
					<Input
						rhf={true}
						placeholder='пароль'
						style='full'
						theme='dark'
						{...register('password', passwordSchema)}
					/>

					{errors?.password?.message && (
						<p className='text-red-500 text-center text-md font-stretch-50% '>
							{errors.password.message.toString()}
						</p>
					)}
				</div>

				{/* Link to Register */}
				<div
					className='my-3 hover:opacity-[0.5] w-[70%] mx-auto cursor-pointer'
					onClick={handleReg}
				>
					<p>Регистрация</p>
				</div>

				{/* data submit */}
				<div className='w-[80%] mx-auto'>
					<Button
						isBlock={true}
						location='center'
						style='full'
						w={500}
						max_w={100}
						label='вход'
						disabled={loadingStore.loading}
					/>
				</div>
			</div>
		</form>
	)
}

export default observer(Login)
