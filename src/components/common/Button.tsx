import type { FC, PropsWithChildren } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "light" | "primary";
};

import classes from "./Button.module.css";

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <button
      className={`${classes.button} ${variant === "light" && classes.light}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
