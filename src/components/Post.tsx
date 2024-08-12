import React, { FC } from 'react'
import { IPost } from '../types/types';

interface PostPrompt{
  post:IPost,
  update:(post:IPost)=>void,
  remove:(post:IPost)=>void
}

 const Post:FC<PostPrompt> = ({post,update,remove}) =>{

  const handlerUpdate = (event:React.MouseEvent)=>{
    let name = prompt() || '';
    update({...post,name})
  }

  const deletePost =(event:React.MouseEvent)=>{
    event.stopPropagation()
    remove(post)
  }
  return (
    <div  onClick={handlerUpdate}>
        <h2>{post.name}</h2>
        <div>{post.body}</div>
        <button onClick={deletePost}>Delete</button>
      </div>
  )
}

export  default Post;
