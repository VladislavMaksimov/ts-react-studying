import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PageLoader } from "./components/PageLoader";

const UsersPage = lazy(() => import("./pages/UsersPage"));
const TodosPage = lazy(() => import("./pages/TodosPage"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/todos" element={<TodosPage />} />
            <Route index element={<div />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
