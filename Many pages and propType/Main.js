import { Fragment } from "react";
import { Link } from "react-router-dom";
import React, { useState , useEffect} from 'react';


function Main(props){
    const [users, setUsers] = useState([]);
    useEffect ( () => {
        (async function fetchData(){
            const response = await fetch (`http://192.168.0.200:3000/posts`)
            const data = await response.json();
            setUsers(data);
        })();
    },[props.id])

 

  return(<Fragment>
      {posts.map(post=><article>
        <h3>{post.title}</h3>
        <img src={post}></img>

      </article>)}
    <h1>Custom component</h1>
    <nav>
        <Link to="/">Main</Link>{" "}
        <Link to="posts">Posts</Link>
      </nav>
  </Fragment>)
}


Main.propType={}
