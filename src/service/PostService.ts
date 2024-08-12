import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IPost } from '../types/types'

export const postApi = createApi({
    reducerPath:'PostApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3001/'}),
    tagTypes: ['Post'],
    endpoints:(build)=>({
        fetchAllPost:build.query<IPost[],number>({
              query:(limit:number=5)=>({
                params:{
                    _limit:limit
                },
                url:'/posts'
              }),
              providesTags: result => ['Post']
        }),
        getPost:build.query<IPost,number>({
            query:(id)=>({url:`posts/${id}`}),
            providesTags: (result, error, id) => [{ type: 'Post', id }],
        }),
        createPost:build.mutation<IPost,IPost>({
             query:(post)=>({
                url:'/posts',
                method:'POST',
                body:post
             }),
             invalidatesTags:['Post']
                 
             
        }),
        updatePost:build.mutation<IPost,IPost>({
            query:(post)=>({
                url:`/posts/${post.id}`,
                method:'PUT',
                body:post
            }),
            invalidatesTags:['Post']
        }),
        deletePost:build.mutation<IPost,IPost>({
            query:(post)=>({
                url:`/posts/${post.id}`,
                method:'DELETE',
              
            }),
            
            invalidatesTags:['Post']
        }),
    })
   

    })



