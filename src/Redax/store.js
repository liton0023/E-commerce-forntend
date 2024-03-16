import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({user:useReducer});

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
  };

  const persistedReduce = persistReducer(persistConfig, rootReducer);
  export const store = configureStore({
    reducer:persistedReduce,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
})

export const persistor = persistStore(store);