export default function ToDo({todo, toggleTask , removeTask}){
    return (
        <div key={todo.id} className="table mb-4">
              <div
                className={todo.complete ? "item-text strike" : "item-text" }
                 onClick={()=> toggleTask(todo.id)}
                 >
                 {todo.task}
                 </div>
                    <div className="btn btn-danger" onClick={()=> removeTask(todo.id)}>
                    Delete
                    </div>
                    </div>
                    //<button type="submit" className="btn btn-success ms-1">Finished</button>
                
                
             
    )
}
  