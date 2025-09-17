import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-3xl text-lg font-semibold transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[#ff8fb7] to-[#ff5f8f] text-white shadow-lg",
        secondary:
          "bg-gradient-to-br from-[#8af5ff] to-[#6fb7ff] text-[#122043] shadow-md",
        outline:
          "border-2 border-[#ff8fb7] text-[#ff4f8a] bg-white/80 backdrop-blur",
      },
      size: {
        default: "h-12 px-8",
        lg: "h-14 px-10 text-xl",
        sm: "h-10 px-6 text-base",
        icon: "h-12 w-12 text-2xl",
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
