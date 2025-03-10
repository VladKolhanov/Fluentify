import { type LayoutProps } from '@/types/app'
import { Header } from '@/ui/components/organisms/header'

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
			<Header />
			{children}
		</div>
	)
}
