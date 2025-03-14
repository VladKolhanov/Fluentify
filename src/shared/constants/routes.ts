export const Routes = {
	Home: '/',
	Dashboard: '/dashboard',
	SignIn: '/sign-in',
	SignUp: '/sign-up',
} as const

export type RoutesType = (typeof Routes)[keyof typeof Routes]
