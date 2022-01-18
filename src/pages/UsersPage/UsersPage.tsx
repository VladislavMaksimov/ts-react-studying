import React, { useEffect, useState } from "react";
import { List } from "../../components/List";
import { IUser } from "../../types";
import UserItem from "../../components/UserItem/UserItem";
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
  );
};

export default UsersPage;
