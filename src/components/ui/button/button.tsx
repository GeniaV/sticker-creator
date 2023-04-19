import React from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text?: string;
  type?: "button" | "submit" | "reset";
  isLoader?: boolean,
  buttonSize?: "small" | "big";
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  isLoader = false,
  disabled,
  buttonSize,
  ...rest
}) => {
  const className = `${styles.button} ${buttonSize && styles[buttonSize]} ${
    isLoader && styles.loader
  }`;

  return (
    <button
      className={className}
      type={type}
      disabled={isLoader || disabled}
      {...rest}
    >
      {isLoader ? (
        <div className={styles.ellipsis}><div></div><div></div><div></div><div></div></div>
      ) : (
        <>
          <p className={styles.text}>{text}</p>
        </>
      )}
    </button>
  );
};
