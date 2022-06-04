import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import ToDoReducer from "./todo-reducer";

const rootReducer = combineReducers({
  todo: ToDoReducer,
});

type rootReducerType = typeof rootReducer;
export type RootState = ReturnType<rootReducerType>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppDispatch = typeof store.dispatch;

export default store;
