import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, change, remove, submit } from "../modules/toDos";

const ToDos = () => {
  const { toDos, value } = useSelector((state) => state.toDos);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(submit(""));
    dispatch(add(value));
  };

  const onChange = (e) => {
    dispatch(change(e.target.value));
  };

  return (
    <>
      <h2>To Dos</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add To Do"
          value={value}
          onChange={onChange}
        />
      </form>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>
            <span>{toDo.text}</span>
            <button onClick={() => dispatch(remove(toDo.id))}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDos;
