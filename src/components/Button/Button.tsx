import React, { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const buttonVariants = cva(
  "w-full cursor-pointer inline-flex items-center justify-center rounded-lg text-sm font-medium transition-color focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 !font-bold",
  {
    variants: {
      variant: {
        primary: "bg-rose-600 text-white hover:bg-rose-700 p-4 text-xl",
        ghost:
          "cursor-pointer bg-transparent w-full py-4 text-rose-600 rounded-lg text-xl",
      },
    },
  }
);

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  ...props
}) => {
  return (
    <button className={`${buttonVariants({ variant })}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
