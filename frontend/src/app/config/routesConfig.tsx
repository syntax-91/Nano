import { CurrentChatLazy } from '../../components/organisms/currentChat/currentChatLazy'
import { UserProfileLazy } from '../../components/organisms/UserProfile/UserProfileLazy'
import _404Lazy from '../../pages/_404/NotFoundLazy'
import LoginLazy from '../../pages/Auth/Login/LoginLazy'
import { RegisterLazy } from '../../pages/Auth/Register/RegisterLazy'
//import LoginLazy from '../../pages/auth/Login/LoginLazy'
import { TestLazy } from '../../components/organisms/test/testLazy'
import HomeLazy from '../../pages/Home/HomeLazy'
//import LayoutLazy from '../../pages/Layout/LayoutLazy'

export const routesConfig = {
	Home: { path: '/', element: HomeLazy },

	Chat: { path: 'chat/:roomID', element: CurrentChatLazy },

	NotFound: { path: '*', element: _404Lazy },

	Login: { path: '/login', element: LoginLazy },
	register: { path: '/register', element: RegisterLazy },

	// user
	u: { path: 'u/:username', element: UserProfileLazy },

	// test
	test: { path: '/test', element: TestLazy },
}
