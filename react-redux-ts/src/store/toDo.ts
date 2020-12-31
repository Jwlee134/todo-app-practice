import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ToDoItem {
  text: string | undefined;
  id: string | undefined;
}

interface ToDos {
  toDos: ToDoItem[];
  dones: ToDoItem[];
}

const initialState: ToDos = {
  toDos: [],
  dones: [],
};

const toDoSlice = createSlice({
  name: "ToDos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.toDos.push({ text: action.payload, id: uuidv4() });
    },
    remove: (state, action) => {
      state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload);
      state.dones = state.dones.filter((done) => done.id !== action.payload);
    },
    done: (state, action) => {
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      const doneItem: ToDoItem = {
        text: target?.text,
        id: target?.id,
      };
      state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload);
      state.dones.push(doneItem);
    },
    back: (state, action) => {
      const target = state.dones.find((done) => done.id === action.payload);
      const backItem: ToDoItem = {
        text: target?.text,
        id: target?.id,
      };
      state.dones = state.dones.filter((done) => done.id !== action.payload);
      state.toDos.push(backItem);
    },
  },
});

export const { add, remove, done, back } = toDoSlice.actions;

export default toDoSlice.reducer;
