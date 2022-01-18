import React, { FC } from "react";
import { IUser } from "../../types";
import styles from "./UserItem.module.css";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className={styles.user}>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
      {user.address.street}.
    </div>
  );
};

export default UserItem;
