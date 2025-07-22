import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-medium border border-stroke-default bg-fill-control px-spacing-3 py-spacing-2 win-type-body text-text-primary shadow-elevation-low transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "placeholder:text-text-secondary",
        "hover:bg-opacity-80 focus:border-stroke-focus focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white",
        "aria-invalid:border-red-600 aria-invalid:ring-red-600/20",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
