import React, { FC } from "react";
import styles from "./Card.module.css";
import { CardVariant } from "./constants";

interface CardProps {
  width: string;
  height: string;
  variant: CardVariant;
}

export const Card: FC<CardProps> = ({ width, height, variant, children }) => {
  return (
    <div
      style={{ height, width }}
      className={[styles.card, styles[variant]].join(" ")}
    >
      {children}
    </div>
  );
};
