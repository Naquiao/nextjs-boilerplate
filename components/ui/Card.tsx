import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg border border-foreground/10 bg-background/50 backdrop-blur-sm p-6 shadow-sm ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`mb-4 ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <h3 ref={ref} className={`text-lg font-semibold ${className}`} {...props}>
        {children}
      </h3>
    )
  }
)

CardTitle.displayName = 'CardTitle'

const CardContent = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardTitle, CardContent } 