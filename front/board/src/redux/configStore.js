import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import { createBrowserHistory } from "history"
import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

import User from './modules/user';

// 리듀서들을 한곳으로 모으는 콤바인(결합) 함수
const rootReducer = combineReducers({
    user: User,
    router: connectRouter(history),
});

// 미들웨어 선언
const middlewares = [thunk.withExtraArgument({history})];

const env = process.env.NODE_ENV;

if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}


const composeEnhancers = 
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    :compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
);

let store = (initialStore) => createStore(rootReducer,enhancer )

export default store();