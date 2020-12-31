import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, PERSIST } from "redux-persist";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PERSIST],
    },
  }),
});

export const persistor = persistStore(store);

export default store;
