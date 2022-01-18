import React, { useState } from "react";
import styles from "./Input.module.css";

export const Input = () => {
  const [value, setValue] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      type={"text"}
      value={value}
      onChange={changeHandler}
      className={styles.input}
    />
  );
};
