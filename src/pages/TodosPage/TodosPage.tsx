import React, { useEffect, useState } from "react";
import { ITodo } from "../../types";
import axios from "axios";
import { List } from "../../components/List";
import TodoItem from "../../components/TodoItem/TodoItem";

const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  async function getTodos() {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/todos?_limit=20"
      );
      setTodos(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
