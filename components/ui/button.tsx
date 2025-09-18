import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,_#ffd54a_0%,_#ff8e3c_42%,_#ff63e2_100%)] text-[var(--primary-foreground)] shadow-[0_22px_55px_-28px_rgba(255,104,232,0.75)]",
        secondary:
          "border border-[rgba(139,84,255,0.45)] bg-[rgba(26,12,58,0.75)] text-[#f0eaff] shadow-[0_18px_40px_-32px_rgba(95,63,204,0.6)]",
        outline:
          "border border-[rgba(255,214,74,0.65)] bg-transparent text-[#ffd54a] shadow-[0_0_0_2px_rgba(255,214,74,0.15)]",
      },
      size: {
        default: "h-12 px-9",
        lg: "h-14 px-12 text-xl",
        sm: "h-10 px-6 text-sm",
        icon: "h-11 w-11 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "will-change-transform active:translate-y-0.5",
          buttonVariants({ variant, size, className }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
