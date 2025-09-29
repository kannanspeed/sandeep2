import { Info, Lightbulb, AlertTriangle, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CalloutProps {
  type: 'info' | 'tip' | 'warning' | 'success'
  children: React.ReactNode
  className?: string
}

const calloutConfig = {
  info: {
    icon: Info,
    className: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100',
    iconClassName: 'text-blue-500',
  },
  tip: {
    icon: Lightbulb,
    className: 'border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100',
    iconClassName: 'text-yellow-500',
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-orange-200 bg-orange-50 text-orange-900 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-100',
    iconClassName: 'text-orange-500',
  },
  success: {
    icon: CheckCircle,
    className: 'border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100',
    iconClassName: 'text-green-500',
  },
}

export function Callout({ type, children, className }: CalloutProps) {
  const config = calloutConfig[type]
  const Icon = config.icon

  return (
    <div className={cn(
      'flex gap-3 p-4 rounded-lg border',
      config.className,
      className
    )}>
      <Icon className={cn('h-5 w-5 flex-shrink-0 mt-0.5', config.iconClassName)} />
      <div className="text-sm [&>p]:leading-relaxed">
        {children}
      </div>
    </div>
  )
}


