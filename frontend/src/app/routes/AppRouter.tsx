import { Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalLoader from '../../components/atoms/globalLoader'
import { Loader } from '../../components/atoms/Loader'
import { NotSelectedChat } from '../../components/molecules/notSelectedChat'
import { routesConfig } from '../config/routesConfig'

// Lazy components

export function AppRouter() {
	const isMobile = useMediaQuery({ maxWidth: 700 })

	return (
		<BrowserRouter>
			<Routes>
				{/* Home */}
				<Route
					path={routesConfig.Home.path}
					element={
						<Suspense fallback={<GlobalLoader />}>
							<routesConfig.Home.element />
						</Suspense>
					}
				>
					<Route index element={<NotSelectedChat />} />

					{/* Chat */}
					<Route
						path={routesConfig.Chat.path}
						element={
							<Suspense fallback={<Loader />}>
								{isMobile ? (
									<routesConfig.Chat.element typeDevice='mobile' />
								) : (
									<routesConfig.Chat.element typeDevice='desktop' />
								)}
							</Suspense>
						}
					/>
				</Route>

				{/* NotFound */}

				<Route
					path={routesConfig.NotFound.path}
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<routesConfig.NotFound.element />
						</Suspense>
					}
				/>

				{/* Login */}
				<Route
					path={routesConfig.Login.path}
					element={
						<Suspense fallback={<p>Loading...</p>}>
							<routesConfig.Login.element />
						</Suspense>
					}
				/>

				{/* Register */}

				<Route
					path={routesConfig.register.path}
					element={
						<Suspense fallback={<GlobalLoader />}>
							<routesConfig.register.element />
						</Suspense>
					}
				/>

				{/* user/ */}
				<Route
					path={routesConfig.u.path}
					element={
						<Suspense fallback={<GlobalLoader />}>
							<routesConfig.u.element />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
