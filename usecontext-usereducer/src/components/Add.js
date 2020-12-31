import React, { useState } from "react";
import { ADD } from "../actions";
import { useDispatch } from "../context";

const Add = () => {
  const [toDo, setToDo] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: toDo });
    setToDo("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setToDo(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add to do"
        value={toDo}
        onChange={onChange}
      />
    </form>
  );
};

export default Add;
