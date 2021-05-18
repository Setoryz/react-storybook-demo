import { ReactNode } from "react";

export type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <button className={`button`} {...rest}>
      {rest.label}
    </button>
  );
};

export default Button;
