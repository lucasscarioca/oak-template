import { BrowserRouter, Route, Routes } from 'react-router'
import { PublicLayout } from '@/layouts/public'
import { Home } from '@/pages/home'

export function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PublicLayout />}>
					<Route index element={<Home />} />
				</Route>

				{/* <Route element={<AuthLayout />}>
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
				</Route> */}

				{/* <Route path='app' element={<PrivateLayout />}>
					<Route path='dashboard' element={<Dashboard />} />
					<Route path='profile' element={<Profile />} />
				</Route> */}

				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	)
}

function ErrorPage() {
	return <h1>404</h1>
}
