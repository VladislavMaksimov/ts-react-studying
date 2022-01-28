import React, { FC } from "react";
import styles from "./InputForm.module.css";

const InputsForm: FC = ({ children }) => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.form}>{children}</div>
    </div>
  );
};

export default InputsForm;
