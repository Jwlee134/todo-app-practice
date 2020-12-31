import { v4 as uuidv4 } from "uuid";
import { ADD, DEL, DONE, RETURN } from "./actions";

export const initialState = {
  toDos: [],
  done: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => {
          return toDo.id !== action.payload;
        }),
        done: state.done.filter((toDo) => {
          return toDo.id !== action.payload;
        }),
      };
    case DONE:
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => {
          return toDo.id !== action.payload;
        }),
        done: [...state.done, { ...target }],
      };
    case RETURN:
      const doneTarget = state.done.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        done: state.done.filter((toDo) => {
          return toDo.id !== action.payload;
        }),
        toDos: [...state.toDos, { ...doneTarget }],
      };
    default:
      throw new Error();
  }
};

export default reducer;
