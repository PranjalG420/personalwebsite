import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const variants = cva("font-regular md:text-sm text-xs", {
  variants: {
    variant: {
      primary:
        "px-16 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-sm md:text-base text-sm font-medium",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(variants({ variant, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
