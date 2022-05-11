import { Fragment, useEffect , useState } from 'react';
import Spinner from "./Spinner";


export default function Comments(props){
const [comments, setComments] = useState([]);
const [isLoading, setLoading] = useState(true);
    useEffect ( () => {
        async function fetchData(){
            const response = await fetch ('https://jsonplaceholder.typicode.com/comments')
            const data = await response.json();
            setComments(data)
            setLoading (false);
        })()
        fetchData();
    },[props.postId])

 
    return (
        <Fragment>
        <Spinner show={isLoading}>
    {comments.map(comment =>
            <dl className='comment'>
                <dt>Author</dt>
                <dd>{comment.name}</dd>
                <dt>Text</dt>
                <dd>{comment.body}</dd>
            </dl>
        </Spinner>
         </Fragment>)
 }
