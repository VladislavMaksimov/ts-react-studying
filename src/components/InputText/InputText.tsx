import React, { ChangeEventHandler, FC } from "react";
import styles from "./Input.module.css";

interface InputProps {
  value: string | undefined;
  placeholder?: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
}

export const InputText: FC<InputProps> = ({
  value,
  placeholder,
  changeHandler,
}) => {
  return (
    <input
      type={"text"}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      className={styles.input}
    />
  );
};
