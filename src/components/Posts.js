import React, { useEffect, useState } from 'react';
// import { fetchPosts } from './asynch';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../redux/postSlice';
import Card from './Card';


 


function Posts() {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()


    useEffect(() => {
        console.log('mounting posts')
        fetch("http://localhost:3000/posts")
            .then(r => r.json())
            .then(data =>{ console.log(data); dispatch(setPosts(data))})
                .catch( a => console.log(a))
            
        return () => {
            console.log('unmounting posts')
        }
    }, [])

 
    return (
        <div >
            <h1>Posts</h1>
            <div>
               {posts.map((p, i) => <div><h1 >{p.username}</h1><br /> <img src={p.image} ></img>       </div> )} <br />
            </div>
        </div>
    )
}




export default Posts
