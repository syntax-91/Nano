import cs from 'js-cookie'
import { modalStore } from '../../app/store'

export function logOutU() {
	cs.remove('userName_nano')
	cs.remove('isAuth_nano')

	modalStore.run('вы вышли из аккаунта', true, 3000)

	setTimeout(() => {
		location.href = ''
	}, 1500)
}
