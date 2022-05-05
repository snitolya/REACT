import React, { useState , useEffect} from 'react';


function AppUsers(props) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
 function loadUsers(){
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then((res) => {
          setUsers(res.data);
        } )
  }
  useEffect(() => {
    loadUsers()
   }, [page])
  return (
    <div>
      <ul>
       {users.map(u=> <li key={u.id}>{u.email}</li>)}
      </ul>
      <button onClick={() => setPage(page - 1)}>Previous</button>
      <button onClick={() => setPage(page +1)}>Next</button>
    </div>
  );
}

export default AppUsers;
