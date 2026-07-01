import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md-modern",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "sss-primary": "bg-sss-blue-primary text-white hover:bg-sss-blue-dark hover:shadow-lg-modern hover:-translate-y-0.5 transition-all",
        "sss-secondary": "bg-sss-blue-50 text-sss-blue-primary hover:bg-sss-blue-light transition-all",
        "sss-gradient": "bg-gradient-to-r from-sss-blue-primary to-sss-blue-dark text-white hover:shadow-glow-sss hover:-translate-y-0.5 transition-all",
        "sss-glass": "bg-white/70 backdrop-blur-md border border-white/30 text-sss-blue-primary hover:bg-white/90 transition-all",
        "sss-outline": "border-2 border-sss-blue-primary text-sss-blue-primary bg-transparent hover:bg-sss-blue-primary hover:text-white transition-all",
        "modern-cta": "bg-gradient-to-r from-accent-coral to-[hsl(25_95%_60%)] text-white font-semibold hover:shadow-xl-modern hover:-translate-y-1 hover:scale-[1.02] transition-all",
        "carousel-pill": "bg-[hsl(206_65%_88%)] text-sss-blue-primary border border-[hsl(206_65%_78%)] hover:bg-[hsl(206_65%_82%)] hover:shadow-md transition-all font-semibold rounded-full",
        "carousel-pill-ghost": "bg-white/20 backdrop-blur-sm text-white border border-white/40 hover:bg-white/30 transition-all font-medium rounded-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-full px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
