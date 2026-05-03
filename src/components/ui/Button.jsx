import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jisoi-amber focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-jisoi-amber text-jisoi-burgundy hover:bg-jisoi-amber/90",
        secondary: "bg-jisoi-burgundy text-white hover:bg-jisoi-burgundy/90",
        outline: "border border-jisoi-border bg-transparent hover:bg-jisoi-cream",
        ghost: "hover:bg-jisoi-cream",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        pill: "h-12 px-8 rounded-full text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
