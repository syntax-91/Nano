import _404Lazy from '../../pages/_404/NotFoundLazy'
import LoginLazy from '../../pages/Auth/Login/LoginLazy'
//import LoginLazy from '../../pages/auth/Login/LoginLazy'
import HomeLazy from '../../pages/Home/HomeLazy'
import { settingsLazy } from '../../pages/Settings/SettingsLazy'
//import LayoutLazy from '../../pages/Layout/LayoutLazy'

export const routesConfig = {
	Home: { path: '/', element: HomeLazy },
	//Login: { path: '/login', element: LoginLazy },
	NotFound: { path: '*', element: _404Lazy },
	Login: { path: '/login', element: LoginLazy },
	settings: { path: '/settings', element: settingsLazy }
}
