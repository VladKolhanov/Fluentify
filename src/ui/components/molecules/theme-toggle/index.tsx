'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { cn } from '@/shared/utils'
import { Button } from '@/ui/components/atoms/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/ui/components/atoms/dropdown-menu'
import { MoonIcon, SunIcon } from '@/ui/icons'

type Props = {
	className?: string
}

export const ThemeToggle = ({ className }: Props) => {
	const [isMounted, setIsMounted] = useState(false)
	const { setTheme } = useTheme()
	const t = useTranslations('ThemeToggleComponent')

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return <button className="size-0" />
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					className={
						(cn('focus-visible:ring-0 focus-visible:ring-offset-0'), className)
					}
					variant="ghost"
					size="icon"
				>
					<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>{t('appearance')}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => setTheme('light')}>
					<SunIcon /> {t('light')}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					<MoonIcon /> {t('dark')}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
