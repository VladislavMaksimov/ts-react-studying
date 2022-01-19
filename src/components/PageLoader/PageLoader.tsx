import React from "react";
import { Loader } from "../Loader";
import { LoaderSize } from "../Loader/constants";
import styles from "./PageLoader.module.css";

export const PageLoader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Loader size={LoaderSize.lg} />
    </div>
  );
};
