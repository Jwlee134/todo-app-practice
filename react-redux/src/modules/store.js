import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST"],
    },
  }),
});

export const persistor = persistStore(store);
