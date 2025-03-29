import { cn } from '@/shared/utils'

type Props = {
	className?: string
}

export const Footer = ({ className }: Props) => {
	return (
		<footer
			className={cn(
				'text-muted-foreground py-2 text-center text-sm',
				className
			)}
		>
			<p>© {new Date().getFullYear()} Fluentify. All rights reserved.</p>
		</footer>
	)
}
