import { configureStore } from '@reduxjs/toolkit';

import reducers from './ducks';

export type RootState = ReturnType<typeof reducers>;

const store = configureStore({ reducer: reducers });

export type AppDispatch = typeof store.dispatch;

export default store;
