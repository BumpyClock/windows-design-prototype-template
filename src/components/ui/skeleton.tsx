import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-fill-subtle animate-pulse rounded-medium", className)}
      {...props}
    />
  )
}

export { Skeleton }
