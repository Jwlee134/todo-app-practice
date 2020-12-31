import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toDoReducer from "./toDo";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["toDos"],
};

const rootReducer = combineReducers({
  toDos: toDoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
