import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  toDos: [],
  value: "",
};

const toDosSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.toDos.push({ text: action.payload, id: uuidv4() });
    },
    remove: (state, action) => {
      state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload);
    },
    change: (state, action) => {
      state.value = action.payload;
    },
    submit: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { add, remove, change, submit } = toDosSlice.actions;

export default toDosSlice.reducer;
