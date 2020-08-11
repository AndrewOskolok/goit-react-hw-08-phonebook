import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== "production",
// });

export default store;
