import React, { FC } from "react";
import styles from "./Loader.module.css";
import { LoaderSize } from "./constants";

interface LoaderPropsType {
  size?: LoaderSize;
}

export const Loader: FC<LoaderPropsType> = ({ size = LoaderSize.md }) => {
  console.log(size);
  return <div className={`${styles.loader} ${styles[size]}`} />;
};
