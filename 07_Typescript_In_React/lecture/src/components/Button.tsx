import type { ButtonProps } from "../types";

function Button({variant = "primary", className = "", ...props}: ButtonProps) {
  return (
    <button className={`btn btn-${variant} ${className}`} {...props}>{props.children ? props.children : props.title}</button>
  )
}

export default Button;