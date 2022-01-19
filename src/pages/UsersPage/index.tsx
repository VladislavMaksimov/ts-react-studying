import React, { useEffect, useState } from "react";
import { IUser } from "../../types";
import axios from "axios";
import { useFetching } from "../../hooks/useFetching/useFetching";
import { PageLoader } from "../../components/PageLoader";
import UsersPageBody from "./UsersPageBody";
import { useFilteredArray } from "../../hooks/useFilteredArray/useFilteredArray";

const UsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");

  const filteredUsers = useFilteredArray(users, searchWord, (user) =>
    user.name.toLowerCase().includes(searchWord.toLowerCase())
  );

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
          users={filteredUsers}
          searchWord={searchWord}
          setSearchWord={(e) => setSearchWord(e.target.value)}
        />
      )}
    </>
  );
};

export default UsersPage;
