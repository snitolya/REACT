import {useParams} from 'react-router-dom'
import { useState , useEffect} from 'react';

function Post(){
  const {id}= useParams;
  const [post, setPost] = useState();

  useEffect ( () => {
    (async function (){
        const res = await fetch (`http://192.168.0.200:3000/posts/${id}`);
        const data = await res.json();
        setPost(data);
    })();
},[id])

return(<article>
  <h1>{post?.title}</h1>
  <img src={post?.poster} alt=''/>
  {post?.body.map( (paragraph,i)=> <p key={i}>{paragraph}</p>)}
  <div>
    {post?.images.map( (image,i)=> <img key={i} src={image}/>)}
  </div>
</article>)
}



export default Post;
Post.propType={}
