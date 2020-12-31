import React from "react";
import { DEL, DONE, RETURN } from "../actions";
import { useDispatch } from "../context";

const ToDo = ({ text, id, isDone }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      <button onClick={() => dispatch({ type: DEL, payload: id })}>DEL</button>
      <button
        onClick={() => dispatch({ type: isDone ? RETURN : DONE, payload: id })}
      >
        {isDone ? "RETURN" : "DONE"}
      </button>
    </li>
  );
};

export default ToDo;
