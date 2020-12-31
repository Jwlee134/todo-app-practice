import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import Item from "./Item";
import List from "./List";
import Movie from "./Movie";
import { RootState } from "./store/reducer";

const App = () => {
  const { toDos, dones } = useSelector((state: RootState) => state.toDos);

  return (
    <div className="App">
      <List name="To Dos">
        <Form />
        <ul>
          {toDos.map((toDo, index) => (
            <Item key={index} item={toDo} isToDo={true} />
          ))}
        </ul>
      </List>
      <List name={dones.length > 0 ? "Done" : ""}>
        <ul>
          {dones.map((done, index) => (
            <Item key={index} item={done} isToDo={false} />
          ))}
        </ul>
      </List>
      <Movie />
    </div>
  );
};

export default App;
