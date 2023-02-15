import { configureStore } from '@reduxjs/toolkit';
import getProductReducer from '../slice/slice';

const store = configureStore({
  reducer: {
    getProducts: getProductReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
//export const useAppDispatch: () => AppDispatch = useDispatch

