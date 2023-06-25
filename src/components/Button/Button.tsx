import React, { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { IconType } from "react-icons/lib";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  icon?: IconType;
}

const buttonVariants = cva(
  "w-full cursor-pointer inline-flex items-center justify-center p-4 rounded-lg text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 !font-bold",
  {
    variants: {
      variant: {
        primary: "bg-rose-600 text-white hover:bg-rose-700 text-xl",
        ghost:
          "cursor-pointer bg-transparent w-full text-rose-600 rounded-lg text-xl",
        outline:
          "bg-transparent border-2 border-zinc-800 text-zinc-800 text-xl",
      },
    },
  }
);

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  icon: Icon,
  ...props
}) => {
  return (
    <button
      className={`${className && className} ${buttonVariants({ variant })}`}
      {...props}
    >
      {!!Icon && <Icon size={24} className="mr-8" />}
      {children}
    </button>
  );
};

export default Button;
