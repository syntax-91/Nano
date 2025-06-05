import axios from 'axios'
import Cookies from 'js-cookie'
import { modalStore } from '../app/store'
import { loadingStore } from '../app/store/app/loadingStore'
import type { IUserDataSubmit } from '../shared/types/types'
 
export async function LoginFetch(data: IUserDataSubmit) {
	try {
	 
		const res = await axios.post('http://localhost:3000/auth/login', data)

		console.info("req.body > ", data)

		console.info("ответ dataAPI > ", res.data)

		if (res.data.success) {
			Cookies.set('isAuth_nano', res.data.success, { expires: 7 })

			Cookies.set('userName_nano', data.username, { expires: 7 })

			location.href = '/'

			loadingStore.setLoading(false)
			modalStore.run(res.data.msg, res.data.success)
			return res.data.success
		}

 
		modalStore.run(res.data.msg, res.data.success)
		loadingStore.setLoading(false)

		console.info(res.data)
	} catch (err) {
		console.error('ERROR: ', err)
	} finally {
		loadingStore.setLoading(false)
	}
}


/* create ACCESS */
export async function createACCESS(){
	try {
		const REFRESH_TOKEN = Cookies.get('syntax_chat_REFRESH_TOKEN');
		
		console.log("DD: ", REFRESH_TOKEN)

		const res = await axios.post('http://localhost:3000/createACCESS', REFRESH_TOKEN)

		console.info("ответ dataAPI > ", res.data)

		if(!res.data.accessValid){
			console.error('refresh истёк...')
		}

	} catch(err){
		console.error("ERROR > ", err)
	}
}