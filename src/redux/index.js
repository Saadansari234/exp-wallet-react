import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or any other storage engine

import RootReducer from "./reducers/Rootreducer";

// Configuring Redux Persist
const persistConfig = {
  key: "EXP_tracker",
  storage,
  // You can configure other options here, such as blacklist or whitelist.
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

// Creating the Redux store with Redux Persist middleware
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { store, persistor };