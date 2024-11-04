/* eslint-disable prettier/prettier */
// store.ts
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

// Import your reducers here

import loginReducer from './apps/LoginSlice';
import profileReducer from './apps/ProfileSlice';

const rootReducer = combineReducers({
  // Add your reducers here
  login: loginReducer,
  profile: profileReducer,
});

const persistConfig = {
  key: 'rootApp',
  storage: AsyncStorage,
  // Optionally, you can whitelist or blacklist specific reducers
  // whitelist: ['reducer1', 'reducer2']
  // blacklist: ['reducerToExclude']
  whitelist: ['login', 'profile'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
