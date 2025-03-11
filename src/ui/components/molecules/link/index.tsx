import { Link as LinkI18n } from '@/i18n/navigation'
import { Button } from '@/ui/components/atoms/button'

type BaseProps = {
	href: string
}

type WrapperProps = BaseProps &
	React.ComponentProps<typeof LinkI18n> & {
		asWrapper: true
	}

type ButtonProps = BaseProps &
	Omit<React.ComponentProps<typeof Button>, 'asChild'> & {
		asWrapper?: false
	}

type Props = WrapperProps | ButtonProps

export const Link = (props: Props) => {
	if (props.asWrapper) {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { asWrapper, ...otherProps } = props

		return <LinkI18n {...otherProps}>{props.children}</LinkI18n>
	}

	return (
		<Button {...props} asChild>
			<LinkI18n href={props.href}>{props.children}</LinkI18n>
		</Button>
	)
}
