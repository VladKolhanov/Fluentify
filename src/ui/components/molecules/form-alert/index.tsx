import { type generateActionState } from '@/shared/utils'
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from '@/ui/components/atoms/alert'
import { ShieldCheckIcon, ShieldXIcon } from '@/ui/icons'

type Props = {
	status: Parameters<typeof generateActionState>['0']
	message: Parameters<typeof generateActionState>['1']
}

export const FormAlert = ({ status, message, ...props }: Props) => {
	return (
		<Alert variant={status === 'error' ? 'destructive' : 'default'} {...props}>
			{status === 'error' && <ShieldXIcon />}
			{status === 'success' && <ShieldCheckIcon />}
			<AlertTitle className="first-letter:uppercase">{status}!</AlertTitle>
			<AlertDescription className="first-letter:uppercase">
				{message}
			</AlertDescription>
		</Alert>
	)
}
