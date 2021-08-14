import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { epic } from "./epic";

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
     reducer,
     composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic as any);
