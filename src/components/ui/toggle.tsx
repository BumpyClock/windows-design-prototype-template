import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-spacing-2 rounded-medium win-type-body font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none whitespace-nowrap focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white aria-invalid:ring-red-600/20",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-fill-control hover:bg-opacity-40 data-[state=on]:bg-fill-accent data-[state=on]:bg-opacity-20 data-[state=on]:text-text-primary",
        outline:
          "border border-stroke-default bg-fill-control shadow-elevation-low hover:bg-opacity-80 data-[state=on]:bg-fill-accent data-[state=on]:text-text-on-accent",
      },
      size: {
        default: "h-8 px-spacing-2 min-w-8",
        sm: "h-7 px-spacing-1 min-w-7",
        lg: "h-10 px-spacing-3 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
