import { Fragment, useEffect , useState } from 'react';
import Spinner from './Spinner';


export default function Comments(props){
  const [comments, setComments] = useState([])
  const [isLoading, setLoading] = useState(true);
    useEffect ( () => {
        (async function fetchData(){
            const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${props.comment}`)
            const data = await response.json();
            setComments(data)
            setLoading(false);
        })();
    },[props.postId])
    console.log(comments);

 
    return ( 
  <Fragment>
        <Spinner show={isLoading}>
       {comments.map(comment =>
            <dl className = 'comment'>
                <dt>Author</dt>
                <dd>{comment.name}</dd>
                <dt>Text</dt>
                <dd>{comment.body}</dd>
            </dl>
            )}
        </Spinner>
         </Fragment>)
 }


















// import { Fragment, useEffect , useState } from 'react';
// import Spinner from './Spinner';


// export default function Author(props){
//   const [author, setAuthor] = useState({})
//   const [isLoading, setLoading] = useState(true);
//     useEffect ( () => {
//         (async function fetchData(){
//             const response = await fetch (`https://jsonplaceholder.typicode.com/users/${props.userId}`)
//             const data = await response.json();
//             setAuthor(data)
//             setLoading(false);
//         })();
//     },[props.userId])

 
//     return ( 
//   <Fragment>
//         <Spinner show={isLoading}>
//             <dl>
//                 <dt>name</dt>
//                 <dd>{author.name}</dd>
//                 <dt>email</dt>
//                 <dd>{author.email}</dd>
//                 <dt>phone</dt>
//                 <dd>{author.phone}</dd>
//             </dl>
//         </Spinner>
//          </Fragment>)
//  }
