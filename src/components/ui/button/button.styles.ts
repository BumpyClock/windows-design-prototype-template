// ABOUTME: Button styles extracted from inline styles for better maintainability
import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded cursor-pointer win-type-body font-normal transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--colors-stroke-focus-outer)] relative overflow-hidden text-center text-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--colors-fill-accent-default)] text-[var(--colors-text-on-accent-primary)] border border-[var(--colors-stroke-control-on-accent-default)] border-solid hover:bg-[var(--colors-fill-accent-secondary)] active:bg-[var(--colors-fill-accent-tertiary)] transition-colors",
        destructive:
          "bg-[var(--colors-fill-system-critical)] text-[var(--colors-text-on-accent-primary)] hover:opacity-90 active:opacity-80",
        outline:
          "border border-[var(--colors-stroke-control-default)] bg-[var(--colors-fill-control-default)] text-[var(--colors-text-primary)] hover:bg-opacity-80 active:bg-opacity-60",
        secondary:
          "bg-[var(--colors-fill-control-default)] text-[var(--colors-text-primary)] hover:bg-opacity-80 active:bg-opacity-60",
        ghost:
          "text-[var(--colors-text-primary)] hover:bg-[var(--colors-fill-control-default)] hover:bg-opacity-40 active:bg-opacity-60",
        link: "text-[var(--colors-fill-accent-text-primary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "min-w-[96px] h-8 pb-[7px] pt-[5px] px-3",
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

