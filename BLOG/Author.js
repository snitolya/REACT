import { Fragment, useEffect , useState } from 'react';
import Spinner from './Spinner';


export default function Author(props){
  const [author, setAuthor] = useState({})
  const [isLoading, setLoading] = useState(true);
    useEffect ( () => {
        (async function fetchData(){
            const response = await fetch (`https://jsonplaceholder.typicode.com/users/${props.userId}`)
            const data = await response.json();
            setAuthor(data)
            setLoading(false);
        })();
    },[props.userId])

 
    return ( 
  <Fragment>
        <Spinner show={isLoading}>
            <dl>
                <dt>name</dt>
                <dd>{author.name}</dd>
                <dt>email</dt>
                <dd>{author.email}</dd>
                <dt>phone</dt>
                <dd>{author.phone}</dd>
            </dl>
        </Spinner>
         </Fragment>)
 }
