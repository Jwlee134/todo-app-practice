import React from "react";
import Add from "./Add";
import { useState } from "../context";
import List from "./List";
import ToDo from "./ToDo";

const App = () => {
  const { toDos, done } = useState();
  return (
    <>
      <Add />
      <List name={"To Do"}>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} isDone={false} />
        ))}
      </List>
      <List name={done.length !== 0 ? "Done" : ""}>
        {done.map((toDo) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} isDone={true} />
        ))}
      </List>
    </>
  );
};

export default App;
