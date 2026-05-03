import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-jisoi-amber focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-jisoi-amber text-jisoi-burgundy",
        secondary: "border-transparent bg-jisoi-burgundy text-white",
        outline: "border-jisoi-border text-jisoi-text",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
