import { Link } from "react-router-dom";
import React, { useState , useEffect, Fragment } from 'react';


function Main(){
    const [posts, setPosts] = useState([]);

    useEffect ( () => {
        (async function (){
            const res= await fetch (`http://192.168.0.200:3000/posts`);
            const data = await res.json();
            setPosts(data);
        })();
    },[])

 
  return(<Fragment>
      {posts.map(post=><article key={post.id}>
        <h3>{post.title}</h3>
        <img src={post.poster} alt=''/> 
        <p>{post.intro}</p>
        <Link to={`/posts/${post.id}`}>Read More</Link>
      </article>)}
  </Fragment>)
}


export default Main ;
Main.propType={}


