import { Fragment, useEffect , useState } from 'react';
import Post from './Post';


 export default function App(){
    const [posts, setPosts] = useState([]);
    useEffect ( () => {
        async function fetchData(){
            const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            setPosts(data)
        }
        fetchData();
    },[])

 
    return (<Fragment>
        {posts.map(p=> <Fragment><Post key={p.id} post={p} /> <hr/></Fragment>)}
        </Fragment> )
 }
