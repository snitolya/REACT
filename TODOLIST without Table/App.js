import {useState} from "react";
import ToDoForm from './ToDoForm';
import ToDo from "./ToDo";

export default function App(){
const[todos,setTodos] = useState([]);


const addTask = (userInput)=>{
  if(userInput){
    const newItem ={
      id:Math.random().toString(36).substr(2,9),
      task:userInput,
      complete:false
    }
    setTodos([...todos, newItem]);/*... - это диструктуризация*/
  }
  

 
}

const removeTask =(id) => {
  setTodos([...todos.filter((todo) => todo.id !== id)])

}

const handleToggle = (id)=>{
  setTodos([
    ...todos.map((todo)=>
    todo.id === id ?{ ... todo, complete: !todo.complete} : {...todo }
    )
  ])
}



  return(

  
  <section className="vh-100" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card rounded-3">
          <div className="card-body p-4">

            <h4 className="text-center my-3 pb-3">To Do App</h4>

            <ToDoForm addTask={addTask} />
            {todos.map((todo)=>{
              return(
                <ToDo
                todo={todo}
                key={todo.id} 
                toggleTask={handleToggle}
                removeTask={removeTask}
                />
              )
            })}

            
            </div>
        </div>
      </div>
    </div>
  </div>
</section> 

  )
}