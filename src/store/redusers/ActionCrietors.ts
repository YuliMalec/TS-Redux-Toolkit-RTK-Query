import {AppDispatch} from './../store'
import {userSlice} from './UserSlice'
import { IUser } from '../../types/types'
import axios from 'axios'
import { error } from 'console'


export const fetchUsers = ()=>async (dispatch:AppDispatch)=>{
try{
    dispatch(userSlice.actions.userFetching())
const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
dispatch(userSlice.actions.userFetchingSuccses(responce.data))

}catch{
dispatch(userSlice.actions.userFetchingError('error'))
}
}