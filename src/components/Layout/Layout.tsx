import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Layout.module.css";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/todos"}>Todos</NavLink>
        <NavLink to={"/inputs"}>Inputs</NavLink>
      </header>
      <main>{children}</main>
    </>
  );
};
