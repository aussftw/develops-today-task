import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/app-reducer';

const rootReducer = combineReducers({
  app: appReducer,
});

// type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
