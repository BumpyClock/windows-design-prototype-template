import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-8 w-full min-w-0 rounded-medium border border-stroke-default bg-fill-control px-spacing-3 py-spacing-2 win-type-body text-text-primary shadow-elevation-low transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:win-type-caption file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "placeholder:text-text-secondary selection:bg-fill-accent selection:text-text-on-accent",
        "hover:bg-opacity-80 focus:border-stroke-focus focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white",
        "aria-invalid:border-red-600 aria-invalid:ring-red-600/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
