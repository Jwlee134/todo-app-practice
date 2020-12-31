import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import movies from "./movies";
import toDos from "./toDos";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["toDos"],
};

const rootReducer = combineReducers({
  movies,
  toDos,
});

export default persistReducer(persistConfig, rootReducer);
