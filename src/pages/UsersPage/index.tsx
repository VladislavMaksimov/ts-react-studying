import React, { useEffect, useState } from "react";
import { IUser } from "../../types";
import axios from "axios";
import { useFetching } from "../../hooks/useFetching/useFetching";
import { PageLoader } from "../../components/PageLoader";
import UsersPageBody from "./UsersPageBody";

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchWord, setSearchWord] = useState<string | undefined>(undefined);

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
        <UsersPageBody
          users={users}
          searchWord={searchWord}
          setSearchWord={(e) => setSearchWord(e.target.value)}
        ></UsersPageBody>
      )}
    </>
  );
};

export default UsersPage;
