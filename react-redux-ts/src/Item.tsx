import React from "react";
import { useDispatch } from "react-redux";
import { back, done, remove } from "./store/toDo";

interface ItemProps {
  item: {
    text: string | undefined;
    id: string | undefined;
  };
  isToDo: boolean;
}

const Item = ({ item, isToDo }: ItemProps) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{item.text}</span>
      <button onClick={() => dispatch(remove(item.id))}>X</button>
      <button onClick={() => dispatch(isToDo ? done(item.id) : back(item.id))}>
        {isToDo ? "V" : "«"}
      </button>
    </li>
  );
};

export default Item;
