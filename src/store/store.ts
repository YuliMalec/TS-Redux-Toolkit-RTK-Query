import {configureStore,combineReducers} from '@reduxjs/toolkit';
import UserReduser from './redusers/UserSlice'
import { postApi } from '../service/PostService';

const rootReduser = combineReducers({
UserReduser,
[postApi.reducerPath]:postApi.reducer
})

export const SetupStore =()=>{
 return   configureStore({
        reducer:rootReduser,
        middleware:(getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postApi.middleware)
        
    })
}


export type RootState = ReturnType<typeof rootReduser>
export type AppStore =ReturnType<typeof SetupStore>
export type AppDispatch = AppStore['dispatch']
