import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--colors-fill-flyout)",
          "--normal-text": "var(--colors-text-primary)",
          "--normal-border": "var(--colors-stroke-surface)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-fill-flyout group-[.toaster]:text-text-primary group-[.toaster]:border-stroke-surface group-[.toaster]:shadow-elevation-flyout group-[.toaster]:rounded-medium",
          description: "group-[.toast]:text-text-secondary",
          actionButton:
            "group-[.toast]:bg-fill-accent group-[.toast]:text-text-on-accent",
          cancelButton:
            "group-[.toast]:bg-fill-subtle group-[.toast]:text-text-primary",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
