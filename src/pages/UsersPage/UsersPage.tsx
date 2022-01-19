import React, { useEffect, useState } from "react";
import { List } from "../../components/List";
import { IUser } from "../../types";
import UserItem from "../../components/UserItem/UserItem";
import axios from "axios";
import { useFetching } from "../../hooks/useFetching/useFetching";
import { PageLoader } from "../../components/PageLoader";

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [getUsers, loading, getUsersError] = useFetching(async () => {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users/"
    );
    setUsers(response.data);
  });

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {getUsersError && <h1>Alert</h1>}
      {loading ? (
        <PageLoader />
      ) : (
        <List
          items={users}
          renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
        />
      )}
    </>
  );
};

export default UsersPage;
