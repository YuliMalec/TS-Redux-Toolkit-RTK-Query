import React,{useEffect} from 'react';
import { userSlice } from './store/redusers/UserSlice';
import { useAppDispatch,useAppSelector } from './hooks/redux';

import './App.css';
import { fetchUsers } from './store/redusers/ActionCrietors';
import { postApi } from './service/PostService';
import { IPost } from './types/types';
import Post from './components/Post';

function App() {
 /*const {users,isLoading,error} = useAppSelector(state=>state.UserReduser)
  const dispatch = useAppDispatch()

  
  useEffect(()=>{
     dispatch(fetchUsers())
  },[])*/

    const handlerCreate = async() => {
    let name = prompt()
    await createPost({name,body:name} as IPost)
   }

   const update = (post:IPost)=>{
       updatePost(post)
   }
   const handlerDelete = (post:IPost)=>{
    deletePost(post)
   }
  
 const {data:posts} = postApi.useFetchAllPostQuery(15)
 const [createPost,{}] = postApi.useCreatePostMutation()
 const [updatePost,{}]=postApi.useUpdatePostMutation()
 const [deletePost,{}] = postApi.useDeletePostMutation()
 console.log()
  return (
    <div className="App">
      <button onClick={handlerCreate}>Add new post</button>
      <div className='posts'>
     {posts && posts.map(post=>
       <Post post={post} update={update} remove={handlerDelete}key={post.id}/>
     )}
     </div>
    </div>
  );
}

export default App;
