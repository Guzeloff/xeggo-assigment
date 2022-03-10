import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Todo from "./components/Todo";
import NotFound from "./components/NotFound";

export const PrivateRoute = (children) => {
  const user = useSelector((state) => state.user);

  return user ? <Todo /> : <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route
            path="/todo"
            element={
              <PrivateRoute>
                <Todo />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
