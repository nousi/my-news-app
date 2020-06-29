import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/user";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
