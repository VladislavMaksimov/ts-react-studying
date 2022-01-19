import React, { ChangeEventHandler, FC } from "react";
import { List } from "../../../components/List";
import { IUser } from "../../../types";
import UserItem from "../../../components/UserItem/UserItem";
import styles from "./index.module.css";
import { InputText } from "../../../components/InputText";

interface UsersPageBodyProps {
  users: IUser[];
  searchWord: string;
  setSearchWord: ChangeEventHandler<HTMLInputElement>;
}

const UsersPageBody: FC<UsersPageBodyProps> = ({
  users,
  searchWord,
  setSearchWord,
}) => {
  return (
    <div className={styles.pageBody}>
      <InputText
        value={searchWord}
        placeholder={"Search"}
        changeHandler={setSearchWord}
      />
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </div>
  );
};

export default UsersPageBody;
