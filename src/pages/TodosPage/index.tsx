import React, { FC, useEffect, useState } from "react";
import { ITodo } from "../../types";
import axios from "axios";
import { List } from "../../components/List";
import TodoItem from "../../components/TodoItem/TodoItem";
import { useFetching } from "../../hooks/useFetching/useFetching";
import { PageLoader } from "../../components/PageLoader";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [getTodos, loading, getTodosError] = useFetching(async () => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/todos?_limit=20"
    );
    setTodos(response.data);
  });

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {getTodosError && <h1>Alert</h1>}
      {loading ? (
        <PageLoader />
      ) : (
        <List
          items={todos}
          renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
        />
      )}
    </>
  );
};

export default TodosPage;
