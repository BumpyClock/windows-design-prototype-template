import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-medium font-text text-body font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black dark:focus-visible:ring-white relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-fill-accent text-text-on-accent shadow-elevation-low hover:bg-fill-accent-secondary active:bg-fill-accent-tertiary active:text-text-on-accent-secondary transition-colors",
        destructive:
          "bg-red-600 text-white shadow-elevation-low hover:bg-red-700 active:bg-red-800",
        outline:
          "border border-stroke-default bg-fill-control shadow-elevation-low hover:bg-opacity-80 active:bg-opacity-60",
        secondary:
          "bg-fill-control text-text-primary shadow-elevation-low hover:bg-opacity-80 active:bg-opacity-60",
        ghost:
          "hover:bg-fill-control hover:bg-opacity-40 active:bg-opacity-60",
        link: "text-fill-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "min-w-[96px] h-8 px-[11px] py-1",
        sm: "h-7 px-[11px] py-0.5",
        lg: "h-10 px-[11px] py-1.5",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={{
        border: '1px solid transparent',
        borderImageSource: 'linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 90.58%, rgba(0, 0, 0, 0.1622) 100%)',
        borderImageSlice: 1,
        borderRadius: 'var(--radii-medium)',
      }}
      {...props}
    />
  )
}

export { Button, buttonVariants }
