import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Shared visual invariants are merged after local layout classes.
const buttonAppearance = "rounded-none border border-foreground/40 bg-background text-foreground shadow-none transition-none [&_*]:!transition-none whitespace-normal leading-relaxed min-h-11 hover:!bg-foreground hover:!text-background hover:!border-foreground [&:hover_*]:!text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 aria-pressed:border-primary aria-pressed:bg-primary/10 aria-expanded:border-primary aria-[current=step]:border-primary aria-[current=step]:bg-primary/10 data-[state=active]:border-primary data-[state=active]:bg-primary/10 disabled:pointer-events-none disabled:opacity-40";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-sm font-semibold ring-offset-background [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline: "",
        secondary: "",
        ghost: "",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-auto px-4 py-2",
        sm: "h-auto px-3 py-2",
        lg: "h-auto px-8 py-3",
        icon: "h-11 w-11 min-w-11 p-0",
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
    return <Comp className={cn(buttonVariants({ variant, size }), className, buttonAppearance,
      size === "icon" && "h-11 w-11 min-w-11",
      variant === "destructive" && "border-destructive text-destructive",
      variant === "link" && "border-transparent bg-transparent text-primary hover:bg-transparent hover:text-primary hover:border-transparent")}
      ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants, buttonAppearance };
