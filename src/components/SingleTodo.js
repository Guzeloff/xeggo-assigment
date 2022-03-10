import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/slices/userSlice";

function SingleTodo(todo) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="single__todo">
      <p>{todo.todo}</p>{" "}
      <DeleteIcon
        color="secondary"
        className="todo__delete-icon"
        onClick={() => handleDelete(todo.id)}
      />
    </div>
  );
}

export default SingleTodo;
