import { cn } from "@/lib/utils"

export function Container({ className, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1180px] px-4 sm:px-5 md:px-8", className)}
      {...props}
    />
  )
}
