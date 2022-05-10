import { useEffect , useState } from 'react';
import Author from './Author';


 export default function Post(props){
    const [photo, setPhoto] = useState('');
    const post = props.post;
    useEffect ( () => {
        async function fetchPhotoData(){
            const response = await fetch (`https://jsonplaceholder.typicode.com/photos/${post.id}`);
            const data = await response.json();
            setPhoto(data.url)
        }
        fetchPhotoData();
    },[post])

 
    return (<article>
            <h3> {post.title} </h3>
            <img src={photo} alt=''/>
            <p> {post.body} </p>
            <Author userId ={post.userId}/>
            <Comments userId ={post.userId}/>
        </article>)
 }