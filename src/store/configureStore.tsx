import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

const appReducer = combineReducers({
  // add reducers here
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const store = configureStore({
  reducer: {
    rootReducer: rootReducer,
    // add reducers here
  },
  // Removes non-serializable errors
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

type TypedDispatch = ThunkDispatch<RootState, any, any>;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
