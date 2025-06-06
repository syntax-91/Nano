import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalLoader from '../../components/atoms/globalLoader'
import { routesConfig } from '../config/routesConfig'

// Lazy components

export function AppRouter() {
	return (
		<BrowserRouter> 
			<Routes>
				
				<Route
					path={routesConfig.Home.path}
					element={
						<Suspense fallback={<GlobalLoader />}>
							<routesConfig.Home.element />
						</Suspense>
					}>
					<Route index element={<routesConfig.Home.element />} />
				</Route>

		  

				<Route
					path={routesConfig.NotFound.path}
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<routesConfig.NotFound.element />
						</Suspense>
					}
				/> 
					<Route
						path={routesConfig.Login.path}
						element={
							<Suspense fallback={<p>Loading...</p>}>
								<routesConfig.Login.element />
							</Suspense>
						}
				/>
					<Route
						path={routesConfig.Login.path}
						element={
							<Suspense fallback={<p>Loading...</p>}>
								<routesConfig.Login.element />
							</Suspense>
						}
				/>

				<Route
					path={routesConfig.settings.path}
					element={
						<Suspense fallback={<GlobalLoader />}>
							<routesConfig.settings.element />
						</Suspense>
						}
				/>

			</Routes>
		</BrowserRouter>
	)
}
