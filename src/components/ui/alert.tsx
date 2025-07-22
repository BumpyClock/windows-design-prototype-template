import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-medium border px-spacing-4 py-spacing-3 win-type-body grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-spacing-3 gap-y-spacing-1 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-layer-card border-stroke-card text-text-primary shadow-elevation-low",
        destructive:
          "bg-fill-system-critical-subtle border-stroke-system-critical text-fill-system-critical [&>svg]:text-current *:data-[slot=alert-description]:text-fill-system-critical/90",
        success:
          "bg-fill-system-success-subtle border-stroke-system-success text-fill-system-success [&>svg]:text-current *:data-[slot=alert-description]:text-fill-system-success/90",
        attention:
          "bg-fill-system-attention-subtle border-stroke-system-attention text-fill-system-attention [&>svg]:text-current *:data-[slot=alert-description]:text-fill-system-attention/90",
        caution:
          "bg-fill-system-caution-subtle border-stroke-system-caution text-fill-system-caution [&>svg]:text-current *:data-[slot=alert-description]:text-fill-system-caution/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-spacing-4 win-type-body-strong tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-text-secondary col-start-2 grid justify-items-start gap-spacing-1 win-type-caption [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
