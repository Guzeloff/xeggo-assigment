import React, { useState } from "react";

//MATERIAL UI
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import Alert from "@mui/material/Alert";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, logout } from "../store/slices/userSlice";
import SingleTodo from "./SingleTodo";
import { Navigate } from "react-router";

function Todo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const todos = useSelector((state) => state.todos);
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    if (todo === "") {
      setError(true);
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        todo: todo,
      };

      dispatch(addTodo(newTodo));
      setError(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    if (!user) {
      Navigate("/");
    }
  };
  return (
    <div className="todo__container">
      <h2>
        TODO LIST <FactCheckIcon color="secondary" />{" "}
      </h2>
      <div className="todo__wrapper">
        <p>NEW TODO:</p>
        <TextField
          fullWidth
          label="Add your todo"
          variant="standard"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button variant="contained" onClick={handleClick}>
          Add
        </Button>

        {error && <Alert severity="warning">Your todo cannot be empty</Alert>}

        <div className="todos__list">
          <p>My todos:</p>
          {todos.map((todo, index) => (
            <SingleTodo {...todo} key={index}></SingleTodo>
          ))}
        </div>
      </div>
      <div className="logout-btn">
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Todo;
