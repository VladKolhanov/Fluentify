import { LogoIcon } from '@/ui/icons'

export const Logo = () => {
	return (
		<div className="flex-center gap-2">
			<LogoIcon className="size-10 md:size-12" />
			<span className="font-bree bg-gradient-to-r from-green-700 via-green-500 to-green-900 bg-clip-text text-2xl text-transparent md:text-3xl">
				Fluentify
			</span>
		</div>
	)
}
