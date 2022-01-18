import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route index element={<div />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
