import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./store/toDo";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(add(value));
    setValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add To Do"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default Form;
