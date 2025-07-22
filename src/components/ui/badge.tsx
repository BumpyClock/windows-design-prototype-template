import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-small border px-spacing-2 py-spacing-1 win-type-caption w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-spacing-1 [&>svg]:pointer-events-none focus-visible:border-stroke-accent focus-visible:ring-stroke-accent/50 focus-visible:ring-[3px] aria-invalid:ring-fill-system-critical/20 aria-invalid:border-fill-system-critical transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-fill-accent text-text-on-accent [a&]:hover:bg-fill-accent-hover",
        secondary:
          "border-transparent bg-fill-subtle text-text-primary [a&]:hover:bg-fill-subtle-hover",
        destructive:
          "border-transparent bg-fill-system-critical text-white [a&]:hover:bg-fill-system-critical-hover focus-visible:ring-fill-system-critical/20",
        outline:
          "text-text-primary border-stroke-default [a&]:hover:bg-fill-subtle [a&]:hover:text-text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
