import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { RegisterFetch } from '../../../api/authAPI'
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
	const n = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserDataSubmit>({ mode: 'onChange' })

	const handleLogin = () => {
		n('/login')
	}

	const submit = (data: IUserDataSubmit) => {
		RegisterFetch(data)
		loadingStore.setLoading(true)
	}

	useEffect(() => {
		if (userDataStore.isAuth) {
			modalStore.run('Вы уже авторизованы!', true, 3000)
			setTimeout(() => {
				n('/')
			}, 1000)
		}
	}, [])

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className={clsx(
				'flex items-center justify-center w-[100%] h-[100vh] || ltr-jump_ot fixed',
				configStore.currentTheme == 'dark' ? '' : 'light'
			)}
		>
			{/* Modal */}
			{modalStore.isOpen === true && <Modal />}

			<div className='w-[85%] md:w-[300px] flex justify-center flex-col'>
				<h2 className='text-center text-3xl py-5 font-black'>Регистрация</h2>

				{/* UserName */}
				<div className='mb-2 w-[80%] mx-auto'>
					<Input
						style='full'
						rhf={true}
						placeholder='имя пользователя'
						theme={configStore.currentTheme == 'dark' ? 'dark' : 'light'}
						{...register('username', usernameSchema)}
					/>

					{errors?.username?.message && (
						<p
							className='text-red-500 
				text-center text-md font-stretch-50% '
						>
							{errors.username.message.toString()}
						</p>
					)}
				</div>

				{/* Register */}
				<div className='mb-2 w-[80%] mx-auto'>
					<Input
						style='full'
						rhf={true}
						placeholder='пароль'
						theme={configStore.currentTheme == 'dark' ? 'dark' : 'light'}
						{...register('password', passwordSchema)}
					/>

					{errors?.password?.message && (
						<p className='text-red-500 text-center text-md font-stretch-50% '>
							{errors.password.message.toString()}
						</p>
					)}
				</div>

				{/*  Link to Login */}
				<div
					className='my-3 hover:opacity-[0.7] w-[70%] mx-auto cursor-pointer '
					onClick={handleLogin}
				>
					<p>вход</p>
				</div>

				{/* btn to data submit */}
				<div className='mb-2 w-[80%] mx-auto'>
					<Button
						w={500}
						max_w={100}
						style='full'
						isBlock={true}
						location='center'
						disabled={loadingStore.loading}
						label='регистрация'
					/>
				</div>
			</div>
		</form>
	)
}

export default observer(Login)
