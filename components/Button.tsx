import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const variants = cva("", {
  variants: {
    variant: {
      primary:
        "w-fit px-8 py-2 rounded border border-sky-300 text-sky-300 hover:bg-sky-950 md:text-base text-sm transition-colors",
      navbarLink: "hover:text-sky-300 md:text-base text-sm transition-colors",
      icon: "hover:text-sky-300 md:text-2xl text-lg",
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
